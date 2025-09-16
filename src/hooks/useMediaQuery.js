import { useState, useEffect } from 'react'

/**
 * Custom hook for handling media queries
 * @param {string} query - The media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = query => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Set initial value
    setMatches(media.matches)

    // Create event listener
    const listener = event => {
      setMatches(event.matches)
    }

    // Add listener
    media.addEventListener('change', listener)

    // Cleanup
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

// Common breakpoint hooks
export const useIsMobile = () => useMediaQuery('(max-width: 768px)')
export const useIsTablet = () =>
  useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)')
export const useIsLargeScreen = () => useMediaQuery('(min-width: 1280px)')

// Dark mode preference
export const usePrefersDarkMode = () =>
  useMediaQuery('(prefers-color-scheme: dark)')

// Reduced motion preference
export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)')
