import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'
import Button from '../common/Button'

const CartSummary = ({ className = '' }) => {
  const { items, totals } = useCart()

  if (items.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Your cart is empty
        </p>
        <Link to="/catalog">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Order Summary
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Subtotal ({items.length} items)
          </span>
          <span className="text-gray-900 dark:text-white">
            {formatPrice(totals.subtotal)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="text-gray-900 dark:text-white">
            {totals.shipping === 0 ? 'Free' : formatPrice(totals.shipping)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="text-gray-900 dark:text-white">
            {formatPrice(totals.tax)}
          </span>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-900 dark:text-white">Total</span>
            <span className="text-gray-900 dark:text-white">
              {formatPrice(totals.total)}
            </span>
          </div>
        </div>
      </div>

      <Link to="/checkout">
        <Button className="w-full" size="lg">
          Proceed to Checkout
        </Button>
      </Link>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
        Secure checkout with SSL encryption
      </p>
    </div>
  )
}

CartSummary.propTypes = {
  className: PropTypes.string,
}

export default CartSummary
