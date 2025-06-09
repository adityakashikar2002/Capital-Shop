import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faStore, faChevronDown, faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Header = () => {
  const { cartCount, wishlistCount } = useShop();
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false); // State for Blog dropdown

  const pagesDropdownRef = useRef(null);
  const blogDropdownRef = useRef(null); // Ref for the Blog dropdown li element

  // Effect to handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close Pages dropdown if clicked outside
      if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(event.target)) {
        setIsPagesDropdownOpen(false);
      }
      // Close Blog dropdown if clicked outside
      if (blogDropdownRef.current && !blogDropdownRef.current.contains(event.target)) {
        setIsBlogDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePagesDropdown = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsPagesDropdownOpen(prevState => !prevState);
    setIsBlogDropdownOpen(false); // Close Blog dropdown if Pages is opened
  };

  const toggleBlogDropdown = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsBlogDropdownOpen(prevState => !prevState);
    setIsPagesDropdownOpen(false); // Close Pages dropdown if Blog is opened
  };

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
            <li className="relative group" ref={pagesDropdownRef}> {/* Attach ref here */}
              <Link
                to="/pages"
                className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1"
                onClick={togglePagesDropdown} // Add onClick handler
              >
                Pages
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </Link>
              {isPagesDropdownOpen && ( // Conditionally render dropdown
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
                  <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cart</Link>
                  <Link to="/product-details" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product Details</Link>
                  <Link to="/checkout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product Checkout</Link>
                </div>
              )}
            </li>
            <li className="relative group" ref={blogDropdownRef}> {/* New: Blog dropdown ref */}
              <Link
                to="/blog"
                className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1"
                onClick={toggleBlogDropdown} // New: Blog dropdown toggle handler
              >
                Blog
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </Link>
              {isBlogDropdownOpen && ( // New: Conditionally render Blog dropdown
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                  <Link to="/blog-main" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog</Link>
                  <Link to="/blog-elements" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Elements</Link>
                  <Link to="/blog-details" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog Details</Link>
                </div>
              )}
            </li>
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


// // src/components/Header.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faStore, faChevronDown, faSearch, faUser, faShoppingCart, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import { useShop } from '../context/ShopContext';

// const Header = () => {
//   const { cartCount, wishlistCount, isLoggedIn, logout } = useShop();
//   const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
//   const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
//   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
//   const pagesDropdownRef = useRef(null);
//   const blogDropdownRef = useRef(null);
//   const userDropdownRef = useRef(null);
//   const navigate = useNavigate();

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(event.target)) {
//         setIsPagesDropdownOpen(false);
//       }
//       if (blogDropdownRef.current && !blogDropdownRef.current.contains(event.target)) {
//         setIsBlogDropdownOpen(false);
//       }
//       if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
//         setIsUserDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const togglePagesDropdown = (e) => {
//     e.preventDefault();
//     setIsPagesDropdownOpen(prev => !prev);
//     setIsBlogDropdownOpen(false);
//     setIsUserDropdownOpen(false);
//   };

//   const toggleBlogDropdown = (e) => {
//     e.preventDefault();
//     setIsBlogDropdownOpen(prev => !prev);
//     setIsPagesDropdownOpen(false);
//     setIsUserDropdownOpen(false);
//   };

//   const toggleUserDropdown = (e) => {
//     e.preventDefault();
//     setIsUserDropdownOpen(prev => !prev);
//     setIsPagesDropdownOpen(false);
//     setIsBlogDropdownOpen(false);
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <>
//       {/* Top bar */}
//       <div className="bg-white text-gray-600 text-[14px] flex justify-between px-5 py-1 border-b border-gray-200 m-2 font-sans">
//         <div className="flex space-x-4 ml-72">
//           <Link to="/about" className="hover:text-red-600 transition-colors duration-200">About Us</Link>
//           <Link to="/privacy" className="hover:text-red-600 transition-colors duration-200">Privacy</Link>
//           <Link to="/faq" className="hover:text-red-600 transition-colors duration-200">FAQ</Link>
//           <Link to="/careers" className="hover:text-red-600 transition-colors duration-200">Careers</Link>
//         </div>
//         <div className="flex items-center space-x-3 text-[14px] mr-72">
//           <Link to="/wishlist" className="hover:text-red-600 transition-colors duration-200">
//             My Wishlist ({wishlistCount})
//           </Link>
//           <span>|</span>
//           <Link to="/track-order" className="hover:text-red-600 transition-colors duration-200">Track Your Order</Link>
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
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="bg-[#ff0a0a] rounded-full p-2 flex items-center justify-center w-12 h-12 hover:opacity-80 transition-opacity duration-200">
//               <FontAwesomeIcon icon={faStore} className="text-white text-sm w-8 h-8" />
//             </div>
//             <span className="font-semibold text-lg" style={{ fontSize: '24px' }}>Capital</span>
//             <span className="font-normal text-lg" style={{ fontSize: '24px' }}>Shop</span>
//           </Link>
//           <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold">
//             <li><Link to="/" className="hover:text-red-600 transition-colors duration-200">Home</Link></li>
//             <li><Link to="/men" className="hover:text-red-600 transition-colors duration-200">Men</Link></li>
//             <li><Link to="/women" className="hover:text-red-600 transition-colors duration-200">Women</Link></li>
//             <li className="relative">
//               <Link to="/baby" className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1">
//                 Baby Collection
//                 <span className="absolute -top-6 right-1 -translate-x-1/2 bg-red-600 text-white text-[8px] font-bold rounded-full px-1.5 py-0.5">New</span>
//               </Link>
//             </li>
//             <li className="relative group" ref={pagesDropdownRef}>
//               <Link
//                 to="#"
//                 className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1"
//                 onClick={togglePagesDropdown}
//               >
//                 Pages
//                 <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
//               </Link>
//               {isPagesDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
//                   {!isLoggedIn ? (
//                     <>
//                       <Link to="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
//                       <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</Link>
//                     </>
//                   ) : null}
//                   <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cart</Link>
//                   <Link to="/product-details" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product Details</Link>
//                   <Link to="/checkout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Product Checkout</Link>
//                 </div>
//               )}
//             </li>
//             <li className="relative group" ref={blogDropdownRef}>
//               <Link
//                 to="#"
//                 className="hover:text-red-600 transition-colors duration-200 flex items-center gap-1"
//                 onClick={toggleBlogDropdown}
//               >
//                 Blog
//                 <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
//               </Link>
//               {isBlogDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
//                   <Link to="/blog-main" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog</Link>
//                   <Link to="/blog-elements" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Elements</Link>
//                   <Link to="/blog-details" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog Details</Link>
//                 </div>
//               )}
//             </li>
//             <li><Link to="/contact" className="hover:text-red-600 transition-colors duration-200">Contact</Link></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button aria-label="Search" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
//               <FontAwesomeIcon icon={faSearch} className="text-lg" />
//             </button>
            
//             {/* User Profile Dropdown */}
//             <div className="relative" ref={userDropdownRef}>
//               <button 
//                 aria-label="User Account" 
//                 className="text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 onClick={toggleUserDropdown}
//               >
//                 <FontAwesomeIcon icon={faUser} className="text-lg" />
//               </button>
//               {isUserDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
//                   {isLoggedIn ? (
//                     <>
//                       <div className="block px-4 py-2 text-gray-800 font-medium">Welcome, User</div>
//                       <button 
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
//                       >
//                         <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
//                         Logout
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <Link to="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
//                       <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</Link>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
            
//             <Link to="/cart" className="relative text-gray-700 hover:text-red-600 transition-colors duration-200">
//               <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Sale banner */}
//       <div className="bg-black text-white text-[14px] text-center py-2">
//         Sale Up To
//         <span className="font-bold"> 50% </span>
//         Biggest Discounts. Hurry! Limited Period Offer
//         <Link to="/sale" className="inline-block border-b-[2px] border-[#996515] pb-[2px] ml-1
//                       text-[#eecb96] hover:text-red-300 transition-colors duration-200">
//           Shop Now
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Header;