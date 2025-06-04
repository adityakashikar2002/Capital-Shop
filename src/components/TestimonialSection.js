// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // const TestimonialSection = () => {
// //   return (
// //     <section className="bg-[#f7eedb] py-10">
// //       <div className="max-w-3xl mx-auto px-4 text-center relative">
// //         <button aria-label="Previous testimonial"
// //                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
// //           <FontAwesomeIcon icon={['fas', 'chevron-left']} />
// //         </button>
// //         <button aria-label="Next testimonial"
// //                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
// //           <FontAwesomeIcon icon={['fas', 'chevron-right']} />
// //         </button>
// //         <h3 className="text-base font-semibold mb-14" style={{fontSize:'32px'}}>Customer Testimonial</h3>
// //         {/* <p className="text-xs max-w-md mx-auto mb-6 leading-5" style={{fontSize:'18px'}}> */}
// //         <p className="text-xs max-w-lg mx-auto mb-6 leading-8" style={{fontSize:'18px', textAlign:'center'}}>
// //           Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam
// //           voluptas iure, delectus dignissimos facilis neque nulla earum.
// //         </p>
// //         <div className="flex flex-col items-center space-y-2">
// //           <img alt="Petey Cruiser, Designer at Colorlib, portrait photo" className="rounded-full w-20 h-20 object-cover"
// //                height="40" src="https://storage.googleapis.com/a1aa/image/44ec4361-d1ba-4bfa-7e5e-7e8ef555b4b0.jpg"
// //                width="40"/>
// //           <p className="text-[9px] font-semibold leading-3" style={{fontSize:'14px'}}>Petey Cruiser</p>
// //           <p className="text-[9px] leading-3" style={{fontSize:'14px'}}>Designer at Colorlib</p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialSection;


// import React from 'react';

// const TestimonialSection = () => {
//   return (
//     <section className="bg-[#f7eedb] py-10 font-sans"> {/* Added font-sans for Inter font */}
//       <div className="max-w-3xl mx-auto px-4 text-center relative">
//         {/* Previous Testimonial Button */}
//         <button
//           aria-label="Previous testimonial"
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200"
//         >
//           {/* Replaced FontAwesomeIcon with inline SVG for chevron-left */}
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Next Testimonial Button */}
//         <button
//           aria-label="Next testimonial"
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200"
//         >
//           {/* Replaced FontAwesomeIcon with inline SVG for chevron-right */}
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Customer Testimonial Title */}
//         <h3 className="text-base font-semibold mb-14 text-gray-800" style={{ fontSize: '32px' }}>
//           Customer Testimonial
//         </h3>

//         {/* Testimonial Text */}
//         <p className="text-lg max-w-lg mx-auto mb-8 leading-relaxed text-gray-700" style={{ textAlign: 'center' }}>
//           Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam
//           voluptas iure, delectus dignissimos facilis neque nulla earum.
//         </p>

//         {/* Profile Image, Name, and Designation */}
//         <div className="flex items-center justify-center space-x-4"> {/* Added space-x-4 for spacing */}
//           <img
//             alt="Petey Cruiser, Designer at Colorlib, portrait photo"
//             className="rounded-full w-20 h-20 object-cover border-2 border-gray-300 shadow-md"
//             src="https://storage.googleapis.com/a1aa/image/44ec4361-d1ba-4bfa-7e5e-7e8ef555b4b0.jpg"
//             // Added onerror to provide a fallback placeholder image
//             onError={(e) => {
//               e.target.onerror = null; // Prevents infinite loop
//               e.target.src = "https://placehold.co/80x80/cccccc/333333?text=User";
//             }}
//           />
//           <div className="text-left"> {/* Container for name and designation */}
//             <p className="text-base font-semibold text-gray-900">Petey Cruiser</p>
//             <p className="text-sm text-gray-600">Designer at Colorlib</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text:
      'Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.',
    name: 'Petey Cruiser',
    title: 'Designer at Colorlib',
    image:
      'https://storage.googleapis.com/a1aa/image/44ec4361-d1ba-4bfa-7e5e-7e8ef555b4b0.jpg',
  },
  {
    id: 2,
    text:
      'Amazing service! I’m thrilled with the quality and the customer support I received. Will definitely recommend it to others.',
    name: 'John Doe',
    title: 'Founder at DevFlow',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    text:
      'The experience was smooth, intuitive, and everything I expected. Great team behind this platform!',
    name: 'Jane Smith',
    title: 'Engineer at TechCo',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const TestimonialSection = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrentIndex(([prev]) => {
      const nextIndex = (prev + newDirection + testimonials.length) % testimonials.length;
      return [nextIndex, newDirection];
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const { text, name, title, image } = testimonials[currentIndex];

  return (
    <section className="bg-[#f7eedb] py-16 font-sans relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center relative">
        {/* Previous Button */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200 z-10"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200 z-10"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <h3 className="font-semibold mb-14 text-gray-800 text-3xl" style={{ fontSize: '30px' }}>
          Customer Testimonial
        </h3>

        {/* Animated Content */}
        <div className="relative min-h-[220px]">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full top-0 left-0 px-4"
            >
              <p className="text-lg max-w-lg mx-auto mb-8 leading-relaxed text-gray-700 font-semibold">
                {text}
              </p>
              <div className="flex items-center justify-center space-x-4 mt-8">
                <img
                  alt={`${name} portrait`}
                  className="rounded-full w-20 h-20 object-cover border-2 border-gray-300 shadow-md"
                  src={image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/80x80/cccccc/333333?text=User';
                  }}
                />
                <div className="text-left">
                  <p className="text-base font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-600 font-semibold">{title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

