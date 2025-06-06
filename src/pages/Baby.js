// src/pages/Baby.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Category';

const Baby = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Category defaultCategory="Baby Fashion" />
      <Footer />
    </div>
  );
};

export default Baby;