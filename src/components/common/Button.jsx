import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { buttonHover } from '../animations/motionVariants'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-amazon-cart-yellow hover:bg-amazon-cart-yellow-hover text-amazon-text-primary focus:ring-amazon-cart-yellow',
    secondary:
      'bg-amazon-bg-lighter hover:bg-amazon-border-gray text-amazon-text-primary focus:ring-amazon-border-gray',
    outline:
      'border-2 border-amazon-orange text-amazon-orange hover:bg-amazon-orange hover:text-white focus:ring-amazon-orange',
    'buy-now':
      'bg-amazon-orange-buy hover:bg-amazon-orange-hover text-white focus:ring-amazon-orange-buy',
    ghost:
      'text-amazon-orange hover:bg-amazon-search-accent/20 focus:ring-amazon-orange',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      variants={buttonHover}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'buy-now',
    'ghost',
    'danger',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
