// src/pages/Checkout.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cart, clearCart } = useShop();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  const onSubmit = (data) => {
    // Process payment here (simulated)
    setTimeout(() => {
      clearCart();
      toast.success('Payment successful!', {
        position: "top-right",
        autoClose: 3000,
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="bg-white text-black">
      <Header />

      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">Checkout</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Checkout</a></li>
          </ul>
        </nav>
      </header>

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

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl flex flex-col lg:flex-row lg:space-x-20">
          <div className="flex-1">
            <h3 className="font-semibold mb-6 text-[14px]">Billing Details</h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <input
                    type="text"
                    placeholder="First name *"
                    className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                    {...register("firstName", { required: "First name is required" })}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    placeholder="Last name *"
                    className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                    {...register("lastName", { required: "Last name is required" })}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
              <input
                type="text"
                placeholder="Company name"
                className="border border-gray-300 rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600"
                {...register("companyName")}
              />
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Please enter a valid phone number"
                      }
                    })}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="relative">
                <select
                  className={`border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-[13px] w-full appearance-none focus:outline-none focus:ring-1 focus:ring-red-600`}
                  aria-label="Country"
                  {...register("country", { required: "Country is required" })}
                >
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
              </div>
              <input
                type="text"
                placeholder="Address line 01 *"
                className={`border ${errors.address1 ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-[13px] w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                {...register("address1", { required: "Address is required" })}
              />
              {errors.address1 && <p className="text-red-500 text-xs mt-1">{errors.address1.message}</p>}
              <input
                type="text"
                placeholder="Address line 02"
                className="border border-gray-200 rounded px-4 py-2 text-sm placeholder-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-red-600"
                {...register("address2")}
              />
              <input
                type="text"
                placeholder="Town/City *"
                className={`border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 text-sm placeholder-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              <div className="relative">
                <select
                  className={`border ${errors.district ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 text-sm w-full appearance-none focus:outline-none focus:ring-1 focus:ring-red-600`}
                  aria-label="District"
                  {...register("district", { required: "District is required" })}
                >
                  <option value="">District</option>
                  <option value="Central">Central</option>
                  <option value="Eastern">Eastern</option>
                  <option value="Western">Western</option>
                  <option value="Northern">Northern</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
              </div>
              <input
                type="text"
                placeholder="Postcode/ZIP *"
                className={`border ${errors.postcode ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 text-sm placeholder-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-red-600`}
                {...register("postcode", { required: "Postcode is required" })}
              />
              {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode.message}</p>}
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  id="create-account"
                  className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                  {...register("createAccount")}
                />
                <label htmlFor="create-account" className="select-none">
                  Create an account?
                </label>
              </div>
            </div>

            <h3 className="text-sm font-semibold mt-12 mb-4">Shipping Details</h3>
            <label className="inline-flex items-center space-x-2 mb-6">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-900 border-gray-300 rounded" {...register("differentShipping")} />
              <span className="text-sm text-gray-700">Ship to a different address?</span>
            </label>
            <textarea
              placeholder="Order Notes"
              className="w-full border border-gray-300 rounded-md text-gray-600 text-sm p-3 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-gray-300"
              {...register("notes")}
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
                <span>FREE</span>
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>TOTAL</span>
              <span>${(totalPrice).toFixed(2)}</span>
            </div>

            <div className="space-y-6 text-xs text-gray-700 mt-6">
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="check"
                    className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                    {...register("paymentMethod", { required: "Payment method is required" })}
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
                    value="paypal"
                    className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                    {...register("paymentMethod", { required: "Payment method is required" })}
                  />
                  <span className="font-semibold">PAYPAL</span>
                </label>
                <div className="bg-white border border-gray-200 p-4 mt-2 text-xs leading-tight text-gray-700">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </div>
              </div>
              {errors.paymentMethod && <p className="text-red-500 text-xs mt-1">{errors.paymentMethod.message}</p>}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 border border-gray-300 rounded text-red-600 focus:ring-red-600"
                  {...register("terms", { required: "You must accept the terms and conditions" })}
                />
                <label htmlFor="terms" className="text-xs select-none">
                  I've read and accept the
                  <span className="text-red-600 cursor-pointer"> terms & conditions*</span>
                </label>
              </div>
              {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold text-sm py-3 rounded-full hover:bg-red-700 transition"
              >
                Proceed to Paypal
              </button>
            </div>
          </aside>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;