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

