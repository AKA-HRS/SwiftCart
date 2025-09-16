import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { UIProvider } from './context/UIContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <UIProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />

            <main className="pt-16">
              <Routes>
                <Route path="/*" element={<AppRoutes />} />
              </Routes>
            </main>

            <Footer />
            <CartDrawer />
          </div>
        </UIProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
