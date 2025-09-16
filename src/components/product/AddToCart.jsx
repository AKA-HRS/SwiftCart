import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useCart } from '../../context/CartContext'
import { useUI } from '../../context/UIContext'
import Button from '../common/Button'
import QuantityStepper from '../forms/QuantityStepper'
import Icon from '../common/Icon'
import { buttonHover } from '../animations/motionVariants'

const AddToCart = ({
  product,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const { addItem, getItemQuantity } = useCart()
  const { addToast } = useUI()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const quantityInCart = getItemQuantity(product.id)
  const isInCart = quantityInCart > 0
  const isOutOfStock = product.stock === 0

  const handleAddToCart = async () => {
    if (isOutOfStock) return

    setIsAdding(true)

    try {
      addItem(product, quantity)
      addToast({
        type: 'success',
        message: `${product.title} added to cart!`,
        duration: 3000,
      })

      // Reset quantity after adding
      setQuantity(1)
    } catch (error) {
      addToast({
        type: 'error',
        message: 'Failed to add item to cart',
        duration: 3000,
      })
    } finally {
      setIsAdding(false)
    }
  }

  if (variant === 'simple') {
    return (
      <Button
        variant={isInCart ? 'secondary' : 'primary'}
        size={size}
        className={className}
        onClick={handleAddToCart}
        disabled={isOutOfStock || isAdding}
        loading={isAdding}
      >
        {isInCart ? (
          <>
            <Icon name="check" size="sm" className="mr-2" />
            In Cart ({quantityInCart})
          </>
        ) : isOutOfStock ? (
          'Out of Stock'
        ) : (
          <>
            <Icon name="cart" size="sm" className="mr-2" />
            Add to Cart
          </>
        )}
      </Button>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Quantity:
        </label>
        <QuantityStepper
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={product.stock}
          disabled={isOutOfStock}
          size={size}
        />
      </div>

      {/* Stock Status */}
      {product.stock > 0 && product.stock < 10 && (
        <p className="text-sm text-orange-600 dark:text-orange-400">
          Only {product.stock} left in stock!
        </p>
      )}

      {/* Add to Cart Button */}
      <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
        <Button
          variant={isInCart ? 'secondary' : 'primary'}
          size={size}
          className="w-full"
          onClick={handleAddToCart}
          disabled={isOutOfStock || isAdding}
          loading={isAdding}
        >
          {isInCart ? (
            <>
              <Icon name="check" size="sm" className="mr-2" />
              In Cart ({quantityInCart})
            </>
          ) : isOutOfStock ? (
            'Out of Stock'
          ) : (
            <>
              <Icon name="cart" size="sm" className="mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </motion.div>

      {/* Additional Info */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>✓ Free shipping on orders over $100</p>
        <p>✓ 30-day return policy</p>
        <p>✓ Secure checkout</p>
      </div>
    </div>
  )
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'simple']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
}

export default AddToCart
