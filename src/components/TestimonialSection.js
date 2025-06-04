// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const TestimonialSection = () => {
//   return (
//     <section className="bg-[#f7eedb] py-10">
//       <div className="max-w-3xl mx-auto px-4 text-center relative">
//         <button aria-label="Previous testimonial"
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//           <FontAwesomeIcon icon={['fas', 'chevron-left']} />
//         </button>
//         <button aria-label="Next testimonial"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//           <FontAwesomeIcon icon={['fas', 'chevron-right']} />
//         </button>
//         <h3 className="text-base font-semibold mb-14" style={{fontSize:'32px'}}>Customer Testimonial</h3>
//         {/* <p className="text-xs max-w-md mx-auto mb-6 leading-5" style={{fontSize:'18px'}}> */}
//         <p className="text-xs max-w-lg mx-auto mb-6 leading-8" style={{fontSize:'18px', textAlign:'center'}}>
//           Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam
//           voluptas iure, delectus dignissimos facilis neque nulla earum.
//         </p>
//         <div className="flex flex-col items-center space-y-2">
//           <img alt="Petey Cruiser, Designer at Colorlib, portrait photo" className="rounded-full w-20 h-20 object-cover"
//                height="40" src="https://storage.googleapis.com/a1aa/image/44ec4361-d1ba-4bfa-7e5e-7e8ef555b4b0.jpg"
//                width="40"/>
//           <p className="text-[9px] font-semibold leading-3" style={{fontSize:'14px'}}>Petey Cruiser</p>
//           <p className="text-[9px] leading-3" style={{fontSize:'14px'}}>Designer at Colorlib</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="bg-[#f7eedb] py-10 font-sans"> {/* Added font-sans for Inter font */}
      <div className="max-w-3xl mx-auto px-4 text-center relative">
        {/* Previous Testimonial Button */}
        <button
          aria-label="Previous testimonial"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200"
        >
          {/* Replaced FontAwesomeIcon with inline SVG for chevron-left */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Testimonial Button */}
        <button
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 transition-colors duration-200"
        >
          {/* Replaced FontAwesomeIcon with inline SVG for chevron-right */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Customer Testimonial Title */}
        <h3 className="text-base font-semibold mb-14 text-gray-800" style={{ fontSize: '32px' }}>
          Customer Testimonial
        </h3>

        {/* Testimonial Text */}
        <p className="text-lg max-w-lg mx-auto mb-8 leading-relaxed text-gray-700" style={{ textAlign: 'center' }}>
          Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam
          voluptas iure, delectus dignissimos facilis neque nulla earum.
        </p>

        {/* Profile Image, Name, and Designation */}
        <div className="flex items-center justify-center space-x-4"> {/* Added space-x-4 for spacing */}
          <img
            alt="Petey Cruiser, Designer at Colorlib, portrait photo"
            className="rounded-full w-20 h-20 object-cover border-2 border-gray-300 shadow-md"
            src="https://storage.googleapis.com/a1aa/image/44ec4361-d1ba-4bfa-7e5e-7e8ef555b4b0.jpg"
            // Added onerror to provide a fallback placeholder image
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop
              e.target.src = "https://placehold.co/80x80/cccccc/333333?text=User";
            }}
          />
          <div className="text-left"> {/* Container for name and designation */}
            <p className="text-base font-semibold text-gray-900">Petey Cruiser</p>
            <p className="text-sm text-gray-600">Designer at Colorlib</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
