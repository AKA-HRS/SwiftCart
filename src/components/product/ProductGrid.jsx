import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { productGridVariants } from '../animations/motionVariants'
import ProductCard from './ProductCard'
import Skeleton, { SkeletonProductCard } from '../common/Skeleton'

const ProductGrid = ({
  products = [],
  loading = false,
  className = '',
  columns = 'auto',
}) => {
  const gridCols = {
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  }

  if (loading) {
    return (
      <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
        {Array.from({ length: 8 }, (_, index) => (
          <SkeletonProductCard key={index} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-600 mb-4">
          <svg
            className="mx-auto h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No products found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      variants={productGridVariants}
      initial="initial"
      animate="animate"
      className={`grid ${gridCols[columns]} gap-6 ${className}`}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={productGridVariants}
          custom={index}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  className: PropTypes.string,
  columns: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5]),
}

export default ProductGrid
