// // src/components/YouMayLikeSection.jsx
// import React, { useEffect, useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
// import { useShop } from '../context/ShopContext';
// import ProductModal from './ProductModal';

// const productItems = [
//   {
//     id: 'y-1',
//     image: 'https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg',
//     name: 'Face Cream',
//     price: '$2.00',
//     originalPrice: '$5.00',
//     category: 'Beauty'
//   },
//   {
//     id: 'y-2',
//     image: 'https://storage.googleapis.com/a1aa/image/c4591354-b33d-453e-4024-aa08b1782d88.jpg',
//     name: 'Office Suit',
//     price: '$98.00',
//     originalPrice: '$120.00',
//     category: 'Men'
//   },
//   {
//     id: 'y-3',
//     image: 'https://storage.googleapis.com/a1aa/image/ab896565-c237-4399-8c21-fcbaa8b04244.jpg',
//     name: 'Face Cream',
//     price: '$5.00',
//     originalPrice: '$12.00',
//     category: 'Beauty'
//   },
//   {
//     id: 'y-4',
//     image: 'https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg',
//     name: 'Suns Cream',
//     price: '$10.00',
//     originalPrice: '$15.00',
//     category: 'Beauty'
//   },
//   {
//     id: 'y-5',
//     image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Men\'s Summer T-Shirt',
//     price: '$75.00',
//     originalPrice: '$90.00',
//     category: 'Men'
//   },
//   {
//     id: 'y-6',
//     image: 'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     name: 'Women\'s Summer Dress',
//     price: '$85.00',
//     originalPrice: '$100.00',
//     category: 'Women'
//   },
//   {
//     id: 'y-7',
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     name: 'Baby Romper (Unisex)',
//     price: '$30.00',
//     originalPrice: '$40.00',
//     category: 'Baby'
//   }
// ];

// const YouMayLikeSection = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { addToCart, addToWishlist } = useShop();
//   const totalItems = productItems.length;

//   const nextSlide = () => {
//     if (transitioning || totalItems <= 1) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       setSlideIndex((prev) => (prev + 1) % totalItems);
//       setTransitioning(false);
//     }, 500);
//   };

//   const prevSlide = () => {
//     if (transitioning || totalItems <= 1) return;
//     setTransitioning(true);
//     setTimeout(() => {
//       setSlideIndex((prev) => (prev - 1 + totalItems) % totalItems);
//       setTransitioning(false);
//     }, 500);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (totalItems > 1) nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [totalItems]);

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4 font-sans overflow-hidden mb-20 mt-20">
//       <h2
//         className="text-center text-sm font-semibold text-gray-900 mb-10"
//         style={{ fontSize: '32px' }}
//       >
//         You May Like
//       </h2>
      
//       <div className="relative flex items-center justify-center">
//         <button
//           aria-label="Previous"
//           onClick={prevSlide}
//           className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-600"
//           disabled={productItems.length <= 1}
//         >
//           <FontAwesomeIcon icon={faChevronLeft} size="lg" />
//         </button>

//         <div className="w-full overflow-hidden max-w-[1150px]">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${slideIndex * (100 / Math.min(4, productItems.length))}%)` }}
//           >
//             {productItems.concat(productItems).map((item, index) => (
//               <div
//                 key={index}
//                 className="min-w-[25%] text-center text-xs text-gray-700 relative"
//                 onMouseEnter={() => setHoveredProduct(item.id)}
//                 onMouseLeave={() => setHoveredProduct(null)}
//               >
//                 <img
//                   alt={item.name}
//                   className="w-[400px] h-[425px] object-contain mx-auto rounded-md cursor-pointer"
//                   src={item.image}
//                   onClick={() => setSelectedImage(item.image)}
//                 />
//                 {hoveredProduct === item.id && (
//                   <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
//                     <button 
//                       className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         addToCart(item);
//                       }}
//                     >
//                       <FontAwesomeIcon icon={faShoppingCart} />
//                     </button>
//                     <button 
//                       className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         addToWishlist(item);
//                       }}
//                     >
//                       <FontAwesomeIcon icon={faHeart} />
//                     </button>
//                     <button 
//                       className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedImage(item.image);
//                       }}
//                     >
//                       <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
//                     </button>
//                   </div>
//                 )}
//                 <span className={`-mt-3 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
//                   {item.name}
//                 </span>
//                 <span className="mt-1 block text-[16px]">
//                   <span className="text-black font-semibold">{item.price}</span>{' '}
//                   <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           aria-label="Next"
//           onClick={nextSlide}
//           className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-600"
//           disabled={productItems.length <= 1}
//         >
//           <FontAwesomeIcon icon={faChevronRight} size="lg" />
//         </button>
//       </div>

//       {selectedImage && (
//         <ProductModal 
//           image={selectedImage} 
//           onClose={() => setSelectedImage(null)} 
//         />
//       )}
//     </div>
//   );
// };

// export default YouMayLikeSection;



// src/components/YouMayLikeSection.jsx
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { useShop } from '../context/ShopContext';
import ProductModal from './ProductModal';

const productItems = [
  {
    id: 'y-1',
    image: 'https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg',
    name: 'Face Cream',
    price: '$2.00',
    originalPrice: '$5.00',
    category: 'Beauty'
  },
  {
    id: 'y-2',
    image: 'https://storage.googleapis.com/a1aa/image/c4591354-b33d-453e-4024-aa08b1782d88.jpg',
    name: 'Office Suit',
    price: '$98.00',
    originalPrice: '$120.00',
    category: 'Men'
  },
  {
    id: 'y-3',
    image: 'https://storage.googleapis.com/a1aa/image/ab896565-c237-4399-8c21-fcbaa8b04244.jpg',
    name: 'Face Cream',
    price: '$5.00',
    originalPrice: '$12.00',
    category: 'Beauty'
  },
  {
    id: 'y-4',
    image: 'https://storage.googleapis.com/a1aa/image/0607c996-6b2e-4771-b048-623aa4088ce1.jpg',
    name: 'Suns Cream',
    price: '$10.00',
    originalPrice: '$15.00',
    category: 'Beauty'
  },
  {
    id: 'y-5',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Summer T-Shirt',
    price: '$75.00',
    originalPrice: '$90.00',
    category: 'Men'
  },
  {
    id: 'y-6',
    image: 'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Women\'s Summer Dress',
    price: '$85.00',
    originalPrice: '$100.00',
    category: 'Women'
  },
  {
    id: 'y-7',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Romper (Unisex)',
    price: '$30.00',
    originalPrice: '$40.00',
    category: 'Baby'
  }
];

const YouMayLikeSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart, addToWishlist, isInWishlist,removeFromWishlist } = useShop();
  const totalItems = productItems.length;

  const nextSlide = () => {
    if (transitioning || totalItems <= 1) return;
    setTransitioning(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % totalItems);
      setTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (transitioning || totalItems <= 1) return;
    setTransitioning(true);
    setTimeout(() => {
      setSlideIndex((prev) => (prev - 1 + totalItems) % totalItems);
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (totalItems > 1) nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 font-sans overflow-hidden mb-20 mt-20">
      <h2
        className="text-center text-sm font-semibold text-gray-900 mb-10"
        style={{ fontSize: '32px' }}
      >
        You May Like
      </h2>
      
      <div className="relative flex items-center justify-center">
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 text-gray-400 hover:text-gray-600"
          disabled={productItems.length <= 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>

        <div className="w-full overflow-hidden max-w-[1150px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * (100 / Math.min(4, productItems.length))}%)` }}
          >
            {productItems.concat(productItems).map((item, index) => (
              <div
                key={index}
                className="min-w-[25%] text-center text-xs text-gray-700 relative"
                onMouseEnter={() => setHoveredProduct(item.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  alt={item.name}
                  className="w-[400px] h-[425px] object-contain mx-auto rounded-md cursor-pointer"
                  src={item.image}
                  onClick={() => setSelectedImage(item.image)}
                />
                {hoveredProduct === item.id && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 mb-8 rounded-md transition-opacity duration-300">
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
                      className={`p-2 rounded-full border border-gray-300 ${isInWishlist(item.id) ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'} transition-colors duration-300 text-[18px]`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isInWishlist(item.id)) {
                          removeFromWishlist(item.id);
                        } else {
                          addToWishlist(item);
                        }
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
                      <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </button>
                  </div>
                )}
                <span className={`-mt-3 block text-[16px] font-semibold ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
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
          className="absolute right-0 z-10 p-2 text-gray-400 hover:text-gray-600"
          disabled={productItems.length <= 1}
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>

      {selectedImage && (
        <ProductModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default YouMayLikeSection;