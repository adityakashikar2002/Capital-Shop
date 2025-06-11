// src/pages/PlaceOrderPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import CheckoutSteps from '../components/CheckoutSteps';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const PlaceOrderPage = () => {
  const { 
    cart, 
    shippingAddress, 
    paymentMethod, 
    createOrder,
    clearCart 
  } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/shipping');
    } else if (!paymentMethod) {
      navigate('/payment');
    } else if (cart.length === 0) {
      navigate('/cart');
    }
  }, [shippingAddress, paymentMethod, cart, navigate]);

  const placeOrderHandler = async () => {
    try {
      await createOrder({
        orderItems: cart,
        shippingAddress,
        paymentMethod,
        itemsPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        shippingPrice: 0, // Free shipping for now
        taxPrice: 0, // No tax for now
        totalPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      });
      
      clearCart();
      navigate(`/order/${/* order._id */ '123'}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <CheckoutSteps step1 step2 step3 />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shipping Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Shipping</h2>
              <p className="text-sm">
                {shippingAddress?.address}, {shippingAddress?.city}, {shippingAddress?.postalCode}, {shippingAddress?.country}
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Payment Method</h2>
              <p className="text-sm capitalize">{paymentMethod}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-2">Order Items</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
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
          
          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={placeOrderHandler}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrderPage;