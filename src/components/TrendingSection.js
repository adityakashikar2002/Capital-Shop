// // // import React, { useEffect, useState, useRef } from 'react';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

// // // const tabs = ['Men', 'Women', 'Baby', 'Fashion'];

// // // const productItems = [
// // //   {
// // //     id: 1,
// // //     image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
// // //     name: 'White Top',
// // //     price: '$40.00',
// // //     originalPrice: '$80.00',
// // //   },
// // //   {
// // //     id: 2,
// // //     image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
// // //     name: 'Cashmere Tank + Bag',
// // //     price: '$30.00',
// // //     originalPrice: '$38.00',
// // //   },
// // //   {
// // //     id: 3,
// // //     image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
// // //     name: 'White Tank Top',
// // //     price: '$93.00',
// // //     originalPrice: '$110.00',
// // //   },
// // //   {
// // //     id: 4,
// // //     image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
// // //     name: 'Cotton T-Shirt Red',
// // //     price: '$25.00',
// // //     originalPrice: '$35.00',
// // //   },
// // // ];

// // // const TrendingSection = () => {
// // //   const [activeTab, setActiveTab] = useState('Men');
// // //   const [slideIndex, setSlideIndex] = useState(0);
// // //   const [transitioning, setTransitioning] = useState(false);
// // //   const [hoveredProduct, setHoveredProduct] = useState(null); // New state for hover
// // //   const sliderRef = useRef(null);

// // //   const totalItems = productItems.length;

// // //   // Slide one card at a time, infinite loop by duplicating array
// // //   const nextSlide = () => {
// // //     if (transitioning) return;
// // //     setTransitioning(true);
// // //     setTimeout(() => {
// // //       setSlideIndex((prev) => (prev + 1) % totalItems);
// // //       setTransitioning(false);
// // //     }, 500);
// // //   };

// // //   const prevSlide = () => {
// // //     if (transitioning) return;
// // //     setTransitioning(true);
// // //     setTimeout(() => {
// // //       setSlideIndex((prev) => (prev - 1 + totalItems) % totalItems);
// // //       setTransitioning(false);
// // //     }, 500);
// // //   };

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       nextSlide();
// // //     }, 3000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <section className="max-w-[1300px] mx-auto px-4 py-20 font-sans overflow-hidden">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h2 className="text-base font-semibold" style={{ fontSize: '30px' }}>
// // //           Trending This Week
// // //         </h2>
// // //         <nav className="flex space-x-6 text-xs font-normal" style={{ fontSize: '14px' }}>
// // //           {tabs.map((tab) => (
// // //             <button
// // //               key={tab}
// // //               onClick={() => setActiveTab(tab)}
// // //               className={`pb-1 ${
// // //                 activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-black'
// // //               }`}
// // //             >
// // //               {tab}
// // //             </button>
// // //           ))}
// // //         </nav>
// // //       </div>
// // //       <div className="flex justify-center items-center space-x-6 relative">
// // //         <button
// // //           aria-label="Previous"
// // //           onClick={prevSlide}
// // //           className="text-gray-400 hover:text-gray-600 z-10 absolute left-0"
// // //           style={{ top: '50%', transform: 'translateY(-50%)' }}
// // //         >
// // //           <FontAwesomeIcon icon={faChevronLeft} size="2x" />
// // //         </button>
// // //         <div className="w-full overflow-hidden" style={{ maxWidth: '1150px' }}>
// // //           <div
// // //             ref={sliderRef}
// // //             className="flex transition-transform duration-500 ease-in-out"
// // //             style={{ transform: `translateX(-${slideIndex * 25}%)`, height:'450px'}}
// // //           >
// // //             {productItems.concat(productItems).map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="min-w-[25%] px-3 text-center bg-white rounded-md shadow-md p-4 mx-1 relative"
// // //                 onMouseEnter={() => setHoveredProduct(item.id)} // Set hovered product
// // //                 onMouseLeave={() => setHoveredProduct(null)} // Clear hovered product
// // //               >
// // //                 <img
// // //                   alt={item.name}
// // //                   className="w-full h-80 object-cover rounded-md"
// // //                   src={item.image}
// // //                 />
// // //                 {hoveredProduct === item.id && ( // Conditionally render icons
// // //                   <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
// // //                     <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
// // //                       <FontAwesomeIcon icon={faShoppingCart} />
// // //                     </button>
// // //                     <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
// // //                       <FontAwesomeIcon icon={faHeart} />
// // //                     </button>
// // //                     <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
// // //                       <FontAwesomeIcon icon={faSearch} />
// // //                     </button>
// // //                   </div>
// // //                 )}                
// // //                 <span className={`mt-4 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
// // //                   {item.name}
// // //                 </span>
// // //                 <span className="mt-1 block text-[16px]">
// // //                   <span className="text-black font-semibold">{item.price}</span>{' '}
// // //                   <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //         <button
// // //           aria-label="Next"
// // //           onClick={nextSlide}
// // //           className="text-gray-400 hover:text-gray-600 z-10 absolute -right-4"
// // //           style={{ top: '50%', transform: 'translateY(-50%)' }}
// // //         >
// // //           <FontAwesomeIcon icon={faChevronRight} size="2x" />
// // //         </button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TrendingSection;


// // // src/components/TrendingSection.jsx
// // import React, { useState, useEffect, useRef } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
// // import { useShop } from '../context/ShopContext';
// // import ProductModal from './ProductModal';

// // const tabs = ['Men', 'Women', 'Baby', 'Fashion'];

// // // const productItems = [
// // //   {
// // //     id: 1,
// // //     image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
// // //     name: 'White Top',
// // //     price: '$40.00',
// // //     originalPrice: '$80.00',
// // //     category: 'Women'
// // //   },
// // //   {
// // //     id: 2,
// // //     image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
// // //     name: 'Cashmere Tank + Bag',
// // //     price: '$30.00',
// // //     originalPrice: '$38.00',
// // //     category: 'Men'
// // //   },
// // //   {
// // //     id: 3,
// // //     image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
// // //     name: 'White Tank Top',
// // //     price: '$93.00',
// // //     originalPrice: '$110.00',
// // //     category: 'Women'
// // //   },
// // //   {
// // //     id: 4,
// // //     image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
// // //     name: 'Cotton T-Shirt Red',
// // //     price: '$25.00',
// // //     originalPrice: '$35.00',
// // //     category: 'Women'
// // //   },
// // // ];
// // const productItems = [
// //   {
// //     id: 1,
// //     image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
// //     name: 'White Top',
// //     price: '$40.00',
// //     originalPrice: '$80.00',
// //     category: 'Women'
// //   },
// //   {
// //     id: 2,
// //     image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
// //     name: 'Cashmere Tank + Bag',
// //     price: '$30.00',
// //     originalPrice: '$38.00',
// //     category: 'Women'
// //   },
// //   {
// //     id: 3,
// //     image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
// //     name: 'White Tank Top',
// //     price: '$93.00',
// //     originalPrice: '$110.00',
// //     category: 'Women'
// //   },
// //   {
// //     id: 4,
// //     image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
// //     name: 'Cotton T-Shirt Red',
// //     price: '$25.00',
// //     originalPrice: '$35.00',
// //     category: 'Men'
// //   },
// //   {
// //     id: 5,
// //     image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Men\'s Denim Jacket',
// //     price: '$150.00',
// //     originalPrice: '$180.00',
// //     category: 'Men'
// //   },
// //   {
// //     id: 6,
// //     image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Women\'s Summer Dress',
// //     price: '$85.00',
// //     originalPrice: '$100.00',
// //     category: 'Women'
// //   },
// //   {
// //     id: 7,
// //     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Baby Romper (Unisex)',
// //     price: '$30.00',
// //     originalPrice: '$40.00',
// //     category: 'Baby'
// //   },
// //   {
// //     id: 8,
// //     image: 'https://images.unsplash.com/photo-1618354691318-b4f1a4d94ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Classic Polo Shirt',
// //     price: '$55.00',
// //     originalPrice: '$70.00',
// //     category: 'Men'
// //   },
// //   {
// //     id: 9,
// //     image: 'https://images.unsplash.com/photo-1593032457869-66308fd05dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Men\'s Hoodie',
// //     price: '$65.00',
// //     originalPrice: '$85.00',
// //     category: 'Men'
// //   },
// //   {
// //     id: 10,
// //     image: 'https://images.unsplash.com/photo-1585386959984-a4155228d57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Slim Fit Jeans',
// //     price: '$90.00',
// //     originalPrice: '$120.00',
// //     category: 'Men'
// //   },
// //   {
// //     id: 11,
// //     image: 'https://images.unsplash.com/photo-1579613832125-4e40192c5a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Formal Blazer',
// //     price: '$120.00',
// //     originalPrice: '$160.00',
// //     category: 'Men'
// //   },
// //   {
// //     id: 12,
// //     image: 'https://images.unsplash.com/photo-1598951841383-d395c523c78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Baby Hoodie Set',
// //     price: '$45.00',
// //     originalPrice: '$60.00',
// //     category: 'Baby'
// //   },
// //   {
// //     id: 13,
// //     image: 'https://images.unsplash.com/photo-1601979031925-994e5a9a3249?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Colorful Baby Bodysuit',
// //     price: '$28.00',
// //     originalPrice: '$35.00',
// //     category: 'Baby'
// //   },
// //   {
// //     id: 14,
// //     image: 'https://images.unsplash.com/photo-1556012018-6e8c2e5c94c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Baby Pajama Set',
// //     price: '$38.00',
// //     originalPrice: '$50.00',
// //     category: 'Baby'
// //   },
// //   {
// //     id: 15,
// //     image: 'https://images.unsplash.com/photo-1593105244154-9dbff9cba93e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
// //     name: 'Baby Beanie & Mittens',
// //     price: '$22.00',
// //     originalPrice: '$30.00',
// //     category: 'Baby'
// //   },

// // ];

// // const TrendingSection = () => {
// //   const [activeTab, setActiveTab] = useState('Men');
// //   const [slideIndex, setSlideIndex] = useState(0);
// //   const [transitioning, setTransitioning] = useState(false);
// //   const [hoveredProduct, setHoveredProduct] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const { addToCart, addToWishlist } = useShop();
// //   const sliderRef = useRef(null);

// //   const filteredProducts = productItems.filter(item => 
// //     activeTab === 'Fashion' ? true : item.category === activeTab
// //   );

// //   const totalItems = filteredProducts.length;

// //   const nextSlide = () => {
// //     if (transitioning || totalItems <= 1) return;
// //     setTransitioning(true);
// //     setTimeout(() => {
// //       setSlideIndex((prev) => (prev + 1) % totalItems);
// //       setTransitioning(false);
// //     }, 500);
// //   };

// //   const prevSlide = () => {
// //     if (transitioning || totalItems <= 1) return;
// //     setTransitioning(true);
// //     setTimeout(() => {
// //       setSlideIndex((prev) => (prev - 1 + totalItems) % totalItems);
// //       setTransitioning(false);
// //     }, 500);
// //   };

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (totalItems > 1) nextSlide();
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, [activeTab, totalItems]);

// //   return (
// //     <section className="max-w-[1300px] mx-auto px-4 py-20 font-sans overflow-hidden">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-base font-semibold" style={{ fontSize: '30px' }}>
// //           Trending This Week
// //         </h2>
// //         <nav className="flex space-x-6 text-xs font-normal" style={{ fontSize: '14px' }}>
// //           {tabs.map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => {
// //                 setActiveTab(tab);
// //                 setSlideIndex(0);
// //               }}
// //               className={`pb-1 ${
// //                 activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-black'
// //               }`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </nav>
// //       </div>
      
// //       {filteredProducts.length === 0 ? (
// //         <div className="text-center py-12">
// //           <p>No products found in this category</p>
// //         </div>
// //       ) : (
// //         <div className="flex justify-center items-center space-x-6 relative">
// //           <button
// //             aria-label="Previous"
// //             onClick={prevSlide}
// //             className="text-gray-400 hover:text-gray-600 z-10 absolute left-0"
// //             style={{ top: '50%', transform: 'translateY(-50%)' }}
// //             disabled={filteredProducts.length <= 1}
// //           >
// //             <FontAwesomeIcon icon={faChevronLeft} size="2x" />
// //           </button>
          
// //           <div className="w-full overflow-hidden" style={{ maxWidth: '1150px' }}>
// //             <div
// //               ref={sliderRef}
// //               className="flex transition-transform duration-500 ease-in-out"
// //               style={{ 
// //                 transform: `translateX(-${slideIndex * (100 / Math.min(4, filteredProducts.length))}%)`,
// //                 height: '450px'
// //               }}
// //             >
// //               {filteredProducts.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="min-w-[25%] px-3 text-center bg-white rounded-md shadow-md p-4 mx-1 relative"
// //                   onMouseEnter={() => setHoveredProduct(item.id)}
// //                   onMouseLeave={() => setHoveredProduct(null)}
// //                 >
// //                   <img
// //                     alt={item.name}
// //                     className="w-full h-80 object-cover rounded-md cursor-pointer"
// //                     src={item.image}
// //                     onClick={() => setSelectedImage(item.image)}
// //                   />
// //                   {hoveredProduct === item.id && (
// //                     <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
// //                       <button 
// //                         className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           addToCart(item);
// //                         }}
// //                       >
// //                         <FontAwesomeIcon icon={faShoppingCart} />
// //                       </button>
// //                       <button 
// //                         className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           addToWishlist(item);
// //                         }}
// //                       >
// //                         <FontAwesomeIcon icon={faHeart} />
// //                       </button>
// //                       <button 
// //                         className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           setSelectedImage(item.image);
// //                         }}
// //                       >
// //                         <FontAwesomeIcon icon={faSearch} />
// //                       </button>
// //                     </div>
// //                   )}                
// //                   <span className={`mt-4 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
// //                     {item.name}
// //                   </span>
// //                   <span className="mt-1 block text-[16px]">
// //                     <span className="text-black font-semibold">{item.price}</span>{' '}
// //                     <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
          
// //           <button
// //             aria-label="Next"
// //             onClick={nextSlide}
// //             className="text-gray-400 hover:text-gray-600 z-10 absolute -right-4"
// //             style={{ top: '50%', transform: 'translateY(-50%)' }}
// //             disabled={filteredProducts.length <= 1}
// //           >
// //             <FontAwesomeIcon icon={faChevronRight} size="2x" />
// //           </button>
// //         </div>
// //       )}
      
// //       {selectedImage && (
// //         <ProductModal 
// //           image={selectedImage} 
// //           onClose={() => setSelectedImage(null)} 
// //         />
// //       )}
// //     </section>
// //   );
// // };

// // export default TrendingSection;

// // src/components/TrendingSection.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useShop } from '../context/ShopContext';
// import ProductModal from './ProductModal';

// const tabs = ['Men', 'Women', 'Baby', 'Fashion'];

// const productItems = [
//   {
//     id: 1,
//     image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
//     name: 'White Top',
//     price: '$40.00',
//     originalPrice: '$80.00',
//     category: 'Women'
//   },
//   {
//     id: 2,
//     image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$30.00',
//     originalPrice: '$38.00',
//     category: 'Women' // Changed to Women to have enough items for sliding demo
//   },
//   {
//     id: 3,
//     image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
//     name: 'White Tank Top',
//     price: '$93.00',
//     originalPrice: '$110.00',
//     category: 'Women'
//   },
//   {
//     id: 4,
//     image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
//     name: 'Cotton T-Shirt Red',
//     price: '$25.00',
//     originalPrice: '$35.00',
//     category: 'Men'
//   },
//   {
//     id: 5,
//     image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Men\'s Denim Jacket',
//     price: '$150.00',
//     originalPrice: '$180.00',
//     category: 'Men'
//   },
//   {
//     id: 6,
//     image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Women\'s Summer Dress',
//     price: '$85.00',
//     originalPrice: '$100.00',
//     category: 'Women'
//   },
//   {
//     id: 7,
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Baby Romper (Unisex)',
//     price: '$30.00',
//     originalPrice: '$40.00',
//     category: 'Baby'
//   },
//   {
//     id: 8,
//     image: 'https://images.unsplash.com/photo-1618354691318-b4f1a4d94ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Classic Polo Shirt',
//     price: '$55.00',
//     originalPrice: '$70.00',
//     category: 'Men'
//   },
//   {
//     id: 9,
//     image: 'https://images.unsplash.com/photo-1593032457869-66308fd05dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Men\'s Hoodie',
//     price: '$65.00',
//     originalPrice: '$85.00',
//     category: 'Men'
//   },
//   {
//     id: 10,
//     image: 'https://images.unsplash.com/photo-1585386959984-a4155228d57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Slim Fit Jeans',
//     price: '$90.00',
//     originalPrice: '$120.00',
//     category: 'Men'
//   },
//   {
//     id: 11,
//     image: 'https://images.unsplash.com/photo-1579613832125-4e40192c5a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Formal Blazer',
//     price: '$120.00',
//     originalPrice: '$160.00',
//     category: 'Men'
//   },
//   {
//     id: 12,
//     image: 'https://images.unsplash.com/photo-1598951841383-d395c523c78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Baby Hoodie Set',
//     price: '$45.00',
//     originalPrice: '$60.00',
//     category: 'Baby'
//   },
//   {
//     id: 13,
//     image: 'https://images.unsplash.com/photo-1601979031925-994e5a9a3249?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Colorful Baby Bodysuit',
//     price: '$28.00',
//     originalPrice: '$35.00',
//     category: 'Baby'
//   },
//   {
//     id: 14,
//     image: 'https://images.unsplash.com/photo-1556012018-6e8c2e5c94c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Baby Pajama Set',
//     price: '$38.00',
//     originalPrice: '$50.00',
//     category: 'Baby'
//   },
//   {
//     id: 15,
//     image: 'https://images.unsplash.com/photo-1593105244154-9dbff9cba93e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Baby Beanie & Mittens',
//     price: '$22.00',
//     originalPrice: '$30.00',
//     category: 'Baby'
//   },
// ];

// const TrendingSection = () => {
//   const [activeTab, setActiveTab] = useState('Men');
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false); // Renamed for clarity
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { addToCart, addToWishlist } = useShop();
//   const sliderRef = useRef(null);

//   // Number of items to display at once in the carousel view
//   const ITEMS_VISIBLE = 4;

//   const filteredProducts = productItems.filter(item =>
//     activeTab === 'Fashion' ? true : item.category === activeTab
//   );

//   // Create the extended array for pseudo-looping
//   // We'll duplicate the original items to create a longer list to slide through
//   // This helps with the "infinite" feel without complex cloning logic.
//   const extendedProducts = [...filteredProducts, ...filteredProducts];

//   // The "real" number of items, without the duplicated section
//   const totalOriginalItems = filteredProducts.length;
//   // The total number of items in the extended list
//   const totalExtendedItems = extendedProducts.length;

//   // This effect handles the "snap back" for pseudo-looping
//   useEffect(() => {
//     if (isTransitioning) return; // Don't snap during a transition

//     // If we've slid past the original items into the duplicated set
//     if (slideIndex >= totalOriginalItems) {
//       // Temporarily remove transition to snap back
//       sliderRef.current.style.transition = 'none';
//       setSlideIndex(slideIndex % totalOriginalItems); // Jump back to the corresponding original item
//       // Re-enable transition after a very small delay to allow the DOM to update
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           if (sliderRef.current) {
//             sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
//           }
//         });
//       });
//     }
//   }, [slideIndex, totalOriginalItems, isTransitioning]);

//   const nextSlide = () => {
//     // Only allow sliding if there are more items than we can display at once
//     if (totalOriginalItems <= ITEMS_VISIBLE) return;

//     if (isTransitioning) return;
//     setIsTransitioning(true);

//     // If we are at the very end of the *extended* list (before the snap back)
//     // We increment to trigger the snap back logic in the useEffect
//     if (slideIndex >= totalOriginalItems) {
//         setSlideIndex(prev => prev + 1); // Move one more to hit the snap condition
//     } else {
//         setSlideIndex(prev => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     // Only allow sliding if there are more items than we can display at once
//     if (totalOriginalItems <= ITEMS_VISIBLE) return;

//     if (isTransitioning) return;
//     setIsTransitioning(true);

//     // If we are at the very beginning of the *extended* list (first set of original items)
//     if (slideIndex === 0) {
//       // Temporarily disable transition to jump to the duplicated set's start
//       sliderRef.current.style.transition = 'none';
//       setSlideIndex(totalOriginalItems); // Jump to the beginning of the duplicated set
//       // After the jump, allow the transition for the actual slide
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           if (sliderRef.current) {
//             sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
//             setSlideIndex(prev => prev - 1); // Then slide back one from there
//           }
//         });
//       });
//     } else {
//       setSlideIndex(prev => prev - 1);
//     }
//   };

//   useEffect(() => {
//     // Reset slide index when tab changes to ensure we start from the beginning of the new category
//     setSlideIndex(0);
//     setIsTransitioning(false); // Ensure no transition is stuck
//   }, [activeTab]);

//   useEffect(() => {
//     // Only set up automatic sliding if there are more items than can be displayed
//     if (totalOriginalItems <= ITEMS_VISIBLE) {
//       return;
//     }
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [nextSlide, totalOriginalItems]); // Depend on nextSlide and totalOriginalItems

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

//       {filteredProducts.length === 0 ? (
//         <div className="text-center py-12">
//           <p>No products found in this category</p>
//         </div>
//       ) : (
//         <div className="flex justify-center items-center space-x-6 relative">
//           <button
//             aria-label="Previous"
//             onClick={prevSlide}
//             className="text-gray-400 hover:text-gray-600 z-10 absolute left-0"
//             style={{ top: '50%', transform: 'translateY(-50%)' }}
//             // Disable buttons if not enough items to slide
//             disabled={totalOriginalItems <= ITEMS_VISIBLE}
//           >
//             <FontAwesomeIcon icon={faChevronLeft} size="2x" />
//           </button>

//           <div className="w-full overflow-hidden" style={{ maxWidth: '1150px' }}>
//             <div
//               ref={sliderRef}
//               className="flex ease-in-out" // Remove transition here, controlled by JS
//               style={{
//                 transform: `translateX(-${slideIndex * (100 / ITEMS_VISIBLE)}%)`,
//                 height: '450px',
//                 transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', // Control transition via state
//               }}
//               onTransitionEnd={() => setIsTransitioning(false)} // Set transitioning to false after animation
//             >
//               {extendedProducts.map((item, index) => (
//                 <div
//                   key={`${item.id}-${index}`} // Use a unique key for duplicated items
//                   // Ensure items are fixed width (25%) and don't shrink/grow
//                   className="flex-shrink-0 flex-grow-0 w-[calc(25% - 12px)] px-3 text-center bg-white rounded-md shadow-md p-4 mx-1 relative"
//                   onMouseEnter={() => setHoveredProduct(item.id)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   <img
//                     alt={item.name}
//                     className="w-full h-80 object-cover rounded-md cursor-pointer"
//                     src={item.image}
//                     onClick={() => setSelectedImage(item.image)}
//                   />
//                   {hoveredProduct === item.id && (
//                     <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
//                       <button
//                         className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           addToCart(item);
//                         }}
//                       >
//                         <FontAwesomeIcon icon={faShoppingCart} />
//                       </button>
//                       <button
//                         className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           addToWishlist(item);
//                         }}
//                       >
//                         <FontAwesomeIcon icon={faHeart} />
//                       </button>
//                       <button
//                         className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setSelectedImage(item.image);
//                         }}
//                       >
//                         <FontAwesomeIcon icon={faSearch} />
//                       </button>
//                     </div>
//                   )}
//                   <span className={`mt-4 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
//                     {item.name}
//                   </span>
//                   <span className="mt-1 block text-[16px]">
//                     <span className="text-black font-semibold">{item.price}</span>{' '}
//                     <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             aria-label="Next"
//             onClick={nextSlide}
//             className="text-gray-400 hover:text-gray-600 z-10 absolute -right-4"
//             style={{ top: '50%', transform: 'translateY(-50%)' }}
//             // Disable buttons if not enough items to slide
//             disabled={totalOriginalItems <= ITEMS_VISIBLE}
//           >
//             <FontAwesomeIcon icon={faChevronRight} size="2x" />
//           </button>
//         </div>
//       )}

//       {selectedImage && (
//         <ProductModal
//           image={selectedImage}
//           onClose={() => setSelectedImage(null)}
//         />
//       )}
//     </section>
//   );
// };

// export default TrendingSection;

// src/components/TrendingSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useShop } from '../context/ShopContext';
import ProductModal from './ProductModal';

const tabs = ['Men', 'Women', 'Baby', 'Fashion'];

const productItems = [
  {
    id: 't-1',
    image: 'https://storage.googleapis.com/a1aa/image/ff1d901b-b71d-469b-28d5-d3292986b872.jpg',
    name: 'White Top',
    price: '$40.00',
    originalPrice: '$80.00',
    category: 'Women'
  },
  {
    id: 't-2',
    image: 'https://storage.googleapis.com/a1aa/image/5ef5b2b8-4d93-4cd8-eeb7-84fa1e681da0.jpg',
    name: 'Cashmere Tank + Bag',
    price: '$30.00',
    originalPrice: '$38.00',
    category: 'Women' // Changed to Women to have enough items for sliding demo
  },
  {
    id: 't-3',
    image: 'https://storage.googleapis.com/a1aa/image/85cd5148-23c9-4e1c-3afa-a297339f8d24.jpg',
    name: 'White Tank Top',
    price: '$93.00',
    originalPrice: '$110.00',
    category: 'Women'
  },
  {
    id: 't-4',
    image: 'https://storage.googleapis.com/a1aa/image/017f7a1c-175d-4057-b82c-e475c4d807cf.jpg',
    name: 'Cotton T-Shirt Red',
    price: '$25.00',
    originalPrice: '$35.00',
    category: 'Men'
  },
  {
    id: 't-5',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Denim Jacket',
    price: '$150.00',
    originalPrice: '$180.00',
    category: 'Men'
  },
  {
    id: 't-6',
    image: 'https://images.unsplash.com/photo-1662219708541-3a74d96330eb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Women\'s Summer Dress',
    price: '$85.00',
    originalPrice: '$100.00',
    category: 'Women'
  },
  {
    id: 't-7',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Romper (Unisex)',
    price: '$30.00',
    originalPrice: '$40.00',
    category: 'Baby'
  },
  {
    id: 't-8',
    image: 'https://images.unsplash.com/photo-1618354691318-b4f1a4d94ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Classic Polo Shirt',
    price: '$55.00',
    originalPrice: '$70.00',
    category: 'Men'
  },
  {
    id: 't-9',
    image: 'https://images.unsplash.com/photo-1593032457869-66308fd05dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Hoodie',
    price: '$65.00',
    originalPrice: '$85.00',
    category: 'Men'
  },
  {
    id: 't-10',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155228d57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Slim Fit Jeans',
    price: '$90.00',
    originalPrice: '$120.00',
    category: 'Men'
  },
  {
    id: 't-11',
    image: 'https://images.unsplash.com/photo-1579613832125-4e40192c5a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Formal Blazer',
    price: '$120.00',
    originalPrice: '$160.00',
    category: 'Men'
  },
  {
    id: 't-12',
    image: 'https://images.unsplash.com/photo-1598951841383-d395c523c78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Hoodie Set',
    price: '$45.00',
    originalPrice: '$60.00',
    category: 'Baby'
  },
  {
    id: 't-13',
    image: 'https://images.unsplash.com/photo-1601979031925-994e5a9a3249?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Colorful Baby Bodysuit',
    price: '$28.00',
    originalPrice: '$35.00',
    category: 'Baby'
  },
  {
    id: 't-14',
    image: 'https://images.unsplash.com/photo-1556012018-6e8c2e5c94c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Pajama Set',
    price: '$38.00',
    originalPrice: '$50.00',
    category: 'Baby'
  },
  {
    id: 't-15',
    image: 'https://images.unsplash.com/photo-1593105244154-9dbff9cba93e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Beanie & Mittens',
    price: '$22.00',
    originalPrice: '$30.00',
    category: 'Baby'
  },
  {
    id: 't-6',
    image: 'https://images.unsplash.com/photo-1622335786323-7a43419efea7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Floral Midi Dress',
    price: '$72.00',
    originalPrice: '$95.00',
    category: 'Women'
  },
  {
    id: 't-17',
    image: 'https://images.unsplash.com/photo-1593032458053-cfc729b8e217?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Boho Style Blouse',
    price: '$48.00',
    originalPrice: '$65.00',
    category: 'Women'
  }

];

const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState('Men');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart, addToWishlist } = useShop();
  const sliderRef = useRef(null);

  const ITEMS_VISIBLE = 4; // Number of items to display at once in the carousel view

  const filteredProducts = productItems.filter(item =>
    activeTab === 'Fashion' ? true : item.category === activeTab
  );

  const extendedProducts = [...filteredProducts, ...filteredProducts];

  const totalOriginalItems = filteredProducts.length;
  const totalExtendedItems = extendedProducts.length; // This is totalOriginalItems * 2

  // This effect handles the "snap back" for pseudo-looping
  useEffect(() => {
    if (isTransitioning) return; // Don't snap during a transition

    // If we've slid past the original items into the duplicated set
    if (slideIndex >= totalOriginalItems) {
      // Temporarily remove transition to snap back
      if (sliderRef.current) { // Check if ref is available
        sliderRef.current.style.transition = 'none';
      }
      setSlideIndex(slideIndex % totalOriginalItems); // Jump back to the corresponding original item
      // Re-enable transition after a very small delay to allow the DOM to update
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { // Double rAF for maximum reliability
          if (sliderRef.current) { // Check if ref is available
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
          }
        });
      });
    }
  }, [slideIndex, totalOriginalItems, isTransitioning]);

  const nextSlide = () => {
    // Only allow sliding if there are more items than we can display at once
    if (totalOriginalItems <= ITEMS_VISIBLE) return;

    if (isTransitioning) return;
    setIsTransitioning(true);

    // Increment slideIndex. The useEffect will handle the snap-back when it goes past totalOriginalItems
    setSlideIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    // Only allow sliding if there are more items than we can display at once
    if (totalOriginalItems <= ITEMS_VISIBLE) return;

    if (isTransitioning) return;
    setIsTransitioning(true);

    // If we are at the very beginning of the *original* list (index 0)
    if (slideIndex === 0) {
      // Temporarily disable transition to jump to the duplicated set's start
      if (sliderRef.current) { // Check if ref is available
        sliderRef.current.style.transition = 'none';
      }
      setSlideIndex(totalOriginalItems); // Jump to the start of the duplicated set (e.g., from index 0 to index 4)
      // After the jump, re-enable transition for the actual slide backwards
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (sliderRef.current) { // Check if ref is available
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            setSlideIndex(prev => prev - 1); // Then slide back one from there (e.g., from index 4 to index 3)
          }
        });
      });
    } else {
      setSlideIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    // Reset slide index when tab changes to ensure we start from the beginning of the new category
    setSlideIndex(0);
    setIsTransitioning(false); // Ensure no transition is stuck
  }, [activeTab]);

  useEffect(() => {
    // Only set up automatic sliding if there are more items than can be displayed
    if (totalOriginalItems <= ITEMS_VISIBLE) {
      return;
    }
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, totalOriginalItems]);

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

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p>No products found in this category</p>
        </div>
      ) : (
        <div className="flex justify-center items-center space-x-6 relative">
          <button
            aria-label="Previous"
            onClick={prevSlide}
            className="text-gray-400 hover:text-gray-600 z-10 absolute left-0"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            disabled={totalOriginalItems <= ITEMS_VISIBLE}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>

          <div className="w-full overflow-hidden" style={{ maxWidth: '1150px' }}>
            <div
              ref={sliderRef}
              // Add gap-x-4 here for consistent spacing
              className="flex ease-in-out gap-x-4"
              style={{
                transform: `translateX(-${slideIndex * (100 / ITEMS_VISIBLE)}%)`,
                height: '450px',
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              }}
              onTransitionEnd={() => setIsTransitioning(false)}
            >
              {extendedProducts.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  // Use w-1/4 for explicit 25% width, flex-shrink-0 to prevent shrinking
                  // Removed px-3 and mx-1 as gap-x handles spacing
                  className="flex-shrink-0 w-1/4 text-center bg-white rounded-md shadow-md p-4 relative"
                  onMouseEnter={() => setHoveredProduct(item.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <img
                    alt={item.name}
                    className="w-full h-80 object-cover rounded-md cursor-pointer"
                    src={item.image}
                    onClick={() => setSelectedImage(item.image)}
                  />
                  {hoveredProduct === item.id && (
                    <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
                      <button
                        className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                      <button
                        className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToWishlist(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button
                        className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(item.image);
                        }}
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  )}
                  <span className={`mt-4 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
                    {item.name}
                  </span>
                  <span className="mt-1 block text-[16px]">
                    <span className="text-black font-semibold">{item.price}</span>{' '}
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
            disabled={totalOriginalItems <= ITEMS_VISIBLE}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      )}

      {selectedImage && (
        <ProductModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default TrendingSection;