// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Men from './pages/Men';
import Women from './pages/Women';
import Baby from './pages/Baby';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { ShopProvider } from './context/ShopContext';
import ProductDetails from './pages/ProductDetails';

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
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/baby" element={<Baby/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path='/product-details' element={<ProductDetails/>}/>
        </Routes>
      </Router>

      {showTopBtn && (
        <div className="fixed bottom-6 right-6 flex flex-col items-center z-50 group">
          <button
            onClick={scrollToTop}
            className="bg-[#ff0a0a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all"
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
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