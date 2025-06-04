// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // const TrendingSection = () => {
// //   return (
// //     <section className="max-w-7xl mx-auto px-4 py-20 font-sans">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-base font-semibold leading-5" style={{fontSize:'30px'}}>Trending This Week</h2>
// //         <nav className="flex space-x-6 text-xs font-normal leading-4" style={{fontSize:'14px'}}>
// //           <a className="text-red-600 border-b-2 border-red-600 pb-1" href="#">Men</a>
// //           <a className="text-black" href="#">Women</a>
// //           <a className="text-black" href="#">Baby</a>
// //           <a className="text-black" href="#">Fashion</a>
// //         </nav>
// //       </div>
// //       <div className="flex justify-center items-center space-x-6">
// //         <button aria-label="Previous" className="text-gray-400 hover:text-gray-600">
// //           <FontAwesomeIcon icon={['fas', 'chevron-left']} />
// //         </button>
// //         <div className="grid grid-cols-4 gap-x-6">
// //           <div className="text-center">
// //             <img alt="Woman in white long sleeve top posing with hands behind head"
// //                  className="w-72 h-full object-cover mx-auto" height="220"
// //                  src="https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg"
// //                  width="180"/>
// //             <p className="text-xs mt-2">Cashmere Tank + Bag</p>
// //             <p className="text-xs mt-1">
// //               $98.00
// //               <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
// //             </p>
// //           </div>
// //           <div className="text-center">
// //             <img alt="Man in gray jacket and shorts with backpack side profile"
// //                  className="w-72 h-full object-cover mx-auto" height="220"
// //                  src="https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg"
// //                  width="180"/>
// //             <p className="text-xs mt-2">Cashmere Tank + Bag</p>
// //             <p className="text-xs mt-1">
// //               $98.00
// //               <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
// //             </p>
// //           </div>
// //           <div className="text-center">
// //             <img alt="Woman in white top posing with hand on head" className="w-72 h-full object-cover mx-auto"
// //                  height="220" src="https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg"
// //                  width="180"/>
// //             <p className="text-xs mt-2">Cashmere Tank + Bag</p>
// //             <p className="text-xs mt-1">
// //               $98.00
// //               <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
// //             </p>
// //           </div>
// //           <div className="text-center">
// //             <img alt="Woman in red sweatshirt with Tomato Soup text posing side profile"
// //                  className="w-72 h-full object-cover mx-auto" height="220"
// //                  src="https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg"
// //                  width="180"/>
// //             <p className="text-xs mt-2">Cashmere Tank + Bag</p>
// //             <p className="text-xs mt-1">
// //               $98.00
// //               <span className="line-through text-[#c2a87f] ml-1">$120.00</span>
// //             </p>
// //           </div>
// //         </div>
// //         <button aria-label="Next" className="text-gray-400 hover:text-gray-600">
// //           <FontAwesomeIcon icon={['fas', 'chevron-right']} />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TrendingSection;

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

//   const nextSlide = () => {
//     if (transitioning) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       setSlideIndex((prev) => (prev + 1) % productItems.length);
//       setTransitioning(false);
//     }, 500);
//   };

//   const prevSlide = () => {
//     if (transitioning) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       setSlideIndex((prev) => (prev - 1 + productItems.length) % productItems.length);
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
//     <section className="max-w-7xl mx-auto px-4 py-20 font-sans overflow-hidden">
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
//       <div className="flex justify-center items-center space-x-6">
//         <button
//           aria-label="Previous"
//           onClick={prevSlide}
//           className="text-gray-400 hover:text-gray-600 z-10"
//         >
//           <FontAwesomeIcon icon={faChevronLeft} />
//         </button>
//         <div
//           className="w-full overflow-hidden"
//           style={{ maxWidth: '1000px' }}
//         >
//           <div
//             ref={sliderRef}
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${slideIndex * 25}%)` }}
//           >
//             {productItems.concat(productItems).map((item, index) => (
//               <div
//                 key={index}
//                 className="min-w-[25%] px-3 text-center"
//               >
//                 <img
//                   alt={item.name}
//                   className="w-72 h-full object-cover mx-auto"
//                   height="220"
//                   src={item.image}
//                   width="180"
//                 />
//                 <p className="text-xs mt-2">{item.name}</p>
//                 <p className="text-xs mt-1">
//                   {item.price}
//                   <span className="line-through text-[#c2a87f] ml-1">{item.originalPrice}</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           aria-label="Next"
//           onClick={nextSlide}
//           className="text-gray-400 hover:text-gray-600 z-10"
//         >
//           <FontAwesomeIcon icon={faChevronRight} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TrendingSection;

import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
                className="min-w-[25%] px-3 text-center bg-white rounded-md shadow-md p-4 mx-1"
              >
                <img
                  alt={item.name}
                  className="w-full h-80 object-cover rounded-md"
                  src={item.image}
                />
                {/* <p className="text-md font-semibold mt-3">{item.name}</p>
                <p className="text-red-600 font-bold mt-1">{item.price}</p>
                <p className="text-gray-400 line-through">{item.originalPrice}</p> */}
                <span className="mt-4 block text-[16px] font-semibold">{item.name}</span>
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
