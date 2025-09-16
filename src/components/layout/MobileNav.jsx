import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useUI } from '../../context/UIContext'
import { useCart } from '../../context/CartContext'
import Icon from '../common/Icon'
import { slideInLeft, backdropVariants } from '../animations/motionVariants'

const MobileNav = () => {
  const { isMobileNavOpen, setMobileNav } = useUI()
  const { getTotalItems } = useCart()

  const cartItemCount = getTotalItems()

  const navigationItems = [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'Catalog', href: '/catalog', icon: 'grid' },
    { name: 'Sneakers', href: '/catalog?category=sneakers', icon: 'shoe' },
    { name: 'Apparel', href: '/catalog?category=apparel', icon: 'shirt' },
    {
      name: 'Accessories',
      href: '/catalog?category=accessories',
      icon: 'watch',
    },
    { name: 'Tech', href: '/catalog?category=tech', icon: 'smartphone' },
  ]

  const handleLinkClick = () => {
    setMobileNav(false)
  }

  return (
    <AnimatePresence>
      {isMobileNavOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setMobileNav(false)}
          />

          {/* Mobile Navigation Panel */}
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 lg:hidden"
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    SwiftCart
                  </span>
                </Link>
                <button
                  onClick={() => setMobileNav(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <Icon name="close" size="md" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        <Icon name={item.icon} size="md" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Cart Summary */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/cart"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="cart" size="md" />
                    <span className="font-medium">Shopping Cart</span>
                  </div>
                  {cartItemCount > 0 && (
                    <span className="bg-primary-600 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
