// Utility function for combining class names
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

// Alternative name for the same function
export const classNames = cn
