import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { skeletonVariants, shimmerVariants } from '../animations/motionVariants'

const Skeleton = ({
  width = 'w-full',
  height = 'h-4',
  className = '',
  rounded = 'rounded',
  ...props
}) => {
  return (
    <motion.div
      className={`skeleton ${width} ${height} ${rounded} ${className}`}
      variants={skeletonVariants}
      initial="initial"
      animate="animate"
      {...props}
    >
      <motion.div
        className="shimmer absolute inset-0"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  )
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.string,
}

// Predefined skeleton components
export const SkeletonText = ({ lines = 1, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }, (_, index) => (
      <Skeleton
        key={index}
        height="h-4"
        width={index === lines - 1 ? 'w-3/4' : 'w-full'}
      />
    ))}
  </div>
)

export const SkeletonCard = ({ className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    <Skeleton height="h-48" rounded="rounded-lg" />
    <div className="space-y-2">
      <Skeleton height="h-4" width="w-3/4" />
      <Skeleton height="h-4" width="w-1/2" />
      <Skeleton height="h-6" width="w-1/4" />
    </div>
  </div>
)

export const SkeletonProductCard = ({ className = '' }) => (
  <div className={`card p-4 space-y-4 ${className}`}>
    <Skeleton height="h-48" rounded="rounded-lg" />
    <div className="space-y-2">
      <Skeleton height="h-4" width="w-full" />
      <Skeleton height="h-4" width="w-3/4" />
      <div className="flex items-center gap-2">
        <Skeleton height="h-4" width="w-16" />
        <Skeleton height="h-4" width="w-12" />
      </div>
      <Skeleton height="h-8" width="w-full" />
    </div>
  </div>
)

SkeletonText.propTypes = {
  lines: PropTypes.number,
  className: PropTypes.string,
}

SkeletonCard.propTypes = {
  className: PropTypes.string,
}

SkeletonProductCard.propTypes = {
  className: PropTypes.string,
}

export default Skeleton
