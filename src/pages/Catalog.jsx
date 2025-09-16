import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { productsApi } from '../services/api'
import { fadeInUp } from '../components/animations/motionVariants'
import ProductGrid from '../components/product/ProductGrid'
import SearchBar from '../components/forms/SearchBar'
import Select from '../components/forms/Select'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [pagination, setPagination] = useState({})

  // Get current filters from URL
  const currentFilters = {
    search: searchParams.get('q') || '',
    category: searchParams.get('category') || '',
    priceMin: searchParams.get('price_min')
      ? parseFloat(searchParams.get('price_min'))
      : undefined,
    priceMax: searchParams.get('price_max')
      ? parseFloat(searchParams.get('price_max'))
      : undefined,
    color: searchParams.get('color') || '',
    size: searchParams.get('size') || '',
    sort: searchParams.get('sort') || '',
    page: searchParams.get('page') ? parseInt(searchParams.get('page')) : 1,
    featured: searchParams.get('featured') === 'true',
  }

  // Load products and filters
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const [productsData, categoriesData, colorsData, sizesData] =
          await Promise.all([
            productsApi.getAll(currentFilters),
            productsApi.getCategories(),
            productsApi.getColors(),
            productsApi.getSizes(),
          ])

        setProducts(productsData.products)
        setPagination({
          total: productsData.total,
          page: productsData.page,
          totalPages: productsData.totalPages,
        })
        setCategories(categoriesData)
        setColors(colorsData)
        setSizes(sizesData)
      } catch (error) {
        console.error('Error loading catalog data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [searchParams])

  // Update URL when filters change
  const updateFilters = newFilters => {
    const params = new URLSearchParams(searchParams)

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== '') {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    // Reset to page 1 when filters change
    if (newFilters.page === undefined) {
      params.delete('page')
    }

    setSearchParams(params)
  }

  const handleSearch = query => {
    updateFilters({ q: query })
  }

  const handleCategoryChange = category => {
    updateFilters({ category })
  }

  const handleSortChange = sort => {
    updateFilters({ sort })
  }

  const handlePageChange = page => {
    updateFilters({ page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const sortOptions = [
    { value: '', label: 'Default' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
  ]

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...categories.map(cat => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="py-8">
          {/* Header */}
          <MotionFadeIn>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Product Catalog
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover our complete collection of products
              </p>
            </div>
          </MotionFadeIn>

          {/* Filters */}
          <MotionFadeIn>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="lg:col-span-2">
                  <SearchBar
                    placeholder="Search products..."
                    onSearch={handleSearch}
                    defaultValue={currentFilters.search}
                  />
                </div>

                {/* Category Filter */}
                <Select
                  options={categoryOptions}
                  value={currentFilters.category}
                  onChange={e => handleCategoryChange(e.target.value)}
                  placeholder="All Categories"
                />

                {/* Sort Filter */}
                <Select
                  options={sortOptions}
                  value={currentFilters.sort}
                  onChange={e => handleSortChange(e.target.value)}
                  placeholder="Sort by"
                />
              </div>

              {/* Active Filters */}
              {(currentFilters.search ||
                currentFilters.category ||
                currentFilters.sort) && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Active filters:
                    </span>
                    {currentFilters.search && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                        Search: {currentFilters.search}
                      </span>
                    )}
                    {currentFilters.category && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                        Category: {currentFilters.category}
                      </span>
                    )}
                    {currentFilters.sort && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                        Sort:{' '}
                        {
                          sortOptions.find(
                            opt => opt.value === currentFilters.sort
                          )?.label
                        }
                      </span>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-red-600 hover:text-red-700"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </MotionFadeIn>

          {/* Results */}
          <MotionFadeIn>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {loading
                  ? 'Loading...'
                  : `Showing ${products.length} of ${pagination.total} products`}
              </p>
            </div>
          </MotionFadeIn>

          {/* Product Grid */}
          <ProductGrid
            products={products}
            loading={loading}
            columns={4}
            className="mb-12"
          />

          {/* Pagination */}
          {!loading && pagination.totalPages > 1 && (
            <MotionFadeIn>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1}
                  >
                    Previous
                  </Button>

                  {Array.from(
                    { length: pagination.totalPages },
                    (_, i) => i + 1
                  ).map(page => (
                    <Button
                      key={page}
                      variant={page === pagination.page ? 'primary' : 'outline'}
                      onClick={() => handlePageChange(page)}
                      className="w-10"
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={pagination.page === pagination.totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </MotionFadeIn>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Catalog
