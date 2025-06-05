// import React, { useState } from 'react';

// const CategorySidebar = () => {
//   // State for each filter
//   const [selectedCategory, setSelectedCategory] = useState('Category');
//   const [selectedType, setSelectedType] = useState('Type');
//   const [selectedSize, setSelectedSize] = useState('Size');
//   const [selectedColor, setSelectedColor] = useState('Color');

//   // State for price range. Initialize based on your image (250 is the initial thumb position).
//   const [priceRange, setPriceRange] = useState(250);
//   const minPrice = 0;
//   const maxPrice = 500;

//   // State for genres radio buttons
//   const [selectedGenre, setSelectedGenre] = useState('Horror - Thriller');

//   // State for brands radio buttons
//   const [selectedBrand, setSelectedBrand] = useState('Anondo Publications');

//   // Helper function to render options for select dropdowns
//   const renderOptions = (optionsArray) => {
//     return optionsArray.map((option, index) => (
//       <option key={index} value={option}>
//         {option}
//       </option>
//     ));
//   };

//   return (
//     <aside className="w-full md:w-64 bg-white p-6 border border-gray-200 rounded-md mt-20 mb-20 ml-48 h-[700px]">
//       <form className="space-y-6 text-xs text-[#6b5e3c]">
//         {/* Category Select */}
//         <div>
//           <select
//             aria-label="Category"
//             className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             <option disabled value="Category">Category</option> {/* Set value for disabled option */}
//             {renderOptions(['Men', 'Women', 'Baby Fashion'])}
//           </select>
//         </div>

//         {/* Type Select */}
//         <div>
//           <select
//             aria-label="Type"
//             className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option disabled value="Type">Type</option>
//             {renderOptions(['Type1', 'Type2', 'Type3', 'Type4'])}
//           </select>
//         </div>

//         {/* Size Select */}
//         <div>
//           <select
//             aria-label="Size"
//             className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
//             value={selectedSize}
//             onChange={(e) => setSelectedSize(e.target.value)}
//           >
//             <option disabled value="Size">Size</option>
//             {renderOptions(['Size1', 'Size2', 'Size3', 'Size4'])}
//           </select>
//         </div>

//         {/* Color Select */}
//         <div>
//           <select
//             aria-label="Color"
//             className="w-full text-[14px] text-[#6b5e3c] border border-gray-300 rounded-full py-2 px-4 appearance-none bg-white cursor-pointer"
//             value={selectedColor}
//             onChange={(e) => setSelectedColor(e.target.value)}
//           >
//             <option disabled value="Color">Color</option>
//             {renderOptions(['Color1', 'Color2', 'Color3', 'Color4'])}
//           </select>
//         </div>

//         {/* Filter by Price */}
//         <div>
//           <p className="font-semibold text-[16px] mb-2 text-[#1a1a1a]">Filter by Price</p>
//           <div className="flex items-center space-x-2 text-[14px] text-[#6b5e3c] mb-1">
//             <span className="text-[10px]">{minPrice}</span> {/* Smaller font for min/max price */}
//             <div className="flex-1 relative">
//               <input
//                 className="w-full h-1 bg-pink-300 rounded-lg appearance-none cursor-pointer"
//                 max={maxPrice}
//                 min={minPrice}
//                 type="range"
//                 value={priceRange}
//                 onChange={(e) => setPriceRange(Number(e.target.value))}
//                 // The styling of the thumb and track might require a custom Tailwind plugin or extra CSS if you want exact replica
//                 // of the pink track extending to the thumb, as default range input styling is browser dependent.
//                 // However, the pink-300 bg is applied to the whole track by default.
//               />
//               {/* This span will visually represent the current price range */}
//               {/* It's positioned absolutely over the track */}
//               <span
//                 className="absolute h-1 bg-pink-600 rounded-lg top-0 left-0"
//                 style={{ width: `${((priceRange - minPrice) / (maxPrice - minPrice)) * 100}%` }}
//               ></span>
//             </div>
//             <span className="text-[10px]">{maxPrice}</span> {/* Smaller font for min/max price */}
//           </div>
//           <div className="flex justify-between text-[10px] text-[#6b5e3c]">
//             <span>to</span>
//             <span className="text-sm font-bold text-[#1a1a1a]">${priceRange}</span> {/* Price value dynamic and styled */}
//           </div>
//         </div>

//         {/* Filter by Genres */}
//         <div>
//           <p className="font-semibold text-[16px] mb-2 text-[#1a1a1a]">Filter by Genres</p>
//           <ul className="space-y-1 text-[14px] text-[#6b5e3c]">
//             {['History', 'Horror - Thriller', 'Love Stories', 'Science Fiction', 'Biography'].map((genre) => (
//               <li key={genre}>
//                 <label className="inline-flex items-center cursor-pointer">
//                   <input
//                     className="form-radio text-pink-600 border-gray-300" // Added border-gray-300 for default border
//                     name="genres"
//                     type="radio"
//                     value={genre}
//                     checked={selectedGenre === genre}
//                     onChange={(e) => setSelectedGenre(e.target.value)}
//                   />
//                   <span className="ml-2">{genre}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Filter by Brand */}
//         <div>
//           <p className="font-semibold text-[16px] mb-2 text-[#1a1a1a]">Filter by Brand</p>
//           <ul className="space-y-1 text-[14px] text-[#6b5e3c]">
//             {['Green Publications', 'Anondo Publications', 'Rinku Publications', 'Sheba Publications', 'Red Publications'].map((brand) => (
//               <li key={brand}>
//                 <label className="inline-flex items-center cursor-pointer">
//                   <input
//                     className="form-radio text-pink-600 border-gray-300" // Added border-gray-300 for default border
//                     name="brand"
//                     type="radio"
//                     value={brand}
//                     checked={selectedBrand === brand}
//                     onChange={(e) => setSelectedBrand(e.target.value)}
//                   />
//                   <span className="ml-2">{brand}</span>
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

import React, { useState } from 'react';
import { ChevronDownIcon, TagIcon, PencilIcon, AdjustmentsHorizontalIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { setStyle } from 'framer-motion';
import { text } from '@fortawesome/fontawesome-svg-core';

const CategorySidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedType, setSelectedType] = useState('Type');
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');
  const [priceRange, setPriceRange] = useState(250);
  const minPrice = 0;
  const maxPrice = 500;
  const [selectedGenre, setSelectedGenre] = useState('Horror - Thriller');
  const [selectedBrand, setSelectedBrand] = useState('Anondo Publications');

  const renderOptions = (optionsArray) =>
    optionsArray.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));

  return (
    <aside className="w-full md:w-72 bg-[#faf9f7] p-6 border border-gray-300 rounded-2xl mt-20 mb-20 ml-48 shadow-md h-[850px]">
      <form className="space-y-6 text-sm text-gray-700 font-medium">
        
        {[
            { icon: TagIcon, label: 'Category', value: selectedCategory, setter: setSelectedCategory, options: ['Men', 'Women', 'Baby Fashion'] },
            { icon: AdjustmentsHorizontalIcon, label: 'Type', value: selectedType, setter: setSelectedType, options: ['Type1', 'Type2', 'Type3', 'Type4'] },
            { icon: ChevronDownIcon, label: 'Size', value: selectedSize, setter: setSelectedSize, options: ['Size1', 'Size2', 'Size3', 'Size4'] },
            { icon: PencilIcon, label: 'Color', value: selectedColor, setter: setSelectedColor, options: ['Color1', 'Color2', 'Color3', 'Color4'] },
            ].map(({ icon: Icon, label, value, setter, options }, i) => (
            <div key={i}>
                <label className="flex items-center gap-2 mb-1 text-[15px] text-gray-800 font-semibold"> {/* <-- Added font-semibold */}
                <Icon className="w-4 h-4 text-pink-500" />
                {label}
                </label>
                <select
                aria-label={label}
                className="w-full border border-gray-300 bg-white text-gray-700 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                value={value}
                onChange={(e) => setter(e.target.value)}
                >
                <option disabled value={label}>{label}</option>
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

        {/* Genres */}
        <div>
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
        </div>

        {/* Brands */}
        <div>
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
        </div>
      </form>
    </aside>
  );
};

export default CategorySidebar;
