import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheckCircle, FaPrint, FaEnvelope, FaHome } from 'react-icons/fa';
import { FaCreditCard, FaMoneyBillWave, FaPaypal } from 'react-icons/fa';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const orderDetails = state?.orderDetails;

  if (!orderDetails) {
    navigate('/');
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  const PaymentIcon = () => {
    switch(orderDetails.paymentMethod) {
        case 'credit_card':
        return (
            <div className="flex items-center">
            <FaCreditCard className="text-gray-600 mr-2" />
            <span className="text-sm">
                ({orderDetails.cardType === 'credit' ? 'Credit' : 'Debit'} Card)
            </span>
            </div>
        );
        case 'paypal':
        return <FaPaypal className="text-blue-500 mr-2" />;
        case 'cod':
        return <FaMoneyBillWave className="text-green-500 mr-2" />;
        default:
        return null;
    }
    };

  const paymentMethodText = () => {
    switch(orderDetails.paymentMethod) {
      case 'credit_card':
        return 'Credit/Debit Card';
      case 'paypal':
        return 'PayPal';
      case 'cod':
        return 'Cash on Delivery';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white text-black">
      <Header />

      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">Order Confirmation</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Order Confirmation</a></li>
          </ul>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
          <div className="mb-6">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You For Your Order!</h2>
            <p className="text-gray-600 mb-4">
              Your order #{orderDetails.orderNumber} has been received and is being processed.
            </p>
            {orderDetails.paymentMethod === 'cod' ? (
              <p className="text-gray-600">
                Please have the exact amount ready when the delivery arrives.
              </p>
            ) : (
              <p className="text-gray-600">
                You will receive an order confirmation email with details of your order.
              </p>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-2">Order Information</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Order Number: {orderDetails.orderNumber}</p>
                  <p>Date: {orderDetails.date}</p>
                  <p>Total: ${orderDetails.total.toFixed(2)}</p>
                  <p className="flex items-center">
                    Payment Method:&nbsp;&nbsp;<PaymentIcon /> {paymentMethodText()}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Shipping Address</h4>
                <div className="text-sm text-gray-600">
                  <p>{orderDetails.firstName} {orderDetails.lastName}</p>
                  <p>{orderDetails.address1}</p>
                  {orderDetails.address2 && <p>{orderDetails.address2}</p>}
                  <p>{orderDetails.city}, {orderDetails.postcode}</p>
                  <p>
                    {orderDetails.country === 'US' ? 'United States' : 
                     orderDetails.country === 'CA' ? 'Canada' :
                     orderDetails.country === 'IND' ? 'India' :
                     orderDetails.country === 'UK' ? 'United Kingdom' : 'Australia'}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Order Items</h4>
              <div className="border-t border-gray-200 pt-4">
                {orderDetails.items.map(item => (
                  <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded mr-4" 
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between py-2">
                  <span>Subtotal:</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                  <span>Total:</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaPrint className="mr-2" />
              Print Receipt
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
            >
              <FaHome className="mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;