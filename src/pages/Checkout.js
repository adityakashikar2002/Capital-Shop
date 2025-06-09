// src/pages/Checkout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useShop();

  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <div className="bg-white text-black">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-[#f7f7f7] px-4 py-3 mb-6 text-[13px] leading-5">
          <span className="font-semibold">Returning Customer?</span>
          <Link to="/signin" className="text-[#d91c1c] underline ml-1">
            Click here to login
          </Link>
        </div>
        <p className="mb-6 text-[13px] leading-5">
          If you have shopped with us before, please enter your details in the boxes below. If you are a new customer,
          please proceed to the Billing &amp; Shipping section.
        </p>

        <div className="max-w-4xl flex flex-col lg:flex-row lg:space-x-20">
          <div className="flex-1">
            <h3 className="font-semibold mb-6 text-[14px]">Billing Details</h3>
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                <input
                  type="text"
                  placeholder="First name *"
                  className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full sm:w-1/2 mb-4 sm:mb-0 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name *"
                  className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full sm:w-1/2 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Company name"
                className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full sm:w-1/2 mb-4 sm:mb-0 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full sm:w-1/2 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
              </div>
              <div className="relative">
                <select
                  className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full appearance-none focus:outline-none focus:ring-1 focus:ring-red-600"
                  aria-label="Country"
                >
                  <option>Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <input
                type="text"
                placeholder="Address line 01 *"
                className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600"
                required
              />
              <input
                type="text"
                placeholder="Address line 02 *"
                className="border border-gray-200 rounded px-4 py-2 text-sm placeholder-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Town/City *"
                className="border border-gray-200 rounded px-4 py-2 text-sm placeholder-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-red-600"
                required
              />
              <div className="relative">
                <select
                  className="border border-gray-200 rounded px-4 py-2 text-sm w-full appearance-none focus:outline-none focus:ring-1 focus:ring-red-600"
                  aria-label="District"
                >
                  <option>District</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <input
                type="text"
                placeholder="Postcode/ZIP"
                className="border border-gray-200 rounded px-4 py-2 text-sm placeholder-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  id="create-account"
                  className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                />
                <label htmlFor="create-account" className="select-none">
                  Create an account?
                </label>
              </div>
            </form>

            <h3 className="text-sm font-semibold mt-12 mb-4">Shipping Details</h3>
            <label className="inline-flex items-center space-x-2 mb-6">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-900 border-gray-300 rounded" />
              <span className="text-sm text-gray-700">Ship to a different address?</span>
            </label>
            <textarea
              placeholder="Order Notes"
              className="w-full border border-gray-300 rounded-md text-gray-600 text-sm p-3 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-gray-300"
            ></textarea>
          </div>

          <aside className="bg-[#f7f7f7] p-6 mt-10 lg:mt-0 w-full lg:w-96 text-[13px] rounded-md">
            <h3 className="font-semibold mb-6 text-[14px]">Your Order</h3>
            <div className="mb-4">
              <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                <span>Product</span>
                <span>Total</span>
              </div>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span className="flex items-center space-x-1">
                    <span>×</span>
                    <span className="font-semibold">{item.quantity}</span>
                  </span>
                  <span>${(parseFloat(item.price.replace('$', '')) * item.quantity)}.00</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-2 mb-2 font-semibold">
              <span>SUBTOTAL</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 mb-2 font-semibold">
              <span>SHIPPING</span>
              <span className="flex space-x-2">
                <span>Flat Rate:</span>
                <span>$50.00</span>
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>TOTAL</span>
              <span>${(totalPrice + 50).toFixed(2)}</span>
            </div>

            <form className="space-y-6 text-xs text-gray-700 mt-6">
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                  />
                  <span className="font-semibold">CHECK PAYMENTS</span>
                </label>
                <div className="bg-white border border-gray-200 p-4 mt-2 text-xs leading-tight text-gray-700">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                  />
                  <span className="font-semibold">PAYPAL</span>
                </label>
                <div className="bg-white border border-gray-200 p-4 mt-2 text-xs leading-tight text-gray-700">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                />
                <label htmlFor="terms" className="text-xs select-none">
                  I've read and accept the
                  <span className="text-red-600 cursor-pointer">terms & conditions*</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold text-sm py-3 rounded-full hover:bg-red-700 transition"
              >
                Proceed to Paypal
              </button>
            </form>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;