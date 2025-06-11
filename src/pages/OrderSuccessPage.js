// src/pages/OrderSuccessPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheckCircle, FaPrint, FaEnvelope } from 'react-icons/fa';

const OrderSuccessPage = () => {
  const { id } = useParams();
  const { orders } = useShop();
  const order = orders.find(o => o._id === id);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-lg">Your order ID is: #{order?._id || id}</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium mb-2">Shipping Information</h3>
              <p className="text-sm">
                {order?.shippingAddress?.fullName}<br />
                {order?.shippingAddress?.address}<br />
                {order?.shippingAddress?.city}, {order?.shippingAddress?.postalCode}<br />
                {order?.shippingAddress?.country}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Payment Method</h3>
              <p className="text-sm capitalize">{order?.paymentMethod}</p>
              {order?.paymentMethod === 'cod' && (
                <p className="text-sm mt-2">You will pay when you receive the order</p>
              )}
              {order?.paymentMethod !== 'cod' && (
                <p className="text-sm mt-2">Payment completed successfully</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Order Items</h3>
            {order?.orderItems?.map((item) => (
              <div key={item.id} className="flex items-center py-3 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × ${item.price} = ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Items</span>
              <span>${order?.itemsPrice?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${order?.shippingPrice?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${order?.taxPrice?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${order?.totalPrice?.toFixed(2) || '0.00'}</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
            >
              <FaPrint className="mr-2" /> Print Receipt
            </button>
            <button className="flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition">
              <FaEnvelope className="mr-2" /> Email Receipt
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccessPage;