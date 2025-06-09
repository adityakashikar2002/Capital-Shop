// src/pages/SignUp.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <main className="bg-white shadow-lg w-full max-w-md p-10">
        <h1 className="text-center text-[#0B0B2B] font-semibold text-xl mb-2">Sign Up</h1>
        <p className="text-center text-[#1A1A1A] text-sm mb-10">
          Create your account to get full access
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="fullname" className="block text-[#0B0B2B] font-semibold text-sm mb-1">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]"
            />
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
              className="w-full border border-gray-300 text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]"
            />
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
              className="w-full border border-gray-300 text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]"
            />
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
              className="w-full border border-gray-300 text-xs text-gray-400 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0B0B2B]"
            />
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