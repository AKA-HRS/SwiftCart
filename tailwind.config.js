/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        amazon: {
          // Core brand colors
          orange: '#FF9900', // Brand accent/logo
          'orange-buy': '#FFA41C', // Buy Now CTA
          'orange-hover': '#E47911', // Darkened orange for hover

          // Navigation colors
          'nav-dark': '#232F3E', // Header/nav
          'nav-darker': '#131A22', // Darker nav
          'nav-hover': '#37475A', // Hover mid-nav

          // Search & accents
          'search-accent': '#FEBD69', // Search accent (pale gold)
          'cart-yellow': '#FFD814', // Add to Cart yellow
          'cart-yellow-hover': '#E6C200', // Cart yellow hover (darkened ~8-12%)

          // Price & text
          'price-red': '#B12704', // Price text
          'link-teal': '#007185', // Link teal

          // Supporting colors
          'border-gray': '#E3E6E6', // Borders/dividers
          'bg-light': '#F7F7F7', // Page background
          'bg-lighter': '#F2F2F2', // Lighter page background

          // Text colors
          'text-primary': '#111111', // Primary text
          'text-muted': '#565959', // Muted text

          // Standard colors
          white: '#ffffff',
          black: '#000000',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
