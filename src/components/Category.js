// // import React from 'react';
// // import CategorySidebar from './CategorySidebar';

// // const Category = () => {
// //   return (
// //     <div className="bg-[#f3ead0] text-[#1a1a1a] min-h-screen">
// //       <header className="py-10 text-center">
// //         <h1 className="text-[30px] font-semibold">Category</h1>
// //         <nav className="text-xs text-[#6b5e3c] mt-1">
// //           <ul className="inline-flex space-x-2 justify-center items-center">
// //             <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
// //             <li>|</li>
// //             <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Category</a></li>
// //           </ul>
// //         </nav>
// //       </header>

// //       <main className="max-w-full mx-auto px-4 pb-16 flex flex-col md:flex-row gap-8 bg-white">
// //         {/* Sidebar */}
// //         <CategorySidebar/>
// //         {/* Products grid */}
// //         <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mr-72 mt-20 mb-20">
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Hand holding completely bare go fuzz free product with finger pointing"
// //               className="mx-auto mb-2 h-full"
// //               height="400"
// //               src="https://storage.googleapis.com/a1aa/image/3f65fb26-bd0e-48da-b7bb-a056cd39d6da.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Curiosly white bottle with water splash background"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/95e81d5c-bc65-491a-0280-0fa927170778.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //             {/* <p className="mt-1">
// //               <span>$98.00</span>
// //               <span className="line-through text-[#b9a97f] ml-2">$120.00</span>
// //             </p> */}
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Brown boots belt gray pants white t-shirt sunglasses watch arranged flatlay"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/7d10a598-69cc-4f7f-232e-322f734984e9.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="White smart watch with white strap on gray background"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/6227dc3d-5144-4396-6d07-a8354b8a9e62.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Curiosly white bottle with water splash background grayscale"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/7e80d3a6-5a74-416b-349f-0247e4263c1d.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Black and white photo of woman in white long sleeve shirt with hands behind head"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/d463be4a-f670-4ba6-80df-68c84f4a2ea9.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Side profile of man wearing gray coat with black strap bag"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/f3b65729-f850-431e-d288-f7643d1202e7.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Woman with short black hair wearing white shirt looking down"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/d25227d9-b3b5-4db3-2d99-dbe4c40070cd.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //           <article className="text-center text-xs text-[#6b5e3c]">
// //             <img
// //               alt="Red tomato sweater on woman with red hair looking to side"
// //               className="mx-auto mb-2 h-full"
// //               height="200"
// //               src="https://storage.googleapis.com/a1aa/image/45c1ee36-3786-4ffc-7091-badbb5a3e98d.jpg"
// //               width="300"
// //             />
// //             <span className={`block text-[14px] font-normal`}>
// //               Cashmere Tank + Bag
// //             </span>
// //             <span className="mt-4 block text-[16px]">
// //               <span className="text-black font-semibold mr-2">$98.00</span>{' '}
// //               <s className="text-gray-400 text-[16x] font-semibold">$120.00</s>
// //             </span>
// //           </article>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Category;


// import React, { useState } from 'react';
// import CategorySidebar from './CategorySidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

// const productItemsCategory = [
//   {
//     id: 1,
//     image: 'https://storage.googleapis.com/a1aa/image/3f65fb26-bd0e-48da-b7bb-a056cd39d6da.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 2,
//     image: 'https://storage.googleapis.com/a1aa/image/95e81d5c-bc65-491a-0280-0fa927170778.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 3,
//     image: 'https://storage.googleapis.com/a1aa/image/7d10a598-69cc-4f7f-232e-322f734984e9.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 4,
//     image: 'https://storage.googleapis.com/a1aa/image/6227dc3d-5144-4396-6d07-a8354b8a9e62.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 5,
//     image: 'https://storage.googleapis.com/a1aa/image/7e80d3a6-5a74-416b-349f-0247e4263c1d.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 6,
//     image: 'https://storage.googleapis.com/a1aa/image/d463be4a-f670-4ba6-80df-68c84f4a2ea9.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 7,
//     image: 'https://storage.googleapis.com/a1aa/image/f3b65729-f850-431e-d288-f7643d1202e7.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 8,
//     image: 'https://storage.googleapis.com/a1aa/image/d25227d9-b3b5-4db3-2d99-dbe4c40070cd.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
//   {
//     id: 9,
//     image: 'https://storage.googleapis.com/a1aa/image/45c1ee36-3786-4ffc-7091-badbb5a3e98d.jpg',
//     name: 'Cashmere Tank + Bag',
//     price: '$98.00',
//     originalPrice: '$120.00',
//   },
// ];

// const Category = () => {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   return (
//     <div className="bg-[#f3ead0] text-[#1a1a1a] min-h-screen">
//       <header className="py-10 text-center">
//         <h1 className="text-[30px] font-semibold">Category</h1>
//         <nav className="text-xs text-[#6b5e3c] mt-1">
//           <ul className="inline-flex space-x-2 justify-center items-center">
//             <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
//             <li>|</li>
//             <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Category</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main className="max-w-full mx-auto px-4 pb-16 flex flex-col md:flex-row gap-8 bg-white">
//         {/* Sidebar */}
//         <CategorySidebar/>
//         {/* Products grid */}
//         <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mr-72 mt-20 mb-20">
//           {productItemsCategory.map((item) => (
//             <article
//               key={item.id}
//               className="text-center text-xs text-[#6b5e3c] relative"
//               onMouseEnter={() => setHoveredProduct(item.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               <img
//                 alt={item.name}
//                 className="mx-auto mb-2 h-full w-full object-cover rounded-md"
//                 height="400"
//                 src={item.image}
//                 width="300"
//               />
//               {hoveredProduct === item.id && (
//                 <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 rounded-md transition-opacity duration-300 text-black">
//                   <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
//                     <FontAwesomeIcon icon={faShoppingCart} />
//                   </button>
//                   <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
//                     <FontAwesomeIcon icon={faHeart} />
//                   </button>
//                   <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
//                     <FontAwesomeIcon icon={faSearch} />
//                   </button>
//                 </div>
//               )}
//               <span className={`block text-[14px] font-normal mt-4 ${hoveredProduct === item.id ? 'text-red-600' : ''}`}>
//                 {item.name}
//               </span>
//               <span className="mt-1 block text-[16px]">
//                 <span className="text-black font-semibold mr-2">{item.price}</span>{' '}
//                 <s className="text-gray-400 text-[16x] font-semibold">{item.originalPrice}</s>
//               </span>
//             </article>
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Category;

// src/components/Category.jsx
import React, { useState, useEffect, useCallback } from 'react';
import CategorySidebar from './CategorySidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

// const allProductItemsCategory = [
//   // Men's Products
//   {
//     id: 1,
//     image: 'https://storage.googleapis.com/a1aa/image/3f65fb26-bd0e-48da-b7bb-a056cd39d6da.jpg',
//     name: 'Men’s Summer T-Shirt',
//     price: '$75.00',
//     originalPrice: '$90.00',
//     category: 'Men',
//     type: 'T-Shirt',
//     color: 'Red',
//     size: 'M',
//   },
//   {
//     id: 2,
//     image: 'https://storage.googleapis.com/a1aa/image/95e81d5c-bc65-491a-0280-0fa927170778.jpg',
//     name: 'Men’s Denim Jacket',
//     price: '$150.00',
//     originalPrice: '$180.00',
//     category: 'Men',
//     type: 'Jacket',
//     color: 'Blue',
//     size: 'L',
//   },
//   {
//     id: 3,
//     image: 'https://storage.googleapis.com/a1aa/image/7d10a598-69cc-4f7f-232e-322f734984e9.jpg',
//     name: 'Men’s Casual Shirt',
//     price: '$60.00',
//     originalPrice: '$75.00',
//     category: 'Men',
//     type: 'Shirt',
//     color: 'White',
//     size: 'S',
//   },
//   {
//     id: 4,
//     image: 'https://storage.googleapis.com/a1aa/image/6227dc3d-5144-4396-6d07-a8354b8a9e62.jpg',
//     name: 'Men’s Slim Fit Jeans',
//     price: '$110.00',
//     originalPrice: '$130.00',
//     category: 'Men',
//     type: 'Jeans',
//     color: 'Black',
//     size: '32',
//   },
//   {
//     id: 5,
//     image: 'https://storage.googleapis.com/a1aa/image/7e80d3a6-5a74-416b-349f-0247e4263c1d.jpg',
//     name: 'Men’s Cargo Shorts',
//     price: '$55.00',
//     originalPrice: '$65.00',
//     category: 'Men',
//     type: 'Shorts',
//     color: 'Green',
//     size: 'M',
//   },

//   // Women's Products
//   {
//     id: 6,
//     image: 'https://storage.googleapis.com/a1aa/image/d463be4a-f670-4ba6-80df-68c84f4a2ea9.jpg',
//     name: 'Women’s Summer Dress',
//     price: '$85.00',
//     originalPrice: '$100.00',
//     category: 'Women',
//     type: 'Dress',
//     color: 'Pink',
//     size: 'S',
//   },
//   {
//     id: 7,
//     image: 'https://storage.googleapis.com/a1aa/image/f3b65729-f850-431e-d288-f7643d1202e7.jpg',
//     name: 'Women’s Elegant Blouse',
//     price: '$70.00',
//     originalPrice: '$85.00',
//     category: 'Women',
//     type: 'Shirt',
//     color: 'White',
//     size: 'M',
//   },
//   {
//     id: 8,
//     image: 'https://storage.googleapis.com/a1aa/image/d25227d9-b3b5-4db3-2d99-dbe4c40070cd.jpg',
//     name: 'Women’s High-Waist Jeans',
//     price: '$120.00',
//     originalPrice: '$140.00',
//     category: 'Women',
//     type: 'Jeans',
//     color: 'Blue',
//     size: '28',
//   },
//   {
//     id: 9,
//     image: 'https://storage.googleapis.com/a1aa/image/45c1ee36-3786-4ffc-7091-badbb5a3e98d.jpg',
//     name: 'Women’s Pleated Skirt',
//     price: '$65.00',
//     originalPrice: '$80.00',
//     category: 'Women',
//     type: 'Skirt',
//     color: 'Black',
//     size: 'L',
//   },
//   {
//     id: 10,
//     image: 'https://storage.googleapis.com/a1aa/image/7d10a598-69cc-4f7f-232e-322f734984e9.jpg',
//     name: 'Women’s Leather Jacket',
//     price: '$200.00',
//     originalPrice: '$250.00',
//     category: 'Women',
//     type: 'Jacket',
//     color: 'Black',
//     size: 'M',
//   },

//   // Baby Products
//   {
//     id: 11,
//     image: 'https://storage.googleapis.com/a1aa/image/3f65fb26-bd0e-48da-b7bb-a056cd39d6da.jpg',
//     name: 'Baby Romper (Unisex)',
//     price: '$30.00',
//     originalPrice: '$40.00',
//     category: 'Baby Fashion',
//     type: 'Romper',
//     color: 'White',
//     size: '6-12 Months',
//   },
//   {
//     id: 12,
//     image: 'https://storage.googleapis.com/a1aa/image/95e81d5c-bc65-491a-0280-0fa927170778.jpg',
//     name: 'Baby Knit Sweater',
//     price: '$45.00',
//     originalPrice: '$55.00',
//     category: 'Baby Fashion',
//     type: 'Sweater',
//     color: 'Blue',
//     size: '12-18 Months',
//   },
//   {
//     id: 13,
//     image: 'https://storage.googleapis.com/a1aa/image/d463be4a-f670-4ba6-80df-68c84f4a2ea9.jpg',
//     name: 'Baby Cotton Onesie',
//     price: '$25.00',
//     originalPrice: '$35.00',
//     category: 'Baby Fashion',
//     type: 'Onesie',
//     color: 'Yellow',
//     size: '0-3 Months',
//   },
//   {
//     id: 14,
//     image: 'https://storage.googleapis.com/a1aa/image/d25227d9-b3b5-4db3-2d99-dbe4c40070cd.jpg',
//     name: 'Toddler Denim Overalls',
//     price: '$50.00',
//     originalPrice: '$60.00',
//     category: 'Baby Fashion',
//     type: 'Overalls',
//     color: 'Blue',
//     size: '2T',
//   },
// ];

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
    category: defaultCategory || null, // Initialize with defaultCategory or null for 'All'
    type: null,
    size: null,
    color: null,
    price: 250,
  });

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const filteredProducts = allProductItemsCategory.filter(product => {
    // Filter by category: if filters.category is null (i.e., 'All' is selected), skip this filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    // Filter by type
    if (filters.type && product.type !== filters.type) {
      return false;
    }
    // Filter by size
    if (filters.size && product.size !== filters.size) {
      return false;
    }
    // Filter by color
    if (filters.color && product.color !== filters.color) {
      return false;
    }
    // Filter by price
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
                  className="mx-auto mb-2 h-full w-full object-cover rounded-md"
                  height="400"
                  src={item.image}
                  width="300"
                />
                {hoveredProduct === item.id && (
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white pl-4 pr-4 p-2 rounded-md transition-opacity duration-300 text-black">
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[18px]">
                      <FontAwesomeIcon icon={faSearch} />
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
    </div>
  );
};

export default Category;