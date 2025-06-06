// src/components/TrendingSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { useShop } from '../context/ShopContext';
import ProductModal from './ProductModal';
import { useNavigate } from 'react-router-dom';

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
    image: 'https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg',
    name: 'Fashionable HandBag',
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
    image: 'https://img.freepik.com/free-photo/young-man-red-t-shirt-showing-thumbs-up-looking-serious_176474-84076.jpg',
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
    image: 'https://img.freepik.com/free-photo/romantic-portrait-woman-long-blue-dress-beach-by-sea-windy-day_343596-938.jpg',
    name: 'Women\'s Summer Dress',
    price: '$85.00',
    originalPrice: '$100.00',
    category: 'Women'
  },
  {
    id: 't-7',
    image: 'https://img.freepik.com/free-photo/newborn-baby-girl-sleeping-blue-sheets-home_1139-1647.jpg',
    name: 'Baby Romper',
    price: '$30.00',
    originalPrice: '$40.00',
    category: 'Baby'
  },
  {
    id: 't-8',
    image: 'https://img.freepik.com/free-photo/front-view-man-posing-outdoors_23-2149659069.jpg',
    name: 'Classic Polo Shirt',
    price: '$55.00',
    originalPrice: '$70.00',
    category: 'Men'
  },
  {
    id: 't-9',
    image: 'https://img.freepik.com/free-photo/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue_158538-26580.jpg',
    name: 'Men\'s Hoodie',
    price: '$65.00',
    originalPrice: '$85.00',
    category: 'Men'
  },
  {
    id: 't-10',
    image: 'https://img.freepik.com/free-photo/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall_231208-1086.jpg',
    name: 'Slim Fit Jeans',
    price: '$90.00',
    originalPrice: '$120.00',
    category: 'Men'
  },
  {
    id: 't-11',
    image: 'https://img.freepik.com/free-photo/portrait-confident-handsome-man_171337-16753.jpg',
    name: 'Formal Blazer',
    price: '$120.00',
    originalPrice: '$160.00',
    category: 'Men'
  },
  {
    id: 't-12',
    image: 'https://img.freepik.com/free-photo/happy-surprised-boy-nature_23-2148201493.jpg',
    name: 'Baby Hoodie',
    price: '$45.00',
    originalPrice: '$60.00',
    category: 'Baby'
  },
  {
    id: 't-13',
    image: 'https://img.freepik.com/free-photo/set-cute-dog-wear-with-caps_23-2147828950.jpg',
    name: 'Colorful Baby Bodysuit',
    price: '$28.00',
    originalPrice: '$35.00',
    category: 'Baby'
  },
  {
    id: 't-14',
    image: 'https://img.freepik.com/free-photo/childrens-wear_93675-131362.jpg',
    name: 'Baby Pajama Set',
    price: '$38.00',
    originalPrice: '$50.00',
    category: 'Baby'
  },
  {
    id: 't-15',
    image: 'https://img.freepik.com/free-photo/knitted-baby-clothes-accessories-blue-background_169016-3180.jpg',
    name: 'Baby Beanie & Mittens',
    price: '$22.00',
    originalPrice: '$30.00',
    category: 'Baby'
  },
  {
    id: 't-6',
    image: 'https://img.freepik.com/premium-photo/spectacular-woman-bright-dress-stands-against-background-sakura-dark-haired-woman-beautiful-outfit-smiles-street-while-walking_173815-15979.jpg',
    name: 'Floral Midi Dress',
    price: '$72.00',
    originalPrice: '$95.00',
    category: 'Women'
  },
  {
    id: 't-17',
    image: 'https://img.freepik.com/free-photo/attractive-young-woman-blue-dress-straw-hat-walking-tropical-spa-villa-hotel-vacation-summer-style-outfit-sexy_285396-2476.jpg',
    name: 'Blue Frock Dress',
    price: '$48.00',
    originalPrice: '$65.00',
    category: 'Women'
  }

];


const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState('Fashion');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart} = useShop();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useShop();
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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
    }, 2000);
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
                  className="flex-shrink-0 w-1/4 text-center bg-white rounded-md shadow-md p-4 relative cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(item.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => navigate('/product-details', { state: { product: item } })}
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