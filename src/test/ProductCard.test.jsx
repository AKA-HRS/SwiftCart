import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { UIProvider } from '../context/UIContext'
import ProductCard from '../components/product/ProductCard'

// Mock product data
const mockProduct = {
  id: 1,
  slug: 'test-product',
  title: 'Test Product',
  price: 99.99,
  images: ['/test-image.jpg'],
  rating: 4.5,
  reviewsCount: 100,
  stock: 10,
  featured: true,
}

// Test wrapper component
const TestWrapper = ({ children }) => (
  <BrowserRouter>
    <CartProvider>
      <UIProvider>{children}</UIProvider>
    </CartProvider>
  </BrowserRouter>
)

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getByText('10 in stock')).toBeInTheDocument()
  })

  it('shows out of stock when stock is 0', () => {
    const outOfStockProduct = { ...mockProduct, stock: 0 }

    render(
      <TestWrapper>
        <ProductCard product={outOfStockProduct} />
      </TestWrapper>
    )

    expect(screen.getAllByText('Out of Stock')).toHaveLength(2) // Badge and button
  })

  it('calls add to cart when button is clicked', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    const addToCartButton = screen.getByText('Add to Cart')
    fireEvent.click(addToCartButton)

    // Check if the button text changes to show item is in cart
    expect(screen.getByText(/In Cart/)).toBeInTheDocument()
  })
})
