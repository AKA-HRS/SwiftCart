import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Icon from './Icon'

const Rating = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  showValue = false,
  interactive = false,
  onRatingChange,
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const handleStarClick = starRating => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating)
    }
  }

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starRating = index + 1
    const isFilled = starRating <= rating
    const isHalfFilled = starRating === Math.ceil(rating) && rating % 1 !== 0

    return (
      <motion.button
        key={index}
        type="button"
        className={`${interactive ? 'cursor-pointer' : 'cursor-default'} ${sizes[size]}`}
        onClick={() => handleStarClick(starRating)}
        whileHover={interactive ? { scale: 1.1 } : {}}
        whileTap={interactive ? { scale: 0.9 } : {}}
        disabled={!interactive}
      >
        <Icon
          name={isFilled ? 'starFilled' : 'star'}
          size={size}
          className={`${
            isFilled
              ? 'text-yellow-400'
              : isHalfFilled
                ? 'text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
          } ${interactive ? 'hover:text-yellow-400' : ''}`}
        />
      </motion.button>
    )
  })

  return (
    <div className={`flex items-center gap-1 ${className}`} {...props}>
      <div className="flex items-center">{stars}</div>
      {showValue && (
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showValue: PropTypes.bool,
  interactive: PropTypes.bool,
  onRatingChange: PropTypes.func,
  className: PropTypes.string,
}

export default Rating
