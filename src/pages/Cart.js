import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartCount } = useShop();

  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );
  const navigate = useNavigate();

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

      <main className="max-w-[full]  ml-40 mr-40 px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart ({cartCount})</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="mb-6">Looks like you haven't added anything to your cart yet</p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items Header */}
            <div className="grid grid-cols-12 font-medium text-gray-600 border-b border-gray-200 pb-4 mb-6">
              <div className="col-span-5 pl-2">Product</div>
              <div className="col-span-2 text-right pr-2">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-3 text-right pr-2">Total</div>
            </div>

            {/* Cart Items */}
            {cart.map(item => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center border-b border-gray-200 py-4 cursor-pointer"
                onClick={() => navigate('/product-details', { state: { product: item } })}
              >
                <div className="col-span-5 flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Stop click from propagating to parent div
                        removeFromCart(item.id);
                      }}
                      className="text-red-600 text-sm mt-1 flex items-center"
                    >
                      <FontAwesomeIcon icon={faTrash} className="mr-1" />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-right pr-2">{item.price}</div>

                <div className="col-span-2 flex justify-center items-center border border-gray-300 rounded w-fit ml-14">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Stop click from propagating to parent div
                      updateQuantity(item.id, item.quantity - 1);
                    }}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faMinus} size="xs" />
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Stop click from propagating to parent div
                      updateQuantity(item.id, item.quantity + 1);
                    }}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faPlus} size="xs" />
                  </button>
                </div>

                <div className="col-span-3 text-right pr-2 font-medium">
                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            {/* Order Summary */}
            <div className="mt-6 flex justify-end">
              <div className="w-full max-w-md border-t border-gray-200 pt-6">
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-b border-gray-200 py-4 flex justify-end">
                  <div className="w-full max-w-md">
                    <div className="flex justify-between mb-4">
                      <span>Subtotal</span>
                      <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-300">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mt-6 space-x-4">
                  <button className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2" onClick={() => navigate(-1)}>
                    Continue Shopping
                  </button>
                  <button className="bg-[#ff0a0a] text-white text-xs font-semibold rounded-full px-5 py-2" onClick={() => navigate('/checkout')}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;