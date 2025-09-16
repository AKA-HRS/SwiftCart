import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../common/Icon'
import { fadeInUp } from '../animations/motionVariants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/catalog' },
      { name: 'Sneakers', href: '/catalog?category=sneakers' },
      { name: 'Apparel', href: '/catalog?category=apparel' },
      { name: 'Accessories', href: '/catalog?category=accessories' },
      { name: 'Tech', href: '/catalog?category=tech' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Investor Relations', href: '/investors' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ]

  return (
      <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
                <span className="text-xl font-bold text-white">
                  SwiftCart
                </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover amazing products at great prices. Your one-stop shop for
              modern lifestyle essentials.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <motion.a
                  key={social.name}
                  href={social.href}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size="sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
              <h3 className="text-lg font-semibold text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
              <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
              <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
              <h3 className="text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
            className="py-8 border-t border-gray-800"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest products and exclusive
              offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <motion.button
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
            className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
            <p className="text-gray-400 text-sm">
              © {currentYear} SwiftCart. All rights reserved.
            </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Made with ❤️ for modern shoppers
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
