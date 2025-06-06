// src/components/ProductModal.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:text-red-500 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img 
          src={image} 
          alt="Product zoom" 
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductModal;