// src/pages/Men.jsx
import React from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import Footer from '../components/Footer'; // Assuming you have a Footer component
import Category from '../components/Category';

const Men = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Category defaultCategory="Men" />
      <Footer />
    </div>
  );
};

export default Men;