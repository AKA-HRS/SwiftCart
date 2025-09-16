import React, { createContext, useContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext()

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      )

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter(item => item.quantity > 0),
      }
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      }
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
      }
    }

    case 'LOAD_CART': {
      return {
        ...state,
        items: action.payload || [],
      }
    }

    default:
      return state
  }
}

// Initial state
const initialState = {
  items: [],
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
  }, [state.items])

  // Calculate totals
  const totals = React.useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    const shipping = subtotal > 100 ? 0 : 9.99
    const tax = subtotal * 0.08
    const total = subtotal + shipping + tax

    return {
      subtotal: Number(subtotal.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      tax: Number(tax.toFixed(2)),
      total: Number(total.toFixed(2)),
    }
  }, [state.items])

  // Cart actions
  const addItem = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        slug: product.slug,
        quantity,
      },
    })
  }

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    })
  }

  const removeItem = id => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id },
    })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = id => {
    const item = state.items.find(item => item.id === id)
    return item ? item.quantity : 0
  }

  const getTotalItems = () => {
    return state.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  const value = {
    items: state.items,
    totals,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getItemQuantity,
    getTotalItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
