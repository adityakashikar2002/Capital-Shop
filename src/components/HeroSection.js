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
