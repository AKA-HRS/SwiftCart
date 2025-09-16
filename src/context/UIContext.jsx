import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const UIContext = createContext()

// UI reducer
const uiReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_DRAWER':
      return {
        ...state,
        isCartDrawerOpen: !state.isCartDrawerOpen,
      }

    case 'SET_CART_DRAWER':
      return {
        ...state,
        isCartDrawerOpen: action.payload,
      }

    case 'TOGGLE_MOBILE_NAV':
      return {
        ...state,
        isMobileNavOpen: !state.isMobileNavOpen,
      }

    case 'SET_MOBILE_NAV':
      return {
        ...state,
        isMobileNavOpen: action.payload,
      }

    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalContent: state.isModalOpen ? null : action.payload,
      }

    case 'SET_MODAL':
      return {
        ...state,
        isModalOpen: action.payload.isOpen,
        modalContent: action.payload.content || null,
      }

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        modalContent: null,
      }

    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [
          ...state.toasts,
          {
            id: Date.now() + Math.random(),
            ...action.payload,
          },
        ],
      }

    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      }

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

// Initial state
const initialState = {
  isCartDrawerOpen: false,
  isMobileNavOpen: false,
  isModalOpen: false,
  modalContent: null,
  toasts: [],
  isLoading: false,
}

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  // Cart drawer actions
  const toggleCartDrawer = () => {
    dispatch({ type: 'TOGGLE_CART_DRAWER' })
  }

  const setCartDrawer = isOpen => {
    dispatch({ type: 'SET_CART_DRAWER', payload: isOpen })
  }

  // Mobile nav actions
  const toggleMobileNav = () => {
    dispatch({ type: 'TOGGLE_MOBILE_NAV' })
  }

  const setMobileNav = isOpen => {
    dispatch({ type: 'SET_MOBILE_NAV', payload: isOpen })
  }

  // Modal actions
  const toggleModal = content => {
    dispatch({ type: 'TOGGLE_MODAL', payload: content })
  }

  const setModal = (isOpen, content) => {
    dispatch({ type: 'SET_MODAL', payload: { isOpen, content } })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  // Toast actions
  const addToast = toast => {
    dispatch({ type: 'ADD_TOAST', payload: toast })

    // Auto remove toast after duration
    const duration = toast.duration || 5000
    setTimeout(() => {
      removeToast(toast.id)
    }, duration)
  }

  const removeToast = id => {
    dispatch({ type: 'REMOVE_TOAST', payload: id })
  }

  // Loading actions
  const setLoading = isLoading => {
    dispatch({ type: 'SET_LOADING', payload: isLoading })
  }

  const value = {
    // State
    isCartDrawerOpen: state.isCartDrawerOpen,
    isMobileNavOpen: state.isMobileNavOpen,
    isModalOpen: state.isModalOpen,
    modalContent: state.modalContent,
    toasts: state.toasts,
    isLoading: state.isLoading,

    // Actions
    toggleCartDrawer,
    setCartDrawer,
    toggleMobileNav,
    setMobileNav,
    toggleModal,
    setModal,
    closeModal,
    addToast,
    removeToast,
    setLoading,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}
