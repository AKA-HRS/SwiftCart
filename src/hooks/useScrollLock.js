import { useEffect } from 'react'

/**
 * Custom hook for locking/unlocking body scroll
 * @param {boolean} isLocked - Whether to lock the scroll
 */
export const useScrollLock = isLocked => {
  useEffect(() => {
    if (isLocked) {
      // Get the current scroll position
      const scrollY = window.scrollY

      // Lock the scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        // Unlock the scroll
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''

        // Restore scroll position
        window.scrollTo(0, scrollY)
      }
    }
  }, [isLocked])
}
