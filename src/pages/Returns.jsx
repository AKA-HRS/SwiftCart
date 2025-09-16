import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'

const Returns = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description:
        'Log into your account and go to "My Orders" to start a return request.',
      icon: 'edit',
    },
    {
      step: 2,
      title: 'Package Items',
      description:
        'Pack your items in the original packaging with all tags and accessories.',
      icon: 'cart',
    },
    {
      step: 3,
      title: 'Print Label',
      description:
        'Print the prepaid return label we provide and attach it to your package.',
      icon: 'check',
    },
    {
      step: 4,
      title: 'Ship & Track',
      description:
        'Drop off at any authorized carrier location and track your return.',
      icon: 'star',
    },
  ]

  const returnPolicy = [
    {
      category: 'Standard Items',
      timeframe: '30 days',
      condition: 'Unused with original tags',
      description: 'Most clothing, accessories, and general merchandise',
    },
    {
      category: 'Electronics',
      timeframe: '14 days',
      condition: 'Unopened or factory reset',
      description: 'Phones, tablets, computers, and electronic devices',
    },
    {
      category: 'Final Sale Items',
      timeframe: 'No returns',
      condition: 'As marked on product page',
      description:
        'Clearance items, personalized products, and intimate apparel',
    },
  ]

  const refundInfo = [
    {
      title: 'Refund Processing',
      description:
        'Refunds are processed within 3-5 business days after we receive your returned item.',
    },
    {
      title: 'Refund Method',
      description:
        'Refunds are issued to your original payment method. Credit card refunds may take 5-10 business days to appear.',
    },
    {
      title: 'Return Shipping',
      description:
        'Free return shipping is provided for eligible returns. Some items may require you to pay return shipping.',
    },
    {
      title: 'Exchange Policy',
      description:
        "Exchanges are processed as returns and new purchases. You'll receive a refund for the original item and be charged for the new item.",
    },
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
              Returns & Exchanges
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Easy returns and exchanges. We want you to love what you buy.
            </motion.p>
          </div>

          {/* Return Process */}
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
              How to Return an Item
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {returnSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={step.icon}
                      size="lg"
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Return Policy */}
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
              Return Policy by Category
            </motion.h2>
            <div className="space-y-4">
              {returnPolicy.map((policy, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {policy.category}
                        </h3>
                        <Badge
                          variant={
                            policy.timeframe === 'No returns'
                              ? 'danger'
                              : 'primary'
                          }
                          size="sm"
                        >
                          {policy.timeframe}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {policy.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        <strong>Condition:</strong> {policy.condition}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Refund Information */}
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
              Refund Information
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {refundInfo.map((info, index) => (
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

          {/* Important Notes */}
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-16"
            variants={fadeInUp}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg flex-shrink-0">
                <Icon
                  name="edit"
                  size="md"
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  Important Return Notes
                </h3>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Items must be in original condition with all tags and
                    packaging
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Personalized or customized items cannot be returned
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Return shipping costs may apply for items returned after 30
                    days
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    We reserve the right to refuse returns that don't meet our
                    policy
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="text-center space-y-4" variants={fadeInUp}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Start a Return
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Support
              </Button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Need help? Our customer service team is here to assist you with
              returns and exchanges.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Returns
