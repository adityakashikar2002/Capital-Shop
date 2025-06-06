// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faStore, faChevronDown, faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   return (
//     <>
//       {/* Top bar */}
//       <div className="bg-white text-gray-600 text-[14px] flex justify-between px-5 py-1 border-b border-gray-200 m-2 font-sans">
//         <div className="flex space-x-4 ml-72">
//           <a className="hover:text-red-600 transition-colors duration-200" href="#">About Us</a>
//           <a className="hover:text-red-600 transition-colors duration-200" href="#">Privacy</a>
//           <a className="hover:text-red-600 transition-colors duration-200" href="#">FAQ</a>
//           <a className="hover:text-red-600 transition-colors duration-200" href="#">Careers</a>
//         </div>
//         <div className="flex items-center space-x-3 text-[14px] mr-72">
//           <a className="hover:text-red-600 transition-colors duration-200" href="#">My Wishlist</a>
//           <span>|</span>
//           <a className="hover:text-red-600 transition-colors duration-200" href="#">Track Your Order</a>
//           <span>|</span>
//           <a aria-label="Facebook" className="social-icon" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//           <a aria-label="Instagram" className="social-icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           <a aria-label="Twitter" className="social-icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//           <a aria-label="LinkedIn" className="social-icon" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//           <a aria-label="YouTube" className="social-icon" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-24">
//           {/* Logo and site name - Made clickable to reload the page */}
//           {/* Removed hover:text-red-600 from the parent <a> tag */}
//           <a href="/" className="flex items-center space-x-3">
//             <div className="bg-[#ff0a0a] rounded-full p-2 flex items-center justify-center w-12 h-12 hover:opacity-80 transition-opacity duration-200"> {/* Added subtle hover effect to the icon background */}
//               <FontAwesomeIcon icon={faStore} className="text-white text-sm w-8 h-8" />
//             </div>
//             {/* The text itself will now retain its original color on hover */}
//             <span className="font-semibold text-lg" style={{ fontSize: '24px' }}>Capital</span>
//             <span className="font-normal text-lg" style={{ fontSize: '24px' }}>Shop</span>
//           </a>
//           <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold">
//             <li><a className="hover:text-red-600 transition-colors duration-200" href="/">Home</a></li>
//             <li><a className="hover:text-red-600 transition-colors duration-200" href="/men">Men</a></li>
//             <li><a className="hover:text-red-600 transition-colors duration-200" href="/women">Women</a></li>
//             <li className="relative">
//               <a className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1" href="/baby">
//                 Baby Collection
//                 <span className="absolute -top-6 right-1 -translate-x-1/2 bg-red-600 text-white text-[8px] font-bold rounded-full px-1.5 py-0.5">New</span>
//               </a>
//             </li>
//             <li className="relative group">
//               <a className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1" href="#">
//                 Pages
//                 <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
//               </a>
//             </li>
//             <li><a className="hover:text-red-600 transition-colors duration-200" href="#">Blog</a></li>
//             <li><a className="hover:text-red-600 transition-colors duration-200" href="#">Contact</a></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button aria-label="Search" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
//               <FontAwesomeIcon icon={faSearch} className="text-lg" />
//             </button>
//             <button aria-label="User Account" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
//               <FontAwesomeIcon icon={faUser} className="text-lg" />
//             </button>
//             <button aria-label="Shopping Cart" className="relative text-gray-700 hover:text-red-600 transition-colors duration-200">
//               <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
//               <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5">1</span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Sale banner */}
//       <div className="bg-black text-white text-[14px] text-center py-2">
//         Sale Up To
//         <span className="font-bold"> 50% </span>
//         Biggest Discounts. Hurry! Limited Period Offer
//         {/* Updated Shop Now link styling */}
//         <a className="inline-block border-b-[2px] border-[#996515] pb-[2px] ml-1
//                      text-[#eecb96] hover:text-red-300 transition-colors duration-200" href="#">
//           Shop Now
//         </a>
//       </div>
//     </>
//   );
// };

// export default Header;


// src/components/Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faStore, faChevronDown, faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Header = () => {
  const { cartCount, wishlistCount } = useShop();

  return (
    <>
      {/* Top bar */}
      <div className="bg-white text-gray-600 text-[14px] flex justify-between px-5 py-1 border-b border-gray-200 m-2 font-sans">
        <div className="flex space-x-4 ml-72">
          <Link to="/about" className="hover:text-red-600 transition-colors duration-200">About Us</Link>
          <Link to="/privacy" className="hover:text-red-600 transition-colors duration-200">Privacy</Link>
          <Link to="/faq" className="hover:text-red-600 transition-colors duration-200">FAQ</Link>
          <Link to="/careers" className="hover:text-red-600 transition-colors duration-200">Careers</Link>
        </div>
        <div className="flex items-center space-x-3 text-[14px] mr-72">
          <Link to="/wishlist" className="hover:text-red-600 transition-colors duration-200">
            My Wishlist ({wishlistCount})
          </Link>
          <span>|</span>
          <Link to="/track-order" className="hover:text-red-600 transition-colors duration-200">Track Your Order</Link>
          <span>|</span>
          <a aria-label="Facebook" className="social-icon" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a aria-label="Instagram" className="social-icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a aria-label="Twitter" className="social-icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a aria-label="LinkedIn" className="social-icon" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a aria-label="YouTube" className="social-icon" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-[#ff0a0a] rounded-full p-2 flex items-center justify-center w-12 h-12 hover:opacity-80 transition-opacity duration-200">
              <FontAwesomeIcon icon={faStore} className="text-white text-sm w-8 h-8" />
            </div>
            <span className="font-semibold text-lg" style={{ fontSize: '24px' }}>Capital</span>
            <span className="font-normal text-lg" style={{ fontSize: '24px' }}>Shop</span>
          </Link>
          <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <li><Link to="/" className="hover:text-red-600 transition-colors duration-200">Home</Link></li>
            <li><Link to="/men" className="hover:text-red-600 transition-colors duration-200">Men</Link></li>
            <li><Link to="/women" className="hover:text-red-600 transition-colors duration-200">Women</Link></li>
            <li className="relative">
              <Link to="/baby" className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1">
                Baby Collection
                <span className="absolute -top-6 right-1 -translate-x-1/2 bg-red-600 text-white text-[8px] font-bold rounded-full px-1.5 py-0.5">New</span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/pages" className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1">
                Pages
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </Link>
            </li>
            <li><Link to="/blog" className="hover:text-red-600 transition-colors duration-200">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-red-600 transition-colors duration-200">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faSearch} className="text-lg" />
            </button>
            <button aria-label="User Account" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </button>
            <Link to="/cart" className="relative text-gray-700 hover:text-red-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Sale banner */}
      <div className="bg-black text-white text-[14px] text-center py-2">
        Sale Up To
        <span className="font-bold"> 50% </span>
        Biggest Discounts. Hurry! Limited Period Offer
        <Link to="/sale" className="inline-block border-b-[2px] border-[#996515] pb-[2px] ml-1
                     text-[#eecb96] hover:text-red-300 transition-colors duration-200">
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default Header;