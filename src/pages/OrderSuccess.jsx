import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../components/animations/motionVariants'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'
import Icon from '../components/common/Icon'

const OrderSuccess = () => {
  const [searchParams] = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <MotionFadeIn>
            {/* Success Icon */}
            <motion.div
              className="mb-8"
              variants={scaleIn}
              initial="initial"
              animate="animate"
            >
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name="check"
                  size="xl"
                  className="text-green-600 dark:text-green-400"
                />
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Order Confirmed!
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300">
                Thank you for your purchase. Your order has been successfully
                placed.
              </p>

              {orderId && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Order Number
                  </p>
                  <p className="text-2xl font-mono font-semibold text-gray-900 dark:text-white">
                    {orderId}
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  You will receive an email confirmation shortly with your order
                  details and tracking information.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>What's next?</strong> We'll process your order and
                    send you tracking information within 24 hours.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link to="/catalog">
                  <Button size="lg">Continue Shopping</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </MotionFadeIn>
        </div>
      </Container>
    </div>
  )
}

export default OrderSuccess
