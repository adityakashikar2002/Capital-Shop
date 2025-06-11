// src/pages/PaymentPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import CheckoutSteps from '../components/CheckoutSteps';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentPage = () => {
  const { savePaymentMethod } = useShop();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const submitHandler = (e) => {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    navigate('/placeorder');
  };

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <CheckoutSteps step1 step2 />
        
        <h1 className="text-2xl font-bold mb-6">Payment Method</h1>
        
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Select Method</h2>
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="paypal" className="text-sm font-medium">
                PayPal or Credit Card
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="stripe"
                name="paymentMethod"
                value="stripe"
                checked={paymentMethod === 'stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="stripe" className="text-sm font-medium">
                Stripe (Credit/Debit Card)
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="cod" className="text-sm font-medium">
                Cash on Delivery
              </label>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
            >
              Continue to Review Order
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;