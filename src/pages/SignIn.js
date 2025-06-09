// src/pages/SignIn.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignIn = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <main className="bg-white max-w-lg w-full p-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
        <h1 className="text-center text-[#0B0B2B] font-extrabold text-xl mb-2">Login</h1>
        <p className="text-center text-xs text-[#0B0B2B] mb-8">Enter Login details to get access</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-[#0B0B2B] font-semibold text-xs mb-1">
              Username Or Email Address
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username / Email address"
              className="w-full border border-gray-300 text-xs text-[#9B9B9B] placeholder-[#9B9B9B] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]"
            />
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
              className="w-full border border-gray-300 text-xs text-[#9B9B9B] placeholder-[#9B9B9B] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-[#0B0B2B] font-semibold text-xs cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border border-gray-300" />
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