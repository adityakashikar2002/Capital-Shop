import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch">
        <div className="flex-1 flex flex-col items-center justify-center py-6 sm:border-r border-gray-300 px-4 text-center">
          <FontAwesomeIcon icon={['fas', 'truck']} className="text-gray-900 mb-6 text-xl" style={{fontSize:'50px'}}/>
          <p className="text-[18px] font-semibold text-gray-900 mb-3">Fast &amp; Free Delivery</p>
          <p className="text-[14px] text-gray-500">Free delivery on all orders</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-6 sm:border-r border-gray-300 px-4 text-center">
          <FontAwesomeIcon icon={['fas', 'credit-card']} className="text-gray-900 mb-6 text-xl" style={{fontSize:'50px'}}/>
          <p className="text-[18px] font-semibold text-gray-900 mb-6">Secure Payment</p>
          <p className="text-[14px] text-gray-500">Free delivery on all orders</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-6 sm:border-r border-gray-300 px-4 text-center">
          <FontAwesomeIcon icon={['fas', 'money-bill-wave']} className="text-gray-900 mb-6 text-xl" style={{fontSize:'50px'}}/>
          <p className="text-[18px] font-semibold text-gray-900 mb-1">Money Back Guarantee</p>
          <p className="text-[14px] text-gray-500">Free delivery on all orders</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 text-center">
          <FontAwesomeIcon icon={['fas', 'headset']} className="text-gray-900 mb-6 text-xl" style={{fontSize:'50px'}}/>
          <p className="text-[18px] font-semibold text-gray-900 mb-1">Online Support</p>
          <p className="text-[14px] text-gray-500">Free delivery on all orders</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;