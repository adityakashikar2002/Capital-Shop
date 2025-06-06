import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <footer className="bg-[#0f0f0d] text-white max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 font-inter">
      {/* Top newsletter + social */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 ml-72 mr-72">
        <div>
          <p className="font-semibold text-sm text-[24px]">Subscribe Newsletter</p>
          <p className="text-[14px] mt-3">Subscribe newsletter to get 5% on all products.</p>
        </div>
        <form
          className="flex w-full max-w-xs md:max-w-[450px] -ml-48"
          style={{ height: '55px' }}
          onSubmit={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-3 py-2 text-black text-[14px] outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#ff0a0a] text-white text-xs font-semibold px-4 py-2 ml-3"
          >
            Subscribe
          </button>
        </form>
        <div className="flex space-x-4 text-[#4a4a4a] text-sm">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
            <FontAwesomeIcon icon={faFacebook} className="text-[22px] social-icon" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
            <FontAwesomeIcon icon={faInstagram} className="text-[22px] social-icon" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors duration-200">
            <FontAwesomeIcon icon={faYoutube} className="text-[22px] social-icon" />
          </a>
        </div>
      </div>

      <hr className="border-t border-[#2a2a2a] my-8 ml-60 mr-60" />

      {/* Grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 text-[11px] leading-5 ml-60 mr-60">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 sm:col-span-1 ml-6 cursor-pointer"
          onClick={reloadPage}
        >
          <div className="bg-[#ff0a0a] rounded-full p-2 flex items-center justify-center w-12 h-12">
            <FontAwesomeIcon icon={faStore} className="text-white text-sm w-8 h-8" />
          </div>
          <p className="font-semibold text-xs text-[24px]">
            Capital <span className="font-normal">Shop</span>
          </p>
        </div>

        {/* Link categories */}
        {[
          { title: 'Shop Men', items: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'], margin: 'ml-20' },
          { title: 'Shop Women', items: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'], margin: 'ml-10' },
          { title: 'Baby Collection', items: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'], margin: '' },
          { title: 'Quick Links', items: ['Track Your Order', 'Support', 'FAQ', 'Carrier', 'About', 'Contact Us'], margin: '' },
        ].map((section, index) => (
          <div key={index} className={`${section.margin}`}>
            <p className="font-semibold text-[16px] mb-6">{section.title}</p>
            <ul className="space-y-1 text-[#a3a3a3] text-[14px] cursor-pointer">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  onClick={scrollToTop}
                  className="hover:underline transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-t border-[#2a2a2a] mt-8 ml-60 mr-60" />

      {/* Bottom line */}
      <p className="text-[16px] text-[#a3a3a3] mt-4 text-center">
        Copyright ©2025 All rights reserved | This template is made
        with <span className="text-[#ff0a0a]">❤️</span> by
        <span className="text-[#ff0a0a]"> Colorlib</span>
      </p>
    </footer>
  );
};

export default Footer;