import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import {
  pageVariants,
  pageTransition,
} from '../components/animations/motionVariants'

// Pages
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import OrderSuccess from '../pages/OrderSuccess'
import NotFound from '../pages/NotFound'

// Support Pages
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Shipping from '../pages/Shipping'
import Returns from '../pages/Returns'
import SizeGuide from '../pages/SizeGuide'

// Company Pages
import About from '../pages/About'
import Careers from '../pages/Careers'
import Press from '../pages/Press'
import Sustainability from '../pages/Sustainability'
import Investors from '../pages/Investors'

// Legal Pages
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Cookies from '../pages/Cookies'
import Accessibility from '../pages/Accessibility'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/catalog"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Catalog />
            </motion.div>
          }
        />
        <Route
          path="/product/:slug"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <ProductDetails />
            </motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Cart />
            </motion.div>
          }
        />
        <Route
          path="/checkout"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Checkout />
            </motion.div>
          }
        />
        <Route
          path="/order/success"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <OrderSuccess />
            </motion.div>
          }
        />

        {/* Support Routes */}
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/faq"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <FAQ />
            </motion.div>
          }
        />
        <Route
          path="/shipping"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Shipping />
            </motion.div>
          }
        />
        <Route
          path="/returns"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Returns />
            </motion.div>
          }
        />
        <Route
          path="/size-guide"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <SizeGuide />
            </motion.div>
          }
        />

        {/* Company Routes */}
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/careers"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Careers />
            </motion.div>
          }
        />
        <Route
          path="/press"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Press />
            </motion.div>
          }
        />
        <Route
          path="/sustainability"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Sustainability />
            </motion.div>
          }
        />
        <Route
          path="/investors"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Investors />
            </motion.div>
          }
        />

        {/* Legal Routes */}
        <Route
          path="/privacy"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Privacy />
            </motion.div>
          }
        />
        <Route
          path="/terms"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Terms />
            </motion.div>
          }
        />
        <Route
          path="/cookies"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Cookies />
            </motion.div>
          }
        />
        <Route
          path="/accessibility"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Accessibility />
            </motion.div>
          }
        />

        <Route
          path="*"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
