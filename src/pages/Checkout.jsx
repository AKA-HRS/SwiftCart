import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useUI } from '../context/UIContext'
import { formatPrice } from '../utils/format'
import { fadeInUp } from '../components/animations/motionVariants'
import CartSummary from '../components/cart/CartSummary'
import Input from '../components/forms/Input'
import Select from '../components/forms/Select'
import Button from '../components/common/Button'
import Container from '../components/layout/Container'
import MotionFadeIn from '../components/animations/MotionFadeIn'

const Checkout = () => {
  const navigate = useNavigate()
  const { items, totals, clearCart } = useCart()
  const { addToast } = useUI()

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    sameAsShipping: true,
  })

  const [errors, setErrors] = useState({})

  // Redirect if cart is empty
  React.useEffect(() => {
    if (items.length === 0) {
      navigate('/cart')
    }
  }, [items.length, navigate])

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields
    const requiredFields = [
      'email',
      'firstName',
      'lastName',
      'address',
      'city',
      'state',
      'zipCode',
      'phone',
    ]

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] =
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Payment method validation
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required'
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required'
      if (!formData.cvv) newErrors.cvv = 'CVV is required'
      if (!formData.nameOnCard)
        newErrors.nameOnCard = 'Name on card is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!validateForm()) {
      addToast({
        type: 'error',
        message: 'Please fix the errors below',
        duration: 3000,
      })
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Generate order ID
      const orderId = `ORD-${Date.now()}`

      // Clear cart
      clearCart()

      // Show success message
      addToast({
        type: 'success',
        message: 'Order placed successfully!',
        duration: 3000,
      })

      // Redirect to success page
      navigate(`/order/success?orderId=${orderId}`)
    } catch (error) {
      addToast({
        type: 'error',
        message: 'Failed to place order. Please try again.',
        duration: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' },
  ]

  const stateOptions = [
    { value: 'CA', label: 'California' },
    { value: 'NY', label: 'New York' },
    { value: 'TX', label: 'Texas' },
    { value: 'FL', label: 'Florida' },
  ]

  const paymentMethodOptions = [
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'apple', label: 'Apple Pay' },
    { value: 'google', label: 'Google Pay' },
  ]

  if (items.length === 0) {
    return null // Will redirect to cart
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="py-8">
          {/* Header */}
          <MotionFadeIn>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Checkout
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Complete your order
              </p>
            </div>
          </MotionFadeIn>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <MotionFadeIn>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        required
                      />
                      <Input
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                        required
                      />
                    </div>
                  </div>
                </MotionFadeIn>

                {/* Shipping Address */}
                <MotionFadeIn>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Shipping Address
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                        required
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <Input
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        error={errors.address}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <Input
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        error={errors.city}
                        required
                      />
                      <Select
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        options={stateOptions}
                        error={errors.state}
                        required
                      />
                      <Input
                        label="ZIP Code"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        error={errors.zipCode}
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <Select
                        label="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        options={countryOptions}
                        required
                      />
                    </div>
                  </div>
                </MotionFadeIn>

                {/* Payment Method */}
                <MotionFadeIn>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Payment Method
                    </h2>
                    <div className="mb-4">
                      <Select
                        label="Payment Method"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        options={paymentMethodOptions}
                        required
                      />
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <Input
                          label="Card Number"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          error={errors.cardNumber}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            label="Expiry Date"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            error={errors.expiryDate}
                            placeholder="MM/YY"
                            required
                          />
                          <Input
                            label="CVV"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            error={errors.cvv}
                            placeholder="123"
                            required
                          />
                        </div>
                        <Input
                          label="Name on Card"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleInputChange}
                          error={errors.nameOnCard}
                          required
                        />
                      </div>
                    )}
                  </div>
                </MotionFadeIn>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <MotionFadeIn>
                  <CartSummary />
                </MotionFadeIn>
              </div>
            </div>

            {/* Submit Button */}
            <MotionFadeIn className="mt-8">
              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  loading={loading}
                  disabled={loading}
                >
                  {loading
                    ? 'Processing...'
                    : `Place Order - ${formatPrice(totals.total)}`}
                </Button>
              </div>
            </MotionFadeIn>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Checkout
