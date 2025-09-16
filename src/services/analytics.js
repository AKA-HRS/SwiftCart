// Analytics service for tracking user interactions
export const analytics = {
  // Track page views
  trackPageView(page, data = {}) {
    console.log('Page View:', page, data)
    // In a real app, this would send to Google Analytics, Mixpanel, etc.
  },

  // Track product views
  trackProductView(productId, productName, data = {}) {
    console.log('Product View:', { productId, productName, ...data })
  },

  // Track add to cart
  trackAddToCart(productId, productName, price, quantity, data = {}) {
    console.log('Add to Cart:', {
      productId,
      productName,
      price,
      quantity,
      ...data,
    })
  },

  // Track purchase
  trackPurchase(orderId, total, items, data = {}) {
    console.log('Purchase:', { orderId, total, items, ...data })
  },

  // Track search
  trackSearch(query, results, data = {}) {
    console.log('Search:', { query, results, ...data })
  },
}
