import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = index => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqCategories = [
    {
      title: 'Orders & Shipping',
      icon: 'cart',
      questions: [
        {
          question: 'How long does shipping take?',
          answer:
            'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. International shipping takes 7-14 business days depending on the destination.',
        },
        {
          question: 'Can I track my order?',
          answer:
            "Yes! Once your order ships, you'll receive a tracking number via email. You can track your package using our tracking page or the carrier's website.",
        },
        {
          question: 'What if my order is damaged or incorrect?',
          answer:
            "We're sorry for any inconvenience. Please contact our customer service team within 48 hours of delivery, and we'll arrange for a replacement or refund.",
        },
        {
          question: 'Do you ship internationally?',
          answer:
            'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Check our shipping page for details.',
        },
      ],
    },
    {
      title: 'Returns & Exchanges',
      icon: 'edit',
      questions: [
        {
          question: 'What is your return policy?',
          answer:
            'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items like electronics have a 14-day return window.',
        },
        {
          question: 'How do I return an item?',
          answer:
            "You can initiate a return through your account dashboard or contact customer service. We'll provide you with a prepaid return label and instructions.",
        },
        {
          question: 'When will I receive my refund?',
          answer:
            'Refunds are processed within 3-5 business days after we receive your returned item. The refund will appear on your original payment method within 5-10 business days.',
        },
        {
          question: 'Can I exchange an item for a different size?',
          answer:
            'Yes! You can exchange items for a different size or color. Exchanges are processed as returns and new purchases to ensure you get the exact item you want.',
        },
      ],
    },
    {
      title: 'Account & Payment',
      icon: 'user',
      questions: [
        {
          question: 'How do I create an account?',
          answer:
            'Click the "Sign Up" button in the top right corner, enter your email and create a password. You\'ll receive a confirmation email to verify your account.',
        },
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay.',
        },
        {
          question: 'Is my payment information secure?',
          answer:
            'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.',
        },
        {
          question: 'Can I save my payment information?',
          answer:
            'Yes, you can save your payment methods securely in your account for faster checkout. All information is encrypted and stored securely.',
        },
      ],
    },
    {
      title: 'Products & Sizing',
      icon: 'grid',
      questions: [
        {
          question: 'How do I find the right size?',
          answer:
            "Check our size guide for detailed measurements. Each product page includes size charts and fit information. If you're unsure, contact our customer service team.",
        },
        {
          question: 'Are your products authentic?',
          answer:
            'Yes, all our products are 100% authentic and sourced directly from authorized retailers and manufacturers. We guarantee authenticity.',
        },
        {
          question: 'Do you offer product warranties?',
          answer:
            'Most products come with manufacturer warranties. Electronics typically have 1-2 year warranties. Check individual product pages for specific warranty information.',
        },
        {
          question: "Can I request a product that's out of stock?",
          answer:
            "Yes! You can sign up for restock notifications on product pages. We'll email you when the item becomes available again.",
        },
      ],
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Find answers to common questions about our products, shipping,
              returns, and more.
            </motion.p>
          </div>

          {/* FAQ Categories */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
                variants={fadeInUp}
              >
                {/* Category Header */}
                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-600 rounded-lg">
                      <Icon
                        name={category.icon}
                        size="md"
                        className="text-white"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = `${categoryIndex}-${itemIndex}`
                    const isOpen = openItems.has(globalIndex)

                    return (
                      <div key={itemIndex} className="p-6">
                        <motion.button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full flex items-center justify-between text-left"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                            {item.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon
                              name="chevronDown"
                              size="md"
                              className="text-gray-500 dark:text-gray-400 flex-shrink-0"
                            />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-primary-100 mb-6">
                Can't find what you're looking for? Our customer service team is
                here to help.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <Icon name="chevronRight" size="sm" className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default FAQ
