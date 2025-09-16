import React from 'react'
import PropTypes from 'prop-types'
import {
  // Navigation
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
  MagnifyingGlassIcon as SearchIcon,
  ShoppingCartIcon as CartIcon,
  UserIcon,
  HeartIcon,
  StarIcon,
  // Theme
  SunIcon,
  MoonIcon,
  // Actions
  PlusIcon,
  MinusIcon,
  TrashIcon,
  PencilIcon as EditIcon,
  // Navigation arrows
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  // Status
  CheckIcon,
  XMarkIcon,
  // Loading
  ArrowPathIcon as LoadingIcon,
  // Additional icons
  HomeIcon,
  Squares2X2Icon as GridIcon,
  // Category icons
  DevicePhoneMobileIcon as SmartphoneIcon,
  // Social icons (using closest alternatives)
  ChatBubbleLeftRightIcon as FacebookIcon,
  ChatBubbleLeftRightIcon as TwitterIcon,
  ChatBubbleLeftRightIcon as InstagramIcon,
  ChatBubbleLeftRightIcon as YoutubeIcon,
} from '@heroicons/react/24/outline'
import {
  HeartIcon as HeartFilledIcon,
  StarIcon as StarFilledIcon,
} from '@heroicons/react/24/solid'

const Icon = ({ name, size = 'md', className = '', ...props }) => {
  const sizes = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
  }

  const icons = {
    // Navigation
    menu: MenuIcon,
    close: CloseIcon,
    search: SearchIcon,
    cart: CartIcon,
    user: UserIcon,
    heart: HeartIcon,
    heartFilled: HeartFilledIcon,
    star: StarIcon,
    starFilled: StarFilledIcon,
    // Theme
    sun: SunIcon,
    moon: MoonIcon,
    // Actions
    plus: PlusIcon,
    minus: MinusIcon,
    trash: TrashIcon,
    edit: EditIcon,
    // Navigation arrows
    chevronLeft: ChevronLeftIcon,
    chevronRight: ChevronRightIcon,
    chevronUp: ChevronUpIcon,
    chevronDown: ChevronDownIcon,
    // Status
    check: CheckIcon,
    x: XMarkIcon,
    // Loading
    loading: LoadingIcon,
    // Additional icons
    home: HomeIcon,
    grid: GridIcon,
    // Social icons
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
    // Category icons
    shoe: UserIcon, // Using user icon as placeholder for shoe
    shirt: UserIcon, // Using user icon as placeholder for shirt
    watch: UserIcon, // Using user icon as placeholder for watch
    smartphone: SmartphoneIcon,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  const isAnimated = name === 'loading'

  return (
    <IconComponent
      className={`${sizes[size]} ${isAnimated ? 'animate-spin' : ''} ${className}`}
      {...props}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
}

export default Icon
