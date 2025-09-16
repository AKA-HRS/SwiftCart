import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useCart } from '../../context/CartContext'
import { useUI } from '../../context/UIContext'
import { formatPrice } from '../../utils/format'
import {
  productCardVariants,
  cardHover,
  imageHover,
} from '../animations/motionVariants'
import Rating from '../common/Rating'
import Badge from '../common/Badge'
import Button from '../common/Button'
import Icon from '../common/Icon'

const ProductCard = ({ product, className = '' }) => {
  const { addItem, getItemQuantity } = useCart()
  const { addToast } = useUI()

  const quantityInCart = getItemQuantity(product.id)
  const isInCart = quantityInCart > 0

  const handleAddToCart = e => {
    e.preventDefault()
    e.stopPropagation()

    addItem(product, 1)
    addToast({
      type: 'success',
      message: `${product.title} added to cart!`,
      duration: 3000,
    })
  }

  return (
    <motion.div
      variants={productCardVariants}
      whileHover="hover"
      className={`card card-hover overflow-hidden ${className}`}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
          <motion.img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
            variants={imageHover}
            whileHover="hover"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.featured && (
              <Badge variant="primary" size="sm">
                Featured
              </Badge>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <Badge variant="warning" size="sm">
                Low Stock
              </Badge>
            )}
            {product.stock === 0 && (
              <Badge variant="danger" size="sm">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <motion.button
              className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon name="heart" size="sm" />
            </motion.button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <Rating rating={product.rating} size="sm" showValue />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.reviewsCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            {product.stock > 0 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {product.stock} in stock
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            variant={isInCart ? 'secondary' : 'primary'}
            size="sm"
            className="w-full"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {isInCart ? (
              <>
                <Icon name="check" size="sm" className="mr-2" />
                In Cart ({quantityInCart})
              </>
            ) : product.stock === 0 ? (
              'Out of Stock'
            ) : (
              <>
                <Icon name="cart" size="sm" className="mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </Link>
    </motion.div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
  className: PropTypes.string,
}

export default ProductCard
