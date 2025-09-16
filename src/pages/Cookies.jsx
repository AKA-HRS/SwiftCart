import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'

const Cookies = () => {
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description:
        'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Authentication, security, and basic functionality',
      examples: [
        'Login status',
        'Shopping cart',
        'Security tokens',
        'User preferences',
      ],
      canDisable: false,
    },
    {
      type: 'Performance Cookies',
      description:
        'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      purpose: 'Analytics and performance monitoring',
      examples: ['Page views', 'Bounce rate', 'Load times', 'Error tracking'],
      canDisable: true,
    },
    {
      type: 'Functional Cookies',
      description:
        'These cookies enable enhanced functionality and personalization, such as videos and live chat.',
      purpose: 'Enhanced user experience and personalization',
      examples: [
        'Language preferences',
        'Region settings',
        'Chat functionality',
        'Video players',
      ],
      canDisable: true,
    },
    {
      type: 'Marketing Cookies',
      description:
        'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      purpose: 'Advertising and marketing personalization',
      examples: [
        'Ad targeting',
        'Social media integration',
        'Retargeting',
        'Conversion tracking',
      ],
      canDisable: true,
    },
  ]

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_gid', '_gat'],
      moreInfo: 'https://policies.google.com/privacy',
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and conversion tracking',
      cookies: ['_fbp', 'fr'],
      moreInfo: 'https://www.facebook.com/privacy/explanation',
    },
    {
      name: 'Stripe',
      purpose: 'Payment processing and fraud prevention',
      cookies: ['__stripe_mid', '__stripe_sid'],
      moreInfo: 'https://stripe.com/privacy',
    },
    {
      name: 'Intercom',
      purpose: 'Customer support and live chat',
      cookies: ['intercom-id', 'intercom-session'],
      moreInfo: 'https://www.intercom.com/privacy',
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
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={fadeInUp}
            >
              Cookie Policy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              This policy explains how we use cookies and similar technologies
              on our website to enhance your browsing experience.
            </motion.p>
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-500 mt-4"
              variants={fadeInUp}
            >
              Last updated: January 15, 2024
            </motion.p>
          </div>

          {/* Introduction */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and to provide information to
              website owners.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Cookies allow a website to recognize a user's device and remember
              information about their visit, such as their preferred language
              and other settings. This can make their next visit easier and the
              site more useful to them.
            </p>
          </motion.div>

          {/* Cookie Types */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {cookie.type}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cookie.canDisable
                          ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                          : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}
                    >
                      {cookie.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {cookie.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Purpose:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cookie.purpose}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Examples:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Third Party Services */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Third-Party Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {thirdPartyServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.purpose}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Cookies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.cookies.map((cookie, cookieIndex) => (
                        <span
                          key={cookieIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                        >
                          {cookie}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={service.moreInfo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm transition-colors duration-200"
                  >
                    Learn more about {service.name} privacy policy
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Managing Your Cookie Preferences
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Browser Settings
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Most web browsers allow you to control cookies through their
                    settings preferences. You can set your browser to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Accept all cookies</li>
                    <li>Reject all cookies</li>
                    <li>Notify you when a cookie is set</li>
                    <li>Delete cookies when you close your browser</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Cookie Consent
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    When you first visit our website, you'll see a cookie
                    consent banner. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Accept all cookies</li>
                    <li>Customize your preferences</li>
                    <li>Reject non-essential cookies</li>
                    <li>Change your preferences anytime</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Browser Instructions */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Browser-Specific Instructions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Chrome',
                  url: 'https://support.google.com/chrome/answer/95647',
                },
                {
                  name: 'Firefox',
                  url: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
                },
                {
                  name: 'Safari',
                  url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac',
                },
                {
                  name: 'Edge',
                  url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
                },
              ].map((browser, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {browser.name}
                  </h3>
                  <a
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    Cookie Settings
                    <Icon name="chevronRight" size="sm" className="ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact of Disabling */}
          <motion.div
            className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8 mb-16"
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
                  Impact of Disabling Cookies
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                  If you choose to disable cookies, some features of our website
                  may not function properly. This may include:
                </p>
                <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Difficulty logging into your account
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Shopping cart not remembering items
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Personalized content and recommendations
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Language and region preferences
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-primary-100 mb-8 text-lg">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us.
              </p>
              <div className="space-y-4">
                <div>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:privacy@modernstore.com"
                    className="text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    privacy@modernstore.com
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+1-555-0123"
                    className="text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    +1 (555) 012-3456
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Cookies
