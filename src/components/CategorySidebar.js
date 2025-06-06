// import React, { useState } from 'react';
// import { ChevronDownIcon, TagIcon, PencilIcon, AdjustmentsHorizontalIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
// import { setStyle } from 'framer-motion';
// import { text } from '@fortawesome/fontawesome-svg-core';

// // const CategorySidebar = () => {
// const CategorySidebar = () => {
//   const [selectedCategory, setSelectedCategory] = useState('Category');
//   const [selectedType, setSelectedType] = useState('Type');
//   const [selectedSize, setSelectedSize] = useState('Size');
//   const [selectedColor, setSelectedColor] = useState('Color');
//   const [priceRange, setPriceRange] = useState(250);
//   const minPrice = 0;
//   const maxPrice = 500;
//   const [selectedGenre, setSelectedGenre] = useState('Horror - Thriller');
//   const [selectedBrand, setSelectedBrand] = useState('Anondo Publications');

//   const renderOptions = (optionsArray) =>
//     optionsArray.map((option, index) => (
//       <option key={index} value={option}>
//         {option}
//       </option>
//     ));

//   return (
//     <aside className="w-full md:w-72 bg-[#faf9f7] p-6 border border-gray-300 rounded-2xl mt-20 mb-20 ml-48 shadow-md h-[850px]">
//       <form className="space-y-6 text-sm text-gray-700 font-medium">
        
//         {[
//             { icon: TagIcon, label: 'Category', value: selectedCategory, setter: setSelectedCategory, options: ['Men', 'Women', 'Baby Fashion'] },
//             { icon: AdjustmentsHorizontalIcon, label: 'Type', value: selectedType, setter: setSelectedType, options: ['Type1', 'Type2', 'Type3', 'Type4'] },
//             { icon: ChevronDownIcon, label: 'Size', value: selectedSize, setter: setSelectedSize, options: ['Size1', 'Size2', 'Size3', 'Size4'] },
//             { icon: PencilIcon, label: 'Color', value: selectedColor, setter: setSelectedColor, options: ['Color1', 'Color2', 'Color3', 'Color4'] },
//             ].map(({ icon: Icon, label, value, setter, options }, i) => (
//             <div key={i}>
//                 <label className="flex items-center gap-2 mb-1 text-[15px] text-gray-800 font-semibold"> {/* <-- Added font-semibold */}
//                 <Icon className="w-4 h-4 text-pink-500" />
//                 {label}
//                 </label>
//                 <select
//                 aria-label={label}
//                 className="w-full border border-gray-300 bg-white text-gray-700 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
//                 value={value}
//                 onChange={(e) => setter(e.target.value)}
//                 >
//                 <option disabled value={label}>{label}</option>
//                 {renderOptions(options)}
//                 </select>
//             </div>
//             ))}


//         {/* Price Range */}
//         <div>
//           <label className="flex items-center gap-2 text-[14px] font-semibold text-gray-800 mb-2">
//             <AdjustmentsHorizontalIcon className="w-4 h-4 text-pink-500" />
//             Filter by Price
//           </label>
//           <div className="relative h-4">
//             <input
//               type="range"
//               min={minPrice}
//               max={maxPrice}
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//               className="w-full h-2 appearance-none bg-gray-200 rounded-lg cursor-pointer"
//               style={{
//                 background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${
//                   ((priceRange - minPrice) / (maxPrice - minPrice)) * 100
//                 }%, #e5e7eb ${
//                   ((priceRange - minPrice) / (maxPrice - minPrice)) * 100
//                 }%, #e5e7eb 100%)`,
//               }}
//             />
//           </div>
//           <div className="flex justify-between text-xs mt-1 text-gray-500">
//             <span>${minPrice}</span>
//             <span className="font-semibold text-gray-800">${priceRange}</span>
//             <span>${maxPrice}</span>
//           </div>
//         </div>

//         {/* Genres */}
//         <div>
//           <label className="flex items-center gap-2 mb-2 font-semibold text-[14px] text-gray-800">
//             <TagIcon className="w-4 h-4 text-pink-500" />
//             Genres
//           </label>
//           <ul className="space-y-2">
//             {['History', 'Horror - Thriller', 'Love Stories', 'Science Fiction', 'Biography'].map((genre) => (
//               <li key={genre}>
//                 <label className="flex items-center space-x-2 cursor-pointer hover:text-pink-600 transition">
//                   <input
//                     type="radio"
//                     name="genres"
//                     value={genre}
//                     checked={selectedGenre === genre}
//                     onChange={(e) => setSelectedGenre(e.target.value)}
//                     className="accent-pink-500"
//                   />
//                   <span>{genre}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Brands */}
//         <div>
//           <label className="flex items-center gap-2 mb-2 font-semibold text-[14px] text-gray-800">
//             <BuildingStorefrontIcon className="w-4 h-4 text-pink-500" />
//             Brands
//           </label>
//           <ul className="space-y-2">
//             {['Green Publications', 'Anondo Publications', 'Rinku Publications', 'Sheba Publications', 'Red Publications'].map((brand) => (
//               <li key={brand}>
//                 <label className="flex items-center space-x-2 cursor-pointer hover:text-pink-600 transition">
//                   <input
//                     type="radio"
//                     name="brand"
//                     value={brand}
//                     checked={selectedBrand === brand}
//                     onChange={(e) => setSelectedBrand(e.target.value)}
//                     className="accent-pink-500"
//                   />
//                   <span>{brand}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </form>
//     </aside>
//   );
// };

// export default CategorySidebar;


// src/components/CategorySidebar.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, TagIcon, PencilIcon, AdjustmentsHorizontalIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';

const CategorySidebar = ({ defaultCategory, onFilterChange }) => {
  // Initialize with 'All' if no defaultCategory is provided, otherwise use defaultCategory
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory || 'All');
  const [selectedType, setSelectedType] = useState('Type');
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');
  const [priceRange, setPriceRange] = useState(250);
  const minPrice = 0;
  const maxPrice = 500;
  const [selectedGenre, setSelectedGenre] = useState('Horror - Thriller');
  const [selectedBrand, setSelectedBrand] = useState('Anondo Publications');

  // Update selectedCategory when defaultCategory prop changes
  useEffect(() => {
    // Only update if defaultCategory is explicitly provided and different from current
    if (defaultCategory && defaultCategory !== selectedCategory) {
      setSelectedCategory(defaultCategory);
    } else if (!defaultCategory && selectedCategory !== 'All') {
      // If no defaultCategory, but selectedCategory isn't 'All', set it to 'All'
      setSelectedCategory('All');
    }
  }, [defaultCategory]); // Depend only on defaultCategory

  // Effect to trigger filter change callback
  useEffect(() => {
    onFilterChange({
      category: selectedCategory === 'All' ? null : selectedCategory, // Pass null for 'All'
      type: selectedType === 'Type' ? null : selectedType,
      size: selectedSize === 'Size' ? null : selectedSize,
      color: selectedColor === 'Color' ? null : selectedColor,
      price: priceRange,
      genre: selectedGenre,
      brand: selectedBrand,
    });
  }, [selectedCategory, selectedType, selectedSize, selectedColor, priceRange, selectedGenre, selectedBrand, onFilterChange]);

  const renderOptions = (optionsArray) =>
    optionsArray.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));

  return (
    <aside className="w-full md:w-72 bg-[#faf9f7] p-6 border border-gray-300 rounded-2xl mt-20 mb-20 ml-48 shadow-md h-[475px]">
      <form className="space-y-6 text-sm text-gray-700 font-medium">

        {[
          // Add 'All' to the category options
          { icon: TagIcon, label: 'Category', value: selectedCategory, setter: setSelectedCategory, options: ['All', 'Men', 'Women', 'Baby Fashion'] },
          { icon: AdjustmentsHorizontalIcon, label: 'Type', value: selectedType, setter: setSelectedType, options: ['T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Shirt', 'Shorts', 'Skirt', 'Romper', 'Sweater', 'Onesie', 'Overalls'] },
          { icon: ChevronDownIcon, label: 'Size', value: selectedSize, setter: setSelectedSize, options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '0-3 Months', '6-12 Months', '12-18 Months', '2T', '28', '32'] },
          { icon: PencilIcon, label: 'Color', value: selectedColor, setter: setSelectedColor, options: ['Red', 'Blue', 'Green', 'Black', 'White', 'Pink', 'Yellow'] },
        ].map(({ icon: Icon, label, value, setter, options }, i) => (
          <div key={i}>
            <label className="flex items-center gap-2 mb-1 text-[15px] text-gray-800 font-semibold">
              <Icon className="w-4 h-4 text-pink-500" />
              {label}
            </label>
            <select
              aria-label={label}
              className="w-full border border-gray-300 bg-white text-gray-700 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              value={value}
              onChange={(e) => setter(e.target.value)}
            >
              <option disabled={label === 'Category'} value={label}>{label}</option> {/* Keep disabled for initial 'Category' label */}
              {renderOptions(options)}
            </select>
          </div>
        ))}

        {/* Price Range */}
        <div>
          <label className="flex items-center gap-2 text-[14px] font-semibold text-gray-800 mb-2">
            <AdjustmentsHorizontalIcon className="w-4 h-4 text-pink-500" />
            Filter by Price
          </label>
          <div className="relative h-4">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 appearance-none bg-gray-200 rounded-lg cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${
                  ((priceRange - minPrice) / (maxPrice - minPrice)) * 100
                }%, #e5e7eb ${
                  ((priceRange - minPrice) / (maxPrice - minPrice)) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1 text-gray-500">
            <span>${minPrice}</span>
            <span className="font-semibold text-gray-800">${priceRange}</span>
            <span>${maxPrice}</span>
          </div>
        </div>

        {/* Genres (keeping for now, but not directly used for clothing categories) */}
        {/* <div>
          <label className="flex items-center gap-2 mb-2 font-semibold text-[14px] text-gray-800">
            <TagIcon className="w-4 h-4 text-pink-500" />
            Genres
          </label>
          <ul className="space-y-2">
            {['History', 'Horror - Thriller', 'Love Stories', 'Science Fiction', 'Biography'].map((genre) => (
              <li key={genre}>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-pink-600 transition">
                  <input
                    type="radio"
                    name="genres"
                    value={genre}
                    checked={selectedGenre === genre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                    className="accent-pink-500"
                  />
                  <span>{genre}</span>
                </label>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Brands (keeping for now, but not directly used for clothing categories) */}
        {/* <div>
          <label className="flex items-center gap-2 mb-2 font-semibold text-[14px] text-gray-800">
            <BuildingStorefrontIcon className="w-4 h-4 text-pink-500" />
            Brands
          </label>
          <ul className="space-y-2">
            {['Green Publications', 'Anondo Publications', 'Rinku Publications', 'Sheba Publications', 'Red Publications'].map((brand) => (
              <li key={brand}>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-pink-600 transition">
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="accent-pink-500"
                  />
                  <span>{brand}</span>
                </label>
              </li>
            ))}
          </ul>
        </div> */}
      </form>
    </aside>
  );
};

export default CategorySidebar;