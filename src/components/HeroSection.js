import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-100 font-sans">
      <img alt="Smiling woman in denim jacket on light blue background" className="w-full object-cover" height="400"
          //  src="https://storage.googleapis.com/a1aa/image/860fd1e1-8ed7-47ba-8286-bf411b409a88.jpg" style={{height: '1000px'}}
          src="/images/hero2.webp" style={{height: '700px'}}
          width="1920"/>
      <div className="absolute top-1/2 right-80 transform -translate-y-1/2 text-center max-w-xs px-4"
           style={{maxWidth: '600px'}}>
        <p className="font-pacifico text-red-500 text-lg mb-8" style={{fontSize:'40px'}}>Fashion Sale</p>
        <h2 className="font-bold text-2xl mb-2" style={{fontSize:'40px'}}>Minimal Menz Style</h2>
        <p className="text-gray-600 text-xs mb-4 leading-tight" style={{fontSize:'16px'}}>
          Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis
          neque nulla earum.
        </p>
        <button aria-label="Shop Now" className="bg-gray-900 text-white text-xs font-bold px-5 py-2 hover:bg-gray-800">
          SHOP NOW
        </button>
      </div>
      <button aria-label="Previous Slide"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-8 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </button>
      <button aria-label="Next Slide"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-8 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </button>
    </section>
  );
};

export default HeroSection;