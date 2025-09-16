import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDebounce } from '../../hooks/useDebounce'
import Icon from '../common/Icon'
import { scaleIn } from '../animations/motionVariants'

const SearchBar = ({
  placeholder = 'Search products...',
  className = '',
  onSearch,
  ...props
}) => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)
  const debouncedQuery = useDebounce(query, 300)

  // Handle search
  const handleSearch = searchQuery => {
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`)
      if (onSearch) {
        onSearch(searchQuery.trim())
      }
    }
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    handleSearch(query)
  }

  // Handle input change
  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  // Handle key press
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  // Focus input when clicking the search icon
  const handleSearchIconClick = () => {
    inputRef.current?.focus()
  }

  return (
    <motion.div
      className={`relative ${className}`}
      variants={scaleIn}
      initial="initial"
      animate="animate"
      {...props}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`w-full pl-10 pr-4 py-2 border border-amazon-border-gray rounded-lg bg-amazon-white text-amazon-text-primary placeholder-amazon-text-muted focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent transition-all duration-200 ${
              isFocused ? 'ring-2 ring-amazon-orange border-transparent' : ''
            }`}
          />

          {/* Search Icon */}
          <button
            type="button"
            onClick={handleSearchIconClick}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amazon-text-muted hover:text-amazon-orange transition-colors duration-200"
          >
            <Icon name="search" size="sm" />
          </button>

          {/* Clear Button */}
          {query && (
            <motion.button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amazon-text-muted hover:text-amazon-orange transition-colors duration-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Icon name="close" size="sm" />
            </motion.button>
          )}
        </div>
      </form>

      {/* Search Suggestions (could be expanded with actual suggestions) */}
      {isFocused && query && (
        <motion.div
          className="absolute top-full left-0 right-0 mt-1 bg-amazon-white border border-amazon-border-gray rounded-lg shadow-lg z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="p-2">
            <button
              onClick={() => handleSearch(query)}
              className="w-full text-left px-3 py-2 text-sm text-amazon-text-primary hover:bg-amazon-bg-lighter transition-colors duration-200"
            >
              Search for "{query}"
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default SearchBar
