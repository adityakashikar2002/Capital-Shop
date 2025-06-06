// src/pages/ProductDetails.jsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShareAlt } from 'react-icons/fa';
import { useLocation, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  const [activeTab, setActiveTab] = useState('Description');
  
  // Get product data from location state
  const product = location.state?.product || {
    id: 'default',
    image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
    name: 'Product Name Not Available',
    price: '$0.00',
    originalPrice: '$0.00',
    description: 'No description available'
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this product: ${product.name}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      alert('Share functionality is not available in your browser');
    }
  };

  const renderStars = () => {
    const fullStars = 4;
    const halfStars = 1;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-white" />);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={`half-${i}`} className="text-white" />);
    }
    for (let i = fullStars + halfStars; i < totalStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-white" />);
    }
    return stars;
  };

  return (
    <div className="bg-white text-black font-sans">
      <Header />
      <section className="bg-red-600 py-10 px-6 sm:px-10 md:px-20 flex flex-col md:flex-row items-center justify-between text-white mt-10 ml-80 mr-80 h-[400px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-[350px] h-[350px] rounded-md mb-6 md:mb-0"
        />
        <div className="md:mr-80 h-full">
          <h1 className="text-4xl font-semibold mb-2 mt-6">{product.name}</h1>
          <p className="text-sm text-white mb-8">By {product.category || 'Unknown Brand'}</p>
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-3xl font-bold">{product.price}</p>
            {product.originalPrice && (
              <p className="text-2xl line-through text-gray-300 font-bold">{product.originalPrice}</p>
            )}
          </div>
          <div className="flex items-center text-[18px] mb-4 space-x-1">
            {renderStars()}
            <span className="ml-2 text-white text-[12px]">(120 Review)</span>
          </div>
          <div className="flex items-center space-x-4 mt-10">
            <button 
              onClick={handleAddToCart}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition text-sm"
            >
              Add To Cart
            </button>
            <button 
              onClick={handleShare}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors"
            >
              <FaShareAlt className="text-white hover:text-red-600" />
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 mt-10 mb-10">
        <div className="flex space-x-6 text-sm font-semibold text-gray-600 border-b border-gray-300">
          {['Description', 'Details', 'Reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-800 leading-relaxed">
          {activeTab === 'Description' && (
            <p>{product.description || 'No description available for this product.'}</p>
          )}
          {activeTab === 'Details' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Category</h4>
                <p>{product.category || 'N/A'}</p>
              </div>
              {product.type && (
                <div>
                  <h4 className="font-semibold">Type</h4>
                  <p>{product.type}</p>
                </div>
              )}
              {product.color && (
                <div>
                  <h4 className="font-semibold">Color</h4>
                  <p>{product.color}</p>
                </div>
              )}
              {product.size && (
                <div>
                  <h4 className="font-semibold">Size</h4>
                  <p>{product.size}</p>
                </div>
              )}
            </div>
          )}
          {activeTab === 'Reviews' && (
            <div>
              <div className="flex items-center mb-4">
                {renderStars()}
                <span className="ml-2 text-gray-600">Based on 120 reviews</span>
              </div>
              <p>Customer reviews will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;