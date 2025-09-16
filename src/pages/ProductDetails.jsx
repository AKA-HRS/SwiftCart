import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { productsApi } from '../services/api'
import { fadeInUp, imageHover } from '../components/animations/motionVariants'
import ProductGrid from '../components/product/ProductGrid'
import AddToCart from '../components/product/AddToCart'
import Price from '../components/product/Price'
import Rating from '../components/common/Rating'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'
import Icon from '../components/common/Icon'

const ProductDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      try {
        const [productData, relatedData] = await Promise.all([
          productsApi.getBySlug(slug),
          productsApi.getRelated(productData?.id, 4),
        ])

        setProduct(productData)
        setRelatedProducts(relatedData)

        // Set default selections
        if (productData) {
          setSelectedColor(productData.colors[0] || '')
          setSelectedSize(productData.sizes[0] || '')
        }
      } catch (error) {
        console.error('Error loading product:', error)
        navigate('/catalog')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadProduct()
    }
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h1>
          <Button onClick={() => navigate('/catalog')}>Back to Catalog</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="py-8">
          {/* Breadcrumb */}
          <MotionFadeIn>
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <button
                onClick={() => navigate('/')}
                className="hover:text-primary-600"
              >
                Home
              </button>
              <Icon name="chevronRight" size="sm" />
              <button
                onClick={() => navigate('/catalog')}
                className="hover:text-primary-600"
              >
                Catalog
              </button>
              <Icon name="chevronRight" size="sm" />
              <span className="text-gray-900 dark:text-white">
                {product.title}
              </span>
            </nav>
          </MotionFadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <MotionFadeIn>
              <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-square overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                  <motion.img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    variants={imageHover}
                    whileHover="hover"
                  />
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors duration-200 ${
                          selectedImage === index
                            ? 'border-primary-600'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </MotionFadeIn>

            {/* Product Info */}
            <MotionFadeIn>
              <div className="space-y-6">
                {/* Title and Badges */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {product.featured && (
                      <Badge variant="primary">Featured</Badge>
                    )}
                    {product.stock < 10 && product.stock > 0 && (
                      <Badge variant="warning">Low Stock</Badge>
                    )}
                    {product.stock === 0 && (
                      <Badge variant="danger">Out of Stock</Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </h1>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <Rating rating={product.rating} showValue />
                  <span className="text-gray-600 dark:text-gray-400">
                    ({product.reviewsCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <Price price={product.price} size="xl" />

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Color Selection */}
                {product.colors.length > 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Color: {selectedColor}
                    </h3>
                    <div className="flex gap-2">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
                            selectedColor === color
                              ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                {product.sizes.length > 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Size: {selectedSize}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
                            selectedSize === size
                              ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stock Status */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {product.stock > 0 ? (
                    <span className="text-green-600 dark:text-green-400">
                      ✓ {product.stock} in stock
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400">
                      ✗ Out of stock
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <AddToCart product={product} />

                {/* Product Details */}
                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Categories
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {product.categories.map(category => (
                        <Badge key={category} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Tags
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {product.tags.map(tag => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionFadeIn>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <MotionFadeIn className="mt-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Related Products
                </h2>
                <ProductGrid products={relatedProducts} columns={4} />
              </div>
            </MotionFadeIn>
          )}
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
