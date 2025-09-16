import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Icon from '../common/Icon'
import { buttonHover } from '../animations/motionVariants'

const QuantityStepper = ({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const handleIncrement = () => {
    if (value < max && !disabled) {
      onChange(value + 1)
    }
  }

  const handleDecrement = () => {
    if (value > min && !disabled) {
      onChange(value - 1)
    }
  }

  const handleInputChange = e => {
    const newValue = parseInt(e.target.value, 10)
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue)
    }
  }

  const sizes = {
    sm: {
      container: 'h-8',
      button: 'w-8 h-8',
      input: 'w-12 h-8 text-sm',
      icon: 'sm',
    },
    md: {
      container: 'h-10',
      button: 'w-10 h-10',
      input: 'w-16 h-10 text-base',
      icon: 'md',
    },
    lg: {
      container: 'h-12',
      button: 'w-12 h-12',
      input: 'w-20 h-12 text-lg',
      icon: 'lg',
    },
  }

  const sizeClasses = sizes[size]

  return (
    <div
      className={`flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 ${sizeClasses.container} ${className}`}
      {...props}
    >
      {/* Decrement Button */}
      <motion.button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className={`flex items-center justify-center border-r border-gray-300 dark:border-gray-600 rounded-l-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${sizeClasses.button}`}
        variants={buttonHover}
        whileHover="hover"
        whileTap="tap"
      >
        <Icon name="minus" size={sizeClasses.icon} />
      </motion.button>

      {/* Input */}
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        disabled={disabled}
        className={`text-center border-0 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0 ${sizeClasses.input}`}
      />

      {/* Increment Button */}
      <motion.button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className={`flex items-center justify-center border-l border-gray-300 dark:border-gray-600 rounded-r-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${sizeClasses.button}`}
        variants={buttonHover}
        whileHover="hover"
        whileTap="tap"
      >
        <Icon name="plus" size={sizeClasses.icon} />
      </motion.button>
    </div>
  )
}

QuantityStepper.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
}

export default QuantityStepper
