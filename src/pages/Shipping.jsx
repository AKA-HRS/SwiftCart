import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Badge from '../components/common/Badge'

const Shipping = () => {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'Free',
      duration: '3-5 business days',
      description: 'Free shipping on orders over $50',
      icon: 'cart',
      features: [
        'Tracking included',
        'Signature required for orders over $200',
      ],
    },
    {
      name: 'Express Shipping',
      price: '$9.99',
      duration: '1-2 business days',
      description: 'Fast delivery for urgent orders',
      icon: 'star',
      features: [
        'Priority handling',
        'Tracking included',
        'Signature required',
      ],
    },
    {
      name: 'Overnight Shipping',
      price: '$19.99',
      duration: 'Next business day',
      description: 'Get your order the next day',
      icon: 'check',
      features: [
        'Express processing',
        'Real-time tracking',
        'Guaranteed delivery',
      ],
    },
  ]

  const shippingInfo = [
    {
      title: 'Processing Time',
      description:
        'Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day.',
    },
    {
      title: 'International Shipping',
      description:
        'We ship to over 50 countries worldwide. International shipping takes 7-14 business days and may be subject to customs duties and taxes.',
    },
    {
      title: 'Order Tracking',
      description:
        "You'll receive a tracking number via email once your order ships. Track your package in real-time through our tracking page.",
    },
    {
      title: 'Delivery Issues',
      description:
        "If you experience any delivery issues, contact our customer service team immediately. We'll work with the carrier to resolve the problem.",
    },
  ]

  const restrictions = [
    'Some items may have shipping restrictions due to size or weight',
    'Hazardous materials cannot be shipped internationally',
    'Electronics may require special handling and packaging',
    'Fragile items are carefully packaged with extra protection',
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <Container>
        <motion.div
          className="py-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={fadeInUp}
            >
              Shipping Information
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Fast, reliable shipping options to get your orders delivered
              quickly and safely.
            </motion.p>
          </div>

          {/* Shipping Options */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              variants={fadeInUp}
            >
              Shipping Options
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={option.icon}
                        size="xl"
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {option.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {option.price}
                      </span>
                      {option.price === 'Free' && (
                        <Badge variant="success" size="sm">
                          Free
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {option.duration}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {option.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Shipping Information */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              variants={fadeInUp}
            >
              Important Information
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shippingInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Shipping Restrictions */}
          <motion.div
            className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8"
            variants={fadeInUp}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-800 rounded-lg flex-shrink-0">
                <Icon
                  name="edit"
                  size="md"
                  className="text-yellow-600 dark:text-yellow-400"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                  Shipping Restrictions & Special Handling
                </h3>
                <ul className="space-y-2">
                  {restrictions.map((restriction, index) => (
                    <li
                      key={index}
                      className="flex items-start text-yellow-700 dark:text-yellow-300"
                    >
                      <Icon
                        name="check"
                        size="sm"
                        className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                      />
                      {restriction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Need help with shipping?
              </h2>
              <p className="text-primary-100 mb-6">
                Our customer service team is here to help with any shipping
                questions or concerns.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
                <Icon name="chevronRight" size="sm" className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Shipping
