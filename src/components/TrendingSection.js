import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrendingSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold leading-5" style={{fontSize:'30px'}}>Trending This Week</h2>
        <nav className="flex space-x-6 text-xs font-normal leading-4" style={{fontSize:'14px'}}>
          <a className="text-red-600 border-b-2 border-red-600 pb-1" href="#">Men</a>
          <a className="text-black" href="#">Women</a>
          <a className="text-black" href="#">Baby</a>
          <a className="text-black" href="#">Fashion</a>
        </nav>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <button aria-label="Previous" className="text-gray-400 hover:text-gray-600">
          <FontAwesomeIcon icon={['fas', 'chevron-left']} />
        </button>
        <div className="grid grid-cols-4 gap-x-6">
          <div className="text-center">
            <img alt="Woman in white long sleeve top posing with hands behind head"
                 className="w-72 h-full object-cover mx-auto" height="220"
                 src="https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg"
                 width="180"/>
            <p className="text-xs mt-2">Cashmere Tank + Bag</p>
            <p className="text-xs mt-1">
              $98.00
              <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
            </p>
          </div>
          <div className="text-center">
            <img alt="Man in gray jacket and shorts with backpack side profile"
                 className="w-72 h-full object-cover mx-auto" height="220"
                 src="https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg"
                 width="180"/>
            <p className="text-xs mt-2">Cashmere Tank + Bag</p>
            <p className="text-xs mt-1">
              $98.00
              <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
            </p>
          </div>
          <div className="text-center">
            <img alt="Woman in white top posing with hand on head" className="w-72 h-full object-cover mx-auto"
                 height="220" src="https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg"
                 width="180"/>
            <p className="text-xs mt-2">Cashmere Tank + Bag</p>
            <p className="text-xs mt-1">
              $98.00
              <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
            </p>
          </div>
          <div className="text-center">
            <img alt="Woman in red sweatshirt with Tomato Soup text posing side profile"
                 className="w-72 h-full object-cover mx-auto" height="220"
                 src="https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg"
                 width="180"/>
            <p className="text-xs mt-2">Cashmere Tank + Bag</p>
            <p className="text-xs mt-1">
              $98.00
              <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
            </p>
          </div>
        </div>
        <button aria-label="Next" className="text-gray-400 hover:text-gray-600">
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </button>
      </div>
    </section>
  );
};

export default TrendingSection;