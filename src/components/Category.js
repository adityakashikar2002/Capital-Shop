// src/components/Category.jsx
import React, { useState, useEffect, useCallback } from 'react';
import CategorySidebar from './CategorySidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';
import { useShop } from '../context/ShopContext';
import ProductModal from './ProductModal';

const allProductItemsCategory = [
  // Men's Products
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Summer T-Shirt',
    price: '$75.00',
    originalPrice: '$90.00',
    category: 'Men',
    type: 'T-Shirt',
    color: 'Red',
    size: 'M',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Denim Jacket',
    price: '$150.00',
    originalPrice: '$180.00',
    category: 'Men',
    type: 'Jacket',
    color: 'Blue',
    size: 'L',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Casual Shirt',
    price: '$60.00',
    originalPrice: '$75.00',
    category: 'Men',
    type: 'Shirt',
    color: 'White',
    size: 'S',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Slim Fit Jeans',
    price: '$110.00',
    originalPrice: '$130.00',
    category: 'Men',
    type: 'Jeans',
    color: 'Black',
    size: '32',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Men\'s Cargo Shorts',
    price: '$55.00',
    originalPrice: '$65.00',
    category: 'Men',
    type: 'Shorts',
    color: 'Green',
    size: 'M',
  },

  // Women's Products
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Women\'s Summer Dress',
    price: '$85.00',
    originalPrice: '$100.00',
    category: 'Women',
    type: 'Dress',
    color: 'Pink',
    size: 'S',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Women\'s Elegant Blouse',
    price: '$70.00',
    originalPrice: '$85.00',
    category: 'Women',
    type: 'Shirt',
    color: 'White',
    size: 'M',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Women\'s High-Waist Jeans',
    price: '$120.00',
    originalPrice: '$140.00',
    category: 'Women',
    type: 'Jeans',
    color: 'Blue',
    size: '28',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Women\'s Pleated Skirt',
    price: '$65.00',
    originalPrice: '$80.00',
    category: 'Women',
    type: 'Skirt',
    color: 'Black',
    size: 'L',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Women\'s Leather Jacket',
    price: '$200.00',
    originalPrice: '$250.00',
    category: 'Women',
    type: 'Jacket',
    color: 'Black',
    size: 'M',
  },

  // Baby Products
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Romper (Unisex)',
    price: '$30.00',
    originalPrice: '$40.00',
    category: 'Baby Fashion',
    type: 'Romper',
    color: 'White',
    size: '6-12 Months',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Knit Sweater',
    price: '$45.00',
    originalPrice: '$55.00',
    category: 'Baby Fashion',
    type: 'Sweater',
    color: 'Blue',
    size: '12-18 Months',
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Baby Cotton Onesie',
    price: '$25.00',
    originalPrice: '$35.00',
    category: 'Baby Fashion',
    type: 'Onesie',
    color: 'Yellow',
    size: '0-3 Months',
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Toddler Denim Overalls',
    price: '$50.00',
    originalPrice: '$60.00',
    category: 'Baby Fashion',
    type: 'Overalls',
    color: 'Blue',
    size: '2T',
  },
];

const Category = ({ defaultCategory }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: defaultCategory || null,
    type: null,
    size: null,
    color: null,
    price: 250,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useShop();

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const filteredProducts = allProductItemsCategory.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    if (filters.type && product.type !== filters.type) {
      return false;
    }
    if (filters.size && product.size !== filters.size) {
      return false;
    }
    if (filters.color && product.color !== filters.color) {
      return false;
    }
    const productPrice = parseFloat(product.price.replace('$', ''));
    if (productPrice > filters.price) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-[#f3ead0] text-[#1a1a1a] min-h-screen">
      <header className="py-10 text-center">
        <h1 className="text-[30px] font-semibold">Category</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Category</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-full mx-auto px-4 pb-16 flex flex-col md:flex-row gap-8 bg-white">
        {/* Sidebar */}
        <CategorySidebar defaultCategory={defaultCategory} onFilterChange={handleFilterChange} />
        
        {/* Products grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mr-72 mt-20 mb-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <article
                key={item.id}
                className="text-center text-xs text-[#6b5e3c] relative"
                onMouseEnter={() => setHoveredProduct(item.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  alt={item.name}
                  className="mx-auto mb-2 h-full w-full object-cover rounded-md cursor-pointer"
                  height="400"
                  src={item.image}
                  width="300"
                  onClick={() => setSelectedImage(item.image)}
                />
                {hoveredProduct === item.id && (
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 rounded-md transition-opacity duration-300 text-black">
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
                <span className={`block text-[14px] font-normal mt-4 ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
                  {item.name}
                </span>
                <span className="mt-1 block text-[16px]">
                  <span className="text-black font-semibold mr-2">{item.price}</span>{' '}
                  <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
                </span>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">No products found for the selected filters.</div>
          )}
        </section>
      </main>

      {selectedImage && (
        <ProductModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default Category;