import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useCart } from '../../context/CartContext'
import { useUI } from '../../context/UIContext'
import { formatPrice } from '../../utils/format'
import { cartItemVariants } from '../animations/motionVariants'
import QuantityStepper from '../forms/QuantityStepper'
import Button from '../common/Button'
import Icon from '../common/Icon'

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart()
  const { addToast } = useUI()

  const handleQuantityChange = newQuantity => {
    updateQuantity(item.id, newQuantity)
  }

  const handleRemove = () => {
    removeItem(item.id)
    addToast({
      type: 'info',
      message: `${item.title} removed from cart`,
      duration: 2000,
    })
  }

  const totalPrice = item.price * item.quantity

  return (
    <motion.div
      variants={cartItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
    >
      {/* Product Image */}
      <Link to={`/product/${item.slug}`} className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-cover rounded-md"
        />
      </Link>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <Link to={`/product/${item.slug}`}>
          <h3 className="font-medium text-gray-900 dark:text-white truncate">
            {item.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {formatPrice(item.price)} each
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {formatPrice(totalPrice)}
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-2">
          <QuantityStepper
            value={item.quantity}
            onChange={handleQuantityChange}
            min={1}
            max={99}
            size="sm"
          />

          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            <Icon name="trash" size="sm" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default CartItem
