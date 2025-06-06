// src/pages/Women.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Category';

const Women = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Category defaultCategory="Women" />
      <Footer />
    </div>
  );
};

export default Women;