// src/pages/Cart.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartCount } = useShop();

  const totalPrice = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

  return (
    <div className="bg-white text-gray-900">
      <Header />

      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">Cart</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Cart</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart ({cartCount})</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="mb-6">Looks like you haven't added anything to your cart yet</p>
            <a 
              href="/" 
              className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="grid grid-cols-12 gap-4 font-medium text-gray-600">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-2">Total</div>
                </div>
              </div>

              {cart.map(item => (
                <div key={item.id} className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-200">
                  <div className="col-span-6 flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 text-sm mt-1 flex items-center"
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2">{item.price}</div>
                  <div className="col-span-2">
                    <div className="flex items-center border border-gray-300 rounded w-fit">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        <FontAwesomeIcon icon={faPlus} size="xs" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 font-medium">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;



// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { useShop } from '../context/ShopContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity, cartCount } = useShop();

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
//     0
//   );

//   return (
//     <div className="bg-[#f2e8d6] text-[#1a1a1a] text-sm">
//       <Header />
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-xl font-semibold mb-6">Your Cart ({cartCount})</h1>

//         {cart.length === 0 ? (
//           <div className="text-center py-12">
//             <h2 className="text-lg font-semibold mb-3">Your cart is empty</h2>
//             <p className="mb-6">Looks like you haven't added anything to your cart yet</p>
//             <a
//               href="/"
//               className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2"
//             >
//               Continue Shopping
//             </a>
//           </div>
//         ) : (
//           <>
//             {/* Cart Items Header */}
//             <div className="grid grid-cols-12 text-xs text-[#4a4a4a] border-b border-[#d1d1d1] pb-3 mb-3">
//               <div className="col-span-5 pl-2">Product</div>
//               <div className="col-span-2 text-right pr-2">Price</div>
//               <div className="col-span-2 text-center">Quantity</div>
//               <div className="col-span-3 text-right pr-2">Total</div>
//             </div>

//             {/* Cart Items */}
//             {cart.map(item => (
//               <div
//                 key={item.id}
//                 className="grid grid-cols-12 items-center border-b border-[#d1d1d1] py-4"
//               >
//                 <div className="col-span-5 flex items-center space-x-2">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 object-cover rounded"
//                   />
//                   <div>
//                     <h3 className="text-sm font-semibold">{item.name}</h3>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-xs text-[#ff0a0a] mt-1 flex items-center"
//                     >
//                       <FontAwesomeIcon icon={faTrash} className="mr-1" />
//                       Remove
//                     </button>
//                   </div>
//                 </div>

//                 <div className="col-span-2 text-right pr-2 font-semibold">{item.price}</div>

//                 <div className="col-span-2 flex justify-center items-center space-x-1 border border-[#d1d1d1] w-24 h-8">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="text-xs text-[#4a4a4a]"
//                   >
//                     −
//                   </button>
//                   <span className="w-6 text-center">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="text-xs text-[#4a4a4a]"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="col-span-3 text-right pr-2 font-semibold">
//                   ${(+item.price.replace('$', '') * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}

//             {/* Buttons */}
//             <div className="flex justify-between border-b border-[#d1d1d1] py-4 mt-4">
//               <button
//                 className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2"
//                 type="button"
//               >
//                 Update Cart
//               </button>
//               <button
//                 className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2"
//                 type="button"
//               >
//                 Close Coupon
//               </button>
//             </div>

//             {/* Order Summary */}
//             <div className="mt-6 flex justify-end">
//               <div className="w-full max-w-md border-t border-[#d1d1d1] pt-6">
//                 <div className="flex justify-between text-xs text-[#4a4a4a] mb-3">
//                   <span>Subtotal</span>
//                   <span className="font-semibold">${totalPrice.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between text-xs text-[#4a4a4a] mb-3">
//                   <span>Shipping</span>
//                   <span>Free</span>
//                 </div>

//                 <div className="flex justify-between text-sm font-bold border-t border-gray-300 pt-4">
//                   <span>Total</span>
//                   <span>${totalPrice.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between mt-6 space-x-4">
//                   <button className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2">
//                     Continue Shopping
//                   </button>
//                   <button className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2">
//                     Proceed to Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;