import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { productsApi } from '../services/api'
import {
  heroVariants,
  heroTextVariants,
  fadeInUp,
} from '../components/animations/motionVariants'
import ProductGrid from '../components/product/ProductGrid'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'
import MotionStagger from '../components/animations/MotionStagger'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await productsApi.getFeatured(8)
        setFeaturedProducts(products)
      } catch (error) {
        console.error('Error loading featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedProducts()
  }, [])

  const categories = [
    {
      name: 'Sneakers',
      href: '/catalog?category=sneakers',
      image: '/images/categories/sneakers.jpg',
      description: 'Latest kicks for every style',
    },
    {
      name: 'Apparel',
      href: '/catalog?category=apparel',
      image: '/images/categories/apparel.jpg',
      description: 'Trendy clothing for all occasions',
    },
    {
      name: 'Accessories',
      href: '/catalog?category=accessories',
      image: '/images/categories/accessories.jpg',
      description: 'Complete your look with style',
    },
    {
      name: 'Tech',
      href: '/catalog?category=tech',
      image: '/images/categories/tech.jpg',
      description: 'Cutting-edge technology',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5 "></div>
        </div>

        {/* Content */}
        <Container>
          <div className="text-center relative z-10">
            <div className="space-y-8">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Discover Amazing
                <motion.span 
                  className="block text-orange-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                  Products
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                Shop the latest trends in fashion, tech, and lifestyle. Quality
                products at unbeatable prices.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              >
                <Link to="/catalog">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="w-full sm:w-auto">
                      Shop Now
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/catalog?featured=true">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Featured Items
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <MotionFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our curated collections designed to match your style and
                needs
              </p>
            </div>
          </MotionFadeIn>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={category.href}>
                  <div className="relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-square mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </MotionStagger>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <MotionFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Handpicked items that our customers love
              </p>
            </div>
          </MotionFadeIn>

          <ProductGrid
            products={featuredProducts}
            loading={loading}
            columns={4}
          />

          <MotionFadeIn className="text-center mt-12">
            <Link to="/catalog?featured=true">
              <Button variant="outline" size="lg">
                View All Featured
              </Button>
            </Link>
          </MotionFadeIn>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-orange-500">
        <Container>
          <MotionFadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get the latest updates on new products, exclusive deals, and
                style tips
              </p>

              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>

              <p className="text-sm text-white/80 mt-4">
                No spam, unsubscribe at any time
              </p>
            </div>
          </MotionFadeIn>
        </Container>
      </section>
    </div>
  )
}

export default Home
