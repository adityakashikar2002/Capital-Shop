// src/components/CheckoutSteps.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const location = useLocation();
  
  // Determine active step based on current route
  let activeStep = 1;
  if (location.pathname.includes('/shipping')) activeStep = 1;
  if (location.pathname.includes('/payment')) activeStep = 2;
  if (location.pathname.includes('/placeorder')) activeStep = 3;

  return (
    <div className="flex justify-between max-w-3xl mx-auto mb-8">
      <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-red-600' : 'text-gray-400'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
          1
        </div>
        <span className="mt-2 text-sm">Shipping</span>
      </div>
      
      <div className={`flex-1 h-1 mt-4 ${activeStep >= 2 ? 'bg-red-600' : 'bg-gray-200'}`}></div>
      
      <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-red-600' : 'text-gray-400'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
          2
        </div>
        <span className="mt-2 text-sm">Payment</span>
      </div>
      
      <div className={`flex-1 h-1 mt-4 ${activeStep >= 3 ? 'bg-red-600' : 'bg-gray-200'}`}></div>
      
      <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-red-600' : 'text-gray-400'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
          3
        </div>
        <span className="mt-2 text-sm">Place Order</span>
      </div>
    </div>
  );
};

export default CheckoutSteps;