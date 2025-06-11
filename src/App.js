// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Men from './pages/Men';
import Women from './pages/Women';
import Baby from './pages/Baby';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { ShopProvider } from './context/ShopContext';
import ProductDetails from './pages/ProductDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './pages/Faq';
import PrivacyPolicy from './pages/Privacy';

// import ShippingPage from './pages/ShippingPage';
// import PaymentPage from './pages/PaymentPage';
// import PlaceOrderPage from './pages/PlaceOrderPage';
// import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="bg-[#ff0a0a] rounded-full p-2 flex items-center justify-center w-12 h-12 animate-bounce">
          <FontAwesomeIcon
            icon={['fas', 'store']}
            className="text-white text-sm w-8 h-8 spin-animation"
          />
        </div>
      </div>
    );
  }

  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          
          {/* Protected Routes */}
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/wishlist" element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          {/* <Route path="/shipping" element={
            <ProtectedRoute>
              <ShippingPage />
            </ProtectedRoute>
          } />
          <Route path="/payment" element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          } />
          <Route path="/placeorder" element={
            <ProtectedRoute>
              <PlaceOrderPage />
            </ProtectedRoute>
          } />
          <Route path="/order/:id" element={
            <ProtectedRoute>
              <OrderSuccessPage />
            </ProtectedRoute>
          } /> */}
          <Route path="/order-confirmation" element={
            <ProtectedRoute>
              <OrderConfirmation />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {showTopBtn && (
        <div className="fixed bottom-6 right-6 flex flex-col items-center z-50 group">
          <button
            onClick={scrollToTop}
            className="bg-[#ff0a0a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all"
          >
            <FontAwesomeIcon icon={faAngleDoubleUp} className="text-xl" />
          </button>
          <span className="mt-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Go to Top
          </span>
        </div>
      )}
    </ShopProvider>
  );
}

export default App;