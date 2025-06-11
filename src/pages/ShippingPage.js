// src/pages/ShippingPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import CheckoutSteps from '../components/CheckoutSteps';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingPage = () => {
  const { saveShippingAddress } = useShop();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    saveShippingAddress(data);
    navigate('/payment');
  };

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <CheckoutSteps step1 />
        
        <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className={`w-full border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="text"
                className={`w-full border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                {...register("postalCode", { required: "Postal code is required" })}
              />
              {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPage;