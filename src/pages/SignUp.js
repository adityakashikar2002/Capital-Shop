// src/pages/SignUp.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useShop } from '../context/ShopContext';
import { updateProfile } from 'firebase/auth';

// const SignUp = () => {
//   const { register: registerUser } = useShop();
//   const navigate = useNavigate();
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     const success = await registerUser(data.email, data.password, data.fullName);
//     if (success) {
//       navigate('/');
//     }
//   };

const SignUp = () => {
  const { register: registerUser } = useShop();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const success = await registerUser(data.email, data.password, data.fullName);
    if (success) {
      navigate('/signin'); // Redirect to login page after successful registration
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <main className="bg-white shadow-lg w-full max-w-md p-10">
        <h1 className="text-center text-[#0B0B2B] font-semibold text-xl mb-2">Sign Up</h1>
        <p className="text-center text-[#1A1A1A] text-sm mb-10">
          Create your account to get full access
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="fullname" className="block text-[#0B0B2B] font-semibold text-sm mb-1">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter full name"
              className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]`}
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-[#0B0B2B] font-semibold text-sm mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]`}
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
          <div>
            <label htmlFor="password" className="block text-[#0B0B2B] font-semibold text-sm mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]`}
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div>
            <label
              htmlFor="confirmpassword"
              className="block text-[#0B0B2B] font-semibold text-sm mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]`}
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: value => 
                  value === watch('password') || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-xs text-[#1A1A1A]">
              Already have an account?
              <Link to="/signin" className="text-[#FF1A1A] ml-1">
                Login
              </Link>{' '}
              here
            </p>
            <button type="submit" className="bg-[#FF1A1A] text-white text-sm px-6 py-3">
              Sign Up
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;