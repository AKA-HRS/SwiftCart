import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const MotionFadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  ...props
}) => {
  const variants = {
    initial: {
      opacity: 0,
      ...(direction === 'up' && { y: 30 }),
      ...(direction === 'down' && { y: -30 }),
      ...(direction === 'left' && { x: -30 }),
      ...(direction === 'right' && { x: 30 }),
      ...(direction === 'scale' && { scale: 0.9 }),
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

MotionFadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'scale']),
  className: PropTypes.string,
}

export default MotionFadeIn
