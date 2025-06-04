// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // const HeroSection = () => {
// //   return (
// //     <section className="relative bg-blue-100 font-sans">
// //       <img alt="Smiling woman in denim jacket on light blue background" className="w-full object-cover" height="400"
// //           //  src="https://storage.googleapis.com/a1aa/image/860fd1e1-8ed7-47ba-8286-bf411b409a88.jpg" style={{height: '1000px'}}
// //           src="/images/hero2.webp" style={{height: '700px'}}
// //           width="1920"/>
// //       <div className="absolute top-1/2 right-80 transform -translate-y-1/2 text-center max-w-xs px-4"
// //            style={{maxWidth: '600px'}}>
// //         <p className="font-pacifico text-red-500 text-lg mb-8" style={{fontSize:'40px'}}>Fashion Sale</p>
// //         <h2 className="font-bold text-2xl mb-2" style={{fontSize:'40px'}}>Minimal Menz Style</h2>
// //         <p className="text-gray-600 text-xs mb-4 leading-tight" style={{fontSize:'16px'}}>
// //           Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis
// //           neque nulla earum.
// //         </p>
// //         <button aria-label="Shop Now" className="bg-gray-900 text-white text-xs font-bold px-5 py-2 hover:bg-gray-800">
// //           SHOP NOW
// //         </button>
// //       </div>
// //       <button aria-label="Previous Slide"
// //               className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-8 h-16 flex items-center justify-center">
// //         <FontAwesomeIcon icon={['fas', 'chevron-left']} />
// //       </button>
// //       <button aria-label="Next Slide"
// //               className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-8 h-16 flex items-center justify-center">
// //         <FontAwesomeIcon icon={['fas', 'chevron-right']} />
// //       </button>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const slides = [
//   {
//     image: '/images/hero1.webp',
//     heading: 'Minimal Menz Style',
//     subheading: 'Fashion Sale',
//     description:
//       'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.',
//     offset: '-translate-x-160', // Shift to left (adds right margin feel)
//   },
//   {
//     image: '/images/hero2.webp',
//     heading: 'Classic Women Wear',
//     subheading: 'Summer Sale',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
//     offset: 'translate-x-12', // Shift to right (adds left margin feel)
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const slide = slides[currentSlide];

//   return (
//     <section className="relative bg-blue-100 font-sans overflow-hidden">
//       <img
//         alt="Hero Slide"
//         src={slide.image}
//         className="w-full object-cover transition-all duration-700"
//         style={{ height: '700px', width: '100%' }}
//       />

//       {/* Slide content with variable X offset */}
//       <div
//         className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 ${slide.offset} max-w-xl px-4 text-center`}
//         style={{ maxWidth: '600px' }}
//       >
//         <p
//           className="font-pacifico text-red-500 mb-4"
//           style={{ fontSize: '40px' }}
//         >
//           {slide.subheading}
//         </p>
//         <h2
//           className="font-bold text-gray-900 mb-2"
//           style={{ fontSize: '40px' }}
//         >
//           {slide.heading}
//         </h2>
//         <p
//           className="text-gray-600 mb-6 leading-tight"
//           style={{ fontSize: '16px' }}
//         >
//           {slide.description}
//         </p>
//         <button
//           aria-label="Shop Now"
//           className="bg-gray-900 text-white text-sm font-bold px-6 py-3 hover:bg-gray-800"
//         >
//           SHOP NOW
//         </button>
//       </div>

//       {/* Arrows */}
//       <button
//         aria-label="Previous Slide"
//         onClick={prevSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-10 h-16 flex items-center justify-center"
//       >
//         <FontAwesomeIcon icon={faChevronLeft} />
//       </button>

//       <button
//         aria-label="Next Slide"
//         onClick={nextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-10 h-16 flex items-center justify-center"
//       >
//         <FontAwesomeIcon icon={faChevronRight} />
//       </button>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/hero1.webp',
    heading: 'Minimal Menz Style',
    subheading: 'Fashion Sale',
    description:
      'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.',
    offset: '-translate-x-160',
  },
  {
    image: '/images/hero2.webp',
    heading: 'Classic Women Wear',
    subheading: 'Summer Sale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    offset: 'translate-x-12',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-blue-100 font-sans overflow-hidden">
      <img
        alt="Hero Slide"
        src={slide.image}
        className="w-full object-cover transition-all duration-700"
        style={{ height: '700px', width: '100%' }}
      />

      {/* Animated Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 ${slide.offset} max-w-xl px-4 text-center`}
          style={{ maxWidth: '600px' }}
        >
          <motion.p
            className="font-pacifico text-red-500 mb-4"
            style={{ fontSize: '40px' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {slide.subheading}
          </motion.p>

          {/* <motion.h2
            className="font-bold text-gray-900 mb-2"
            style={{ fontSize: '40px' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slide.heading}
          </motion.h2> */}
          <motion.h2
            className="font-bold text-gray-900 mb-2"
            style={{ fontSize: '40px' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, repeat: 1, repeatType: 'loop' }}
          >
            {slide.heading}
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 leading-tight"
            style={{ fontSize: '16px' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slide.description}
          </motion.p>

          <motion.button
            aria-label="Shop Now"
            className="bg-gray-900 text-white text-sm font-bold px-6 py-3 hover:bg-gray-800"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        aria-label="Previous Slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-10 h-16 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button
        aria-label="Next Slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 hover:bg-opacity-70 text-white w-10 h-16 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  );
};

export default HeroSection;
