// import React, { useEffect, useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const tabs = ['Men', 'Women', 'Baby', 'Fashion'];

// const productItems = [
//   {
//     id: 1,
//     image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 2,
//     image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 3,
//     image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 4,
//     image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
// ];

// const TrendingSection = () => {
//   const [activeTab, setActiveTab] = useState('Men');
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const sliderRef = useRef(null);

//   const totalItems = productItems.length;

//   // Slide one card at a time, infinite loop by duplicating array
//   const nextSlide = () => {
//     if (transitioning) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       setSlideIndex((prev) => (prev + 1) % totalItems);
//       setTransitioning(false);
//     }, 500);
//   };

//   const prevSlide = () => {
//     if (transitioning) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       setSlideIndex((prev) => (prev - 1 + totalItems) % totalItems);
//       setTransitioning(false);
//     }, 500);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="max-w-[1300px] mx-auto px-4 py-20 font-sans overflow-hidden">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-base font-semibold" style={{ fontSize: '30px' }}>
//           Trending This Week
//         </h2>
//         <nav className="flex space-x-6 text-xs font-normal" style={{ fontSize: '14px' }}>
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-1 ${
//                 activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-black'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//       </div>
//       <div className="flex justify-center items-center space-x-6 relative">
//         <button
//           aria-label="Previous"
//           onClick={prevSlide}
//           className="text-gray-400 hover:text-gray-600 z-10 absolute left-0"
//           style={{ top: '50%', transform: 'translateY(-50%)' }}
//         >
//           <FontAwesomeIcon icon={faChevronLeft} size="2x" />
//         </button>
//         <div className="w-full overflow-hidden" style={{ maxWidth: '1150px' }}>
//           <div
//             ref={sliderRef}
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${slideIndex * 25}%)`, height:'450px'}}
//           >
//             {productItems.concat(productItems).map((item, index) => (
//               <div
//                 key={index}
//                 className="min-w-[25%] px-3 text-center bg-white rounded-md shadow-md p-4 mx-1"
//               >
//                 <img
//                   alt={item.name}
//                   className="w-full h-80 object-cover rounded-md"
//                   src={item.image}
//                 />
//                 {/* <p className="text-md font-semibold mt-3">{item.name}</p>
//                 <p className="text-red-600 font-bold mt-1">{item.price}</p>
//                 <p className="text-gray-400 line-through">{item.originalPrice}</p> */}
//                 <span className="mt-4 block text-[16px] font-semibold">{item.name}</span>
//                 <span className="mt-1 block text-[16px]">
//                   <span className="text-red-600 font-semibold">{item.price}</span>{' '}
//                   <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           aria-label="Next"
//           onClick={nextSlide}
//           className="text-gray-400 hover:text-gray-600 z-10 absolute -right-4"
//           style={{ top: '50%', transform: 'translateY(-50%)' }}
//         >
//           <FontAwesomeIcon icon={faChevronRight} size="2x" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TrendingSection;


import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const tabs = ['Men', 'Women', 'Baby', 'Fashion'];

const productItems = [
  {
    id: 1,
    image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
    name: 'Cashmere Tank + Bag',
    price: '$98.00',
    originalPrice: '$120.00',
  },
  {
    id: 2,
    image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
    name: 'Cashmere Tank + Bag',
    price: '$98.00',
    originalPrice: '$120.00',
  },
  {
    id: 3,
    image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
    name: 'Cashmere Tank + Bag',
    price: '$98.00',
    originalPrice: '$120.00',
  },
  {
    id: 4,
    image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
    name: 'Cashmere Tank + Bag',
    price: '$98.00',
    originalPrice: '$120.00',
  },
];

const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState('Men');
  const [slideIndex, setSlideIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null); // New state for hover
  const sliderRef = useRef(null);

  const totalItems = productItems.length;

  // Slide one card at a time, infinite loop by duplicating array
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
    <section className="max-w-[1300px] mx-auto px-4 py-20 font-sans overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold" style={{ fontSize: '30px' }}>
          Trending This Week
        </h2>
        <nav className="flex space-x-6 text-xs font-normal" style={{ fontSize: '14px' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 ${
                activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex justify-center items-center space-x-6 relative">
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="text-gray-400 hover:text-gray-600 z-10 absolute left-0"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <div className="w-full overflow-hidden" style={{ maxWidth: '1150px' }}>
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * 25}%)`, height:'450px'}}
          >
            {productItems.concat(productItems).map((item, index) => (
              <div
                key={index}
                className="min-w-[25%] px-3 text-center bg-white rounded-md shadow-md p-4 mx-1 relative"
                onMouseEnter={() => setHoveredProduct(item.id)} // Set hovered product
                onMouseLeave={() => setHoveredProduct(null)} // Clear hovered product
              >
                <img
                  alt={item.name}
                  className="w-full h-80 object-cover rounded-md"
                  src={item.image}
                />
                {hoveredProduct === item.id && ( // Conditionally render icons
                  <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
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
                <span className={`mt-4 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
                  {item.name}
                </span>
                <span className="mt-1 block text-[16px]">
                  <span className="text-red-600 font-semibold">{item.price}</span>{' '}
                  <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
                </span>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Next"
          onClick={nextSlide}
          className="text-gray-400 hover:text-gray-600 z-10 absolute -right-4"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
    </section>
  );
};

export default TrendingSection;