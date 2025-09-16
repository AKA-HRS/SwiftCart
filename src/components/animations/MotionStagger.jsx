import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const MotionStagger = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = '',
  ...props
}) => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

MotionStagger.propTypes = {
  children: PropTypes.node.isRequired,
  staggerDelay: PropTypes.number,
  delayChildren: PropTypes.number,
  className: PropTypes.string,
}

export default MotionStagger
