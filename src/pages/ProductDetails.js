import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShareAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('Description');

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
          src="https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg"
          alt="Product"
          className="w-[350px] h-auto rounded-md mb-6 md:mb-0"
        />
        <div className="md:mr-80 h-full">
          <h1 className="text-4xl font-semibold mb-2 mt-6">The Rage of Dragons</h1>
          <p className="text-sm text-white mb-8">By Evan Winter</p>
          <p className="text-3xl font-bold mb-6">$50.00</p>
          <div className="flex items-center text-[18px] mb-4 space-x-1">
            {renderStars()}
            <span className="ml-2 text-white text-[12px]">(120 Review)</span>
          </div>
          <div className="flex items-center space-x-4 mt-10">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition text-sm">
              Add To Cart
            </button>
            <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <FaShareAlt className="text-white" />
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 mt-10 mb-10">
        <div className="flex space-x-6 text-sm font-semibold text-gray-600 border-b border-gray-300">
          {['Description', 'Author', 'Comments', 'Review'].map((tab) => (
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
            <p>
              Description goes here...
            </p>
          )}
          {activeTab === 'Author' && <p>Author info goes here...</p>}
          {activeTab === 'Comments' && <p>Comments section coming soon...</p>}
          {activeTab === 'Review' && <p>Review content goes here...</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;