import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../components/animations/motionVariants'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'
import Icon from '../components/common/Icon'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <MotionFadeIn>
            {/* 404 Icon */}
            <motion.div
              className="mb-8"
              variants={scaleIn}
              initial="initial"
              animate="animate"
            >
              <div className="text-8xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                404
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Page Not Found
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300">
                Sorry, we couldn't find the page you're looking for. It might
                have been moved, deleted, or doesn't exist.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Here are some helpful links:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    to="/catalog"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Catalog
                  </Link>
                  <Link
                    to="/cart"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Cart
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link to="/">
                  <Button size="lg">Go Home</Button>
                </Link>
                <Link to="/catalog">
                  <Button variant="outline" size="lg">
                    Browse Products
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

export default NotFound
