// src/pages/Wishlist.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, wishlistCount } = useShop();

  return (
    <div className="bg-white text-gray-900">
      <Header />

      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">Wishlist</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Wishlist</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist ({wishlistCount})</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
            <p className="mb-6">Looks like you haven't added anything to your wishlist yet</p>
            <a 
              href="/" 
              className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover"
                  />
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-red-100 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-red-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through ml-2">{item.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;