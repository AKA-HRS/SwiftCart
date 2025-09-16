import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { useUI } from '../../context/UIContext'
import { useScrollLock } from '../../hooks/useScrollLock'
import { formatPrice } from '../../utils/format'
import { slideInRight, backdropVariants } from '../animations/motionVariants'
import CartItem from './CartItem'
import Button from '../common/Button'
import Icon from '../common/Icon'

const CartDrawer = () => {
  const { items, totals, clearCart } = useCart()
  const { isCartDrawerOpen, setCartDrawer } = useUI()

  // Lock scroll when drawer is open
  useScrollLock(isCartDrawerOpen)

  const handleCheckout = () => {
    setCartDrawer(false)
    // Navigate to checkout will be handled by the Link component
  }

  const handleClearCart = () => {
    clearCart()
  }

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setCartDrawer(false)}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-900 z-50 shadow-xl"
            variants={slideInRight}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Shopping Cart ({items.length})
                </h2>
                <button
                  onClick={() => setCartDrawer(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <Icon name="close" size="md" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="text-gray-400 dark:text-gray-600 mb-4">
                      <Icon name="cart" size="xl" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      Add some items to get started
                    </p>
                    <Button
                      onClick={() => setCartDrawer(false)}
                      className="w-full"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Subtotal
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {formatPrice(totals.subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Shipping
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {totals.shipping === 0
                          ? 'Free'
                          : formatPrice(totals.shipping)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Tax
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {formatPrice(totals.tax)}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t border-gray-200 dark:border-gray-700 pt-2">
                      <span className="text-gray-900 dark:text-white">
                        Total
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {formatPrice(totals.total)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Link to="/checkout" onClick={handleCheckout}>
                      <Button className="w-full" size="lg">
                        Checkout
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={handleClearCart}
                      className="w-full"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
