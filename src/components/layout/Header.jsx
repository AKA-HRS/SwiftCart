import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { useUI } from '../../context/UIContext'
import { useTheme } from '../../context/ThemeContext'
import Button from '../common/Button'
import Icon from '../common/Icon'
import SearchBar from '../forms/SearchBar'
import MobileNav from './MobileNav'

const Header = () => {
  const navigate = useNavigate()
  const { getTotalItems } = useCart()
  const { toggleCartDrawer, toggleMobileNav } = useUI()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartItemCount = getTotalItems()

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
        : 'bg-gray-900'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-lg">A</span>
              </motion.div>
            <span className="text-xl font-bold text-white">
              SwiftCart
            </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/catalog"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                All Products
              </Link>
              <Link
                to="/catalog?category=sneakers"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Sneakers
              </Link>
              <Link
                to="/catalog?category=apparel"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Apparel
              </Link>
              <Link
                to="/catalog?category=accessories"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Accessories
              </Link>
              <Link
                to="/catalog?category=tech"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                Tech
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:block flex-1 max-w-md mx-8">
              <SearchBar />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <Icon
                  name={theme === 'dark' ? 'sun' : 'moon'}
                  size="md"
                  className="text-white"
                />
              </motion.button>

              {/* Cart Button */}
              <motion.button
                onClick={toggleCartDrawer}
                className="relative p-2 rounded-lg bg-amazon-nav-hover hover:bg-amazon-nav-dark transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping cart"
              >
                <Icon name="cart" size="md" className="text-amazon-white" />
                {cartItemCount > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMobileNav}
                className="md:hidden p-2 rounded-lg bg-amazon-nav-hover hover:bg-amazon-nav-dark transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Icon name="menu" size="md" className="text-amazon-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav />
    </>
  )
}

export default Header
