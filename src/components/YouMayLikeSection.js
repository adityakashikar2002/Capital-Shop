import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const YouMayLikeSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 font-sans">
      <h2 className="text-center text-sm font-semibold text-gray-900" style={{fontSize:'32px'}}>You May Like</h2>
      <div className="relative flex items-center justify-center">
        <button aria-label="Previous" className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-600">
          <FontAwesomeIcon icon={['fas', 'chevron-left']} />
        </button>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center text-center text-xs text-gray-700">
            <img alt="Silver Curology bottle with milk splash behind on white background"
                 className="w-[400px] h-[425px] object-contain" height="200"
                 src="https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg"
                 width="150"/>
            <span className="mt-2">Cashmere Tank + Bag</span>
            <span className="mt-1">
              $98.00
              <s className="text-gray-400 text-[10px]">$120.00</s>
            </span>
          </div>
          <div className="flex flex-col items-center text-center text-xs text-gray-700">
            <img alt="Brown boots, belt, watch, sunglasses, pants and white shirt flatlay on white background"
                 className="w-[400px] h-[425px] object-contain" height="200"
                 src="https://storage.googleapis.com/a1aa/image/c4591354-b33d-453e-4024-aa08b1782d88.jpg"
                 width="150"/>
            <span className="mt-2">Cashmere Tank + Bag</span>
            <span className="mt-1">
              $98.00
              <s className="text-gray-400 text-[10px]">$120.00</s>
            </span>
          </div>
          <div className="flex flex-col items-center text-center text-xs text-gray-700">
            <img alt="Hands holding go fuzz free tube with purple nails on white background"
                 className="w-[400px] h-[425px] object-contain" height="200"
                 src="https://storage.googleapis.com/a1aa/image/ab896565-c237-4399-8c21-fcbaa8b04244.jpg"
                 width="150"/>
            <span className="mt-2">Cashmere Tank + Bag</span>
            <span className="mt-1">
              $98.00
              <s className="text-gray-400 text-[10px]">$120.00</s>
            </span>
          </div>
          <div className="flex flex-col items-center text-center text-xs text-gray-700">
            <img alt="Silver Curology bottle with milk splash behind on white background"
                 className="w-[400px] h-[425px] object-contain" height="200"
                 src="https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg"
                 width="150"/>
            <span className="mt-2">Cashmere Tank + Bag</span>
            <span className="mt-1">
              $98.00
              <s className="text-gray-400 text-[10px]">$120.00</s>
            </span>
          </div>
        </div>
        <button aria-label="Next" className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-600">
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </button>
      </div>
    </div>
  );
};

export default YouMayLikeSection;