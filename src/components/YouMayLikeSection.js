import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const productItems = [
  {
    id: 1,
    image:
      'https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg',
    name: 'Face Cream',
    price: '$2.00',
    originalPrice: '$5.00',
  },
  {
    id: 2,
    image:
      'https://storage.googleapis.com/a1aa/image/c4591354-b33d-453e-4024-aa08b1782d88.jpg',
    name: 'Office Suit',
    price: '$98.00',
    originalPrice: '$120.00',
  },
  {
    id: 3,
    image:
      'https://storage.googleapis.com/a1aa/image/ab896565-c237-4399-8c21-fcbaa8b04244.jpg',
    name: 'Face Cream',
    price: '$5.00',
    originalPrice: '$12.00',
  },
  {
    id: 4,
    image:
      'https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg',
    name: 'Suns Cream',
    price: '$10.00',
    originalPrice: '$15.00',
  },
];

const YouMayLikeSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null); // New state for hover
  const totalItems = productItems.length;

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % totalItems);
      setTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev - 1 + totalItems) % totalItems);
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 font-sans overflow-hidden mb-20 mt-20">
      <h2
        className="text-center text-sm font-semibold text-gray-900 mb-10"
        style={{ fontSize: '32px' }}
      >
        You May Like
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="w-full overflow-hidden max-w-[1150px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * 25}%)` }}
          >
            {productItems.concat(productItems).map((item, index) => (
              <div
                key={index}
                className="min-w-[25%] text-center text-xs text-gray-700 relative"
                onMouseEnter={() => setHoveredProduct(item.id)} // Set hovered product
                onMouseLeave={() => setHoveredProduct(null)} // Clear hovered product
              >
                <img
                  alt={item.name}
                  className="w-[400px] h-[425px] object-contain mx-auto rounded-md"
                  src={item.image}
                />
                {hoveredProduct === item.id && ( // Conditionally render icons
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                )}
                <span className={`-mt-3 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
                  {item.name}
                </span>
                <span className="mt-1 block text-[16px]">
                  <span className="text-black font-semibold">{item.price}</span>{' '}
                  <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next"
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default YouMayLikeSection;