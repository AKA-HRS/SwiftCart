import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../../utils/format'

const Price = ({
  price,
  originalPrice,
  currency = 'USD',
  size = 'md',
  showOriginal = true,
  className = '',
}) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }

  const hasDiscount = originalPrice && originalPrice > price
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`font-semibold text-amazon-price-red ${sizes[size]}`}>
        {formatPrice(price, currency)}
      </span>

      {hasDiscount && showOriginal && (
        <>
          <span
            className={`line-through text-amazon-text-muted ${sizes[size]}`}
          >
            {formatPrice(originalPrice, currency)}
          </span>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            -{discountPercentage}%
          </span>
        </>
      )}
    </div>
  )
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  currency: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  showOriginal: PropTypes.bool,
  className: PropTypes.string,
}

export default Price
