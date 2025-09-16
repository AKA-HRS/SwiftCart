import axios from 'axios'

// Base URL for API calls
const BASE_URL = '/data'

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add artificial latency for skeleton states (200-400ms)
const addLatency = (min = 200, max = 400) => {
  const delay = Math.random() * (max - min) + min
  return new Promise(resolve => setTimeout(resolve, delay))
}

// Products API
export const productsApi = {
  // Get all products with optional filters
  async getAll(filters = {}) {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      let products = response.data

      // Apply filters
      if (filters.category) {
        products = products.filter(product =>
          product.categories.includes(filters.category)
        )
      }

      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        products = products.filter(
          product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        )
      }

      if (filters.priceMin !== undefined) {
        products = products.filter(product => product.price >= filters.priceMin)
      }

      if (filters.priceMax !== undefined) {
        products = products.filter(product => product.price <= filters.priceMax)
      }

      if (filters.color) {
        products = products.filter(product =>
          product.colors.includes(filters.color)
        )
      }

      if (filters.size) {
        products = products.filter(product =>
          product.sizes.includes(filters.size)
        )
      }

      if (filters.rating) {
        products = products.filter(product => product.rating >= filters.rating)
      }

      if (filters.inStock) {
        products = products.filter(product => product.stock > 0)
      }

      if (filters.featured) {
        products = products.filter(product => product.featured)
      }

      // Apply sorting
      if (filters.sort) {
        switch (filters.sort) {
          case 'price-asc':
            products.sort((a, b) => a.price - b.price)
            break
          case 'price-desc':
            products.sort((a, b) => b.price - a.price)
            break
          case 'rating':
            products.sort((a, b) => b.rating - a.rating)
            break
          case 'newest':
            products.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
            break
          case 'oldest':
            products.sort(
              (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            )
            break
          case 'popular':
            products.sort((a, b) => b.reviewsCount - a.reviewsCount)
            break
          default:
            // Default sorting by featured first, then by creation date
            products.sort((a, b) => {
              if (a.featured && !b.featured) return -1
              if (!a.featured && b.featured) return 1
              return new Date(b.createdAt) - new Date(a.createdAt)
            })
        }
      }

      // Apply pagination
      const page = filters.page || 1
      const limit = filters.limit || 12
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit

      const paginatedProducts = products.slice(startIndex, endIndex)

      return {
        products: paginatedProducts,
        total: products.length,
        page,
        limit,
        totalPages: Math.ceil(products.length / limit),
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      throw new Error('Failed to fetch products')
    }
  },

  // Get product by ID
  async getById(id) {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const product = response.data.find(p => p.id === parseInt(id))

      if (!product) {
        throw new Error('Product not found')
      }

      return product
    } catch (error) {
      console.error('Error fetching product:', error)
      throw new Error('Failed to fetch product')
    }
  },

  // Get product by slug
  async getBySlug(slug) {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const product = response.data.find(p => p.slug === slug)

      if (!product) {
        throw new Error('Product not found')
      }

      return product
    } catch (error) {
      console.error('Error fetching product:', error)
      throw new Error('Failed to fetch product')
    }
  },

  // Get featured products
  async getFeatured(limit = 8) {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const featuredProducts = response.data
        .filter(product => product.featured)
        .slice(0, limit)

      return featuredProducts
    } catch (error) {
      console.error('Error fetching featured products:', error)
      throw new Error('Failed to fetch featured products')
    }
  },

  // Get related products
  async getRelated(productId, limit = 4) {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const currentProduct = response.data.find(p => p.id === productId)

      if (!currentProduct) {
        return []
      }

      const relatedProducts = response.data
        .filter(
          product =>
            product.id !== productId &&
            product.categories.some(cat =>
              currentProduct.categories.includes(cat)
            )
        )
        .slice(0, limit)

      return relatedProducts
    } catch (error) {
      console.error('Error fetching related products:', error)
      throw new Error('Failed to fetch related products')
    }
  },

  // Get categories
  async getCategories() {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const categories = [
        ...new Set(response.data.flatMap(product => product.categories)),
      ]

      return categories.sort()
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw new Error('Failed to fetch categories')
    }
  },

  // Get colors
  async getColors() {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const colors = [
        ...new Set(response.data.flatMap(product => product.colors)),
      ]

      return colors.sort()
    } catch (error) {
      console.error('Error fetching colors:', error)
      throw new Error('Failed to fetch colors')
    }
  },

  // Get sizes
  async getSizes() {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      const sizes = [
        ...new Set(response.data.flatMap(product => product.sizes)),
      ]

      return sizes.sort()
    } catch (error) {
      console.error('Error fetching sizes:', error)
      throw new Error('Failed to fetch sizes')
    }
  },
}

// Search API
export const searchApi = {
  async search(query, filters = {}) {
    await addLatency()

    try {
      const response = await api.get('/products.json')
      let products = response.data

      // Apply search query
      if (query) {
        const searchTerm = query.toLowerCase()
        products = products.filter(
          product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            product.categories.some(cat =>
              cat.toLowerCase().includes(searchTerm)
            )
        )
      }

      // Apply additional filters
      if (filters.category) {
        products = products.filter(product =>
          product.categories.includes(filters.category)
        )
      }

      if (filters.priceMin !== undefined) {
        products = products.filter(product => product.price >= filters.priceMin)
      }

      if (filters.priceMax !== undefined) {
        products = products.filter(product => product.price <= filters.priceMax)
      }

      return products
    } catch (error) {
      console.error('Error searching products:', error)
      throw new Error('Failed to search products')
    }
  },
}

// Analytics API (mock)
export const analyticsApi = {
  async trackEvent(event, data = {}) {
    // In a real app, this would send data to analytics service
    console.log('Analytics Event:', event, data)

    // Simulate API call
    await addLatency(100, 200)

    return { success: true }
  },

  async trackPageView(page, data = {}) {
    return this.trackEvent('page_view', { page, ...data })
  },

  async trackProductView(productId, data = {}) {
    return this.trackEvent('product_view', { productId, ...data })
  },

  async trackAddToCart(productId, quantity, data = {}) {
    return this.trackEvent('add_to_cart', { productId, quantity, ...data })
  },

  async trackPurchase(orderId, total, data = {}) {
    return this.trackEvent('purchase', { orderId, total, ...data })
  },
}

export default api
