import { renderHook, act } from '@testing-library/react'
import { CartProvider } from '../context/CartContext'
import { useCart } from '../context/CartContext'

// Test wrapper for cart context
const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>

describe('Cart Context', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      images: ['/test.jpg'],
      slug: 'test-product',
    }

    act(() => {
      result.current.addItem(product, 2)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].quantity).toBe(2)
    expect(result.current.getTotalItems()).toBe(2)
  })

  it('should update item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      images: ['/test.jpg'],
      slug: 'test-product',
    }

    // Add item first
    act(() => {
      result.current.addItem(product, 1)
    })

    // Update quantity
    act(() => {
      result.current.updateQuantity(1, 3)
    })

    expect(result.current.items[0].quantity).toBe(3)
    expect(result.current.getTotalItems()).toBe(3)
  })

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      images: ['/test.jpg'],
      slug: 'test-product',
    }

    // Add item first
    act(() => {
      result.current.addItem(product, 1)
    })

    expect(result.current.items).toHaveLength(1)

    // Remove item
    act(() => {
      result.current.removeItem(1)
    })

    expect(result.current.items).toHaveLength(0)
  })

  it('should calculate totals correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product1 = {
      id: 1,
      title: 'Test Product 1',
      price: 50.0,
      images: ['/test1.jpg'],
      slug: 'test-product-1',
    }

    const product2 = {
      id: 2,
      title: 'Test Product 2',
      price: 75.0,
      images: ['/test2.jpg'],
      slug: 'test-product-2',
    }

    act(() => {
      result.current.addItem(product1, 2) // $100
      result.current.addItem(product2, 1) // $75
    })

    expect(result.current.totals.subtotal).toBe(175.0)
    expect(result.current.totals.shipping).toBe(0) // Free shipping over $100
    expect(result.current.totals.tax).toBe(14.0) // 8% tax
    expect(result.current.totals.total).toBe(189.0)
  })

  it('should clear cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      images: ['/test.jpg'],
      slug: 'test-product',
    }

    // Add item first
    act(() => {
      result.current.addItem(product, 1)
    })

    expect(result.current.items).toHaveLength(1)

    // Clear cart
    act(() => {
      result.current.clearCart()
    })

    expect(result.current.items).toHaveLength(0)
  })
})
