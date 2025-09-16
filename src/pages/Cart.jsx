import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import { fadeInUp } from '../components/animations/motionVariants'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'
import Icon from '../components/common/Icon'

const Cart = () => {
  const { items, totals, clearCart } = useCart()

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart()
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="py-20">
            <MotionFadeIn>
              <div className="text-center">
                <div className="text-gray-400 dark:text-gray-600 mb-8">
                  <Icon name="cart" size="xl" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Your cart is empty
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Link to="/catalog">
                  <Button size="lg">Start Shopping</Button>
                </Link>
              </div>
            </MotionFadeIn>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="py-8">
          {/* Header */}
          <MotionFadeIn>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Shopping Cart
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your
                cart
              </p>
            </div>
          </MotionFadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <MotionFadeIn>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Cart Items
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearCart}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Clear Cart
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {items.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </MotionFadeIn>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <MotionFadeIn>
                <CartSummary />
              </MotionFadeIn>
            </div>
          </div>

          {/* Continue Shopping */}
          <MotionFadeIn className="mt-8">
            <div className="text-center">
              <Link to="/catalog">
                <Button variant="outline" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </MotionFadeIn>
        </div>
      </Container>
    </div>
  )
}

export default Cart
