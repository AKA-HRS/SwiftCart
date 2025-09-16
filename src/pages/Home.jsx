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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amazon-bg-light to-amazon-bg-lighter dark:from-amazon-nav-darker dark:to-amazon-nav-dark">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        </div>

        {/* Content */}
        <Container>
          <div className="text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amazon-text-primary dark:text-amazon-white">
                Discover Amazing
                <span className="block text-amazon-orange">Products</span>
              </h1>

              <p className="text-xl md:text-2xl text-amazon-text-muted dark:text-amazon-text-muted max-w-3xl mx-auto">
                Shop the latest trends in fashion, tech, and lifestyle. Quality
                products at unbeatable prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/catalog">
                  <Button size="lg" className="w-full sm:w-auto">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/catalog?featured=true">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Featured Items
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-amazon-text-muted dark:border-amazon-text-muted rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-amazon-text-muted dark:bg-amazon-text-muted rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-amazon-white dark:bg-amazon-nav-darker">
        <Container>
          <MotionFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-amazon-text-primary dark:text-amazon-white mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-amazon-text-muted dark:text-amazon-text-muted max-w-2xl mx-auto">
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
                  <div className="relative overflow-hidden rounded-xl bg-amazon-bg-lighter dark:bg-amazon-nav-dark aspect-square mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-amazon-orange to-amazon-orange-buy opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amazon-text-primary dark:text-amazon-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-amazon-text-muted dark:text-amazon-text-muted">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </MotionStagger>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-amazon-bg-light dark:bg-amazon-nav-dark">
        <Container>
          <MotionFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-amazon-text-primary dark:text-amazon-white mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-amazon-text-muted dark:text-amazon-text-muted max-w-2xl mx-auto">
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
      <section className="py-20 bg-amazon-orange">
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

              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-amazon-text-primary placeholder-amazon-text-muted focus:outline-none focus:ring-2 focus:ring-white"
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
