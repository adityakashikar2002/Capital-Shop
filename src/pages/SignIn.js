// src/pages/SignIn.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignIn = () => {
  const { login } = useShop();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const success = await login(data.email, data.password);
    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <main className="bg-white max-w-lg w-full p-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
        <h1 className="text-center text-[#0B0B2B] font-extrabold text-xl mb-2">Login</h1>
        <p className="text-center text-xs text-[#0B0B2B] mb-8">Enter Login details to get access</p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-[#0B0B2B] font-semibold text-xs mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-xs text-[#000000] placeholder-[#9B9B9B] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]`}
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
            <label htmlFor="password" className="block text-[#0B0B2B] font-semibold text-xs mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-xs text-[#000000] placeholder-[#9B9B9B] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]`}
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

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-[#0B0B2B] font-semibold text-xs cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border border-gray-300" {...register("remember")} />
              <span>Keep Me Logged In</span>
            </label>
            <Link to="/forgot-password" className="text-[#E02B20] text-xs">
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center justify-between mt-10">
            <p className="text-xs text-[#0B0B2B]">
              Don't have an account?
              <Link to="/signup" className="text-[#E02B20] ml-1">
                Sign Up
              </Link>{' '}
              here
            </p>
            <button
              type="submit"
              className="bg-[#E02B20] text-white text-xs px-8 py-3 font-normal"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;