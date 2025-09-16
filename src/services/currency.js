// Currency formatting utilities
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export const formatPrice = (price, currency = 'USD') => {
  return formatCurrency(price, currency)
}

export const parsePrice = priceString => {
  return parseFloat(priceString.replace(/[^0-9.-]+/g, ''))
}
