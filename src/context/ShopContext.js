// src/context/ShopContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { updateProfile } from 'firebase/auth';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

    // Set up auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      toast.success('Logged in successfully!', {
        position: "top-right",
        autoClose: 3000,
      });
      return true;
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
  };

  // const register = async (email, password, fullName) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     // Update user profile with display name
  //     await updateProfile(userCredential.user, { displayName: email});
  //     setUser(userCredential.user);
  //     toast.success('Registered successfully!', {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     return true;
  //   } catch (error) {
  //     toast.error(error.message, {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     return false;
  //   }
  // };

  const register = async (email, password, fullName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update user profile with display name
      await updateProfile(userCredential.user, { displayName: fullName });
      
      // Don't set the user here, just show success message
      toast.success('Registered successfully! Please login.', {
        position: "top-right",
        autoClose: 3000,
      });
      return true;
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('Logged out successfully!', {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const addToCart = (product) => {
    if (!user) {
      toast.error('Please login to add items to cart', {
        position: "top-right",
        autoClose: 3000,
      });
      return { requiresLogin: true };
    }
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      let newCart;
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
      });
      
      return newCart;
    });
    return { success: true };
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addToWishlist = (product) => {
    if (!user) {
      toast.error('Please login to add items to wishlist', {
        position: "top-right",
        autoClose: 3000,
      });
      return { requiresLogin: true };
    }
    
    setWishlist(prevWishlist => {
      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist;
      }
      toast.success(`${product.name} added to wishlist!`, {
        position: "top-right",
        autoClose: 3000,
      });
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist =>
      prevWishlist.filter(item => item.id !== productId)
    );
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider 
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
        wishlistCount: wishlist.length,
        isInWishlist,
        user,
        loading,
        isLoggedIn: !!user,
        login,
        register,
        logout,
        clearCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);




// // src/context/ShopContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { auth } from '../firebase';
// import { 
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { updateProfile } from 'firebase/auth';
// import { toast } from 'react-toastify';

// const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [shippingAddress, setShippingAddress] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState(null);
//   const [orders, setOrders] = useState([]);

//   // Load data from localStorage on initial render
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     const savedWishlist = localStorage.getItem('wishlist');
//     const savedShipping = localStorage.getItem('shippingAddress');
//     const savedPayment = localStorage.getItem('paymentMethod');
//     const savedOrders = localStorage.getItem('orders');

//     if (savedCart) setCart(JSON.parse(savedCart));
//     if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
//     if (savedShipping) setShippingAddress(JSON.parse(savedShipping));
//     if (savedPayment) setPaymentMethod(JSON.parse(savedPayment));
//     if (savedOrders) setOrders(JSON.parse(savedOrders));

//     // Set up auth state listener
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
//     localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
//     localStorage.setItem('orders', JSON.stringify(orders));
//   }, [cart, wishlist, shippingAddress, paymentMethod, orders]);

//   const login = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       setUser(userCredential.user);
//       toast.success('Logged in successfully!', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return true;
//     } catch (error) {
//       toast.error(error.message, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return false;
//     }
//   };

//   // const register = async (email, password, fullName) => {
//   //   try {
//   //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//   //     // Update user profile with display name
//   //     await updateProfile(userCredential.user, { displayName: email});
//   //     setUser(userCredential.user);
//   //     toast.success('Registered successfully!', {
//   //       position: "top-right",
//   //       autoClose: 3000,
//   //     });
//   //     return true;
//   //   } catch (error) {
//   //     toast.error(error.message, {
//   //       position: "top-right",
//   //       autoClose: 3000,
//   //     });
//   //     return false;
//   //   }
//   // };

//   const register = async (email, password, fullName) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       // Update user profile with display name
//       await updateProfile(userCredential.user, { displayName: fullName });
      
//       // Don't set the user here, just show success message
//       toast.success('Registered successfully! Please login.', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return true;
//     } catch (error) {
//       toast.error(error.message, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       toast.success('Logged out successfully!', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } catch (error) {
//       toast.error(error.message, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   const addToCart = (product) => {
//     if (!user) {
//       toast.error('Please login to add items to cart', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return { requiresLogin: true };
//     }
    
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       let newCart;
//       if (existingItem) {
//         newCart = prevCart.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 } 
//             : item
//         );
//       } else {
//         newCart = [...prevCart, { ...product, quantity: 1 }];
//       }
      
//       toast.success(`${product.name} added to cart!`, {
//         position: "top-right",
//         autoClose: 3000,
//       });
      
//       return newCart;
//     });
//     return { success: true };
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
    
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const addToWishlist = (product) => {
//     if (!user) {
//       toast.error('Please login to add items to wishlist', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return { requiresLogin: true };
//     }
    
//     setWishlist(prevWishlist => {
//       if (prevWishlist.some(item => item.id === product.id)) {
//         return prevWishlist;
//       }
//       toast.success(`${product.name} added to wishlist!`, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return [...prevWishlist, product];
//     });
//   };

//   const removeFromWishlist = (productId) => {
//     setWishlist(prevWishlist =>
//       prevWishlist.filter(item => item.id !== productId)
//     );
//   };

//   const isInWishlist = (productId) => {
//     return wishlist.some(item => item.id === productId);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };
// // Checkout functions
//   const saveShippingAddress = (data) => {
//     setShippingAddress(data);
//   };

//   const savePaymentMethod = (method) => {
//     setPaymentMethod(method);
//   };

//   const createOrder = async (orderData) => {
//     return new Promise((resolve, reject) => {
//       try {
//         // In a real app, you would send this to your backend
//         const newOrder = {
//           ...orderData,
//           _id: Math.random().toString(36).substr(2, 9),
//           createdAt: new Date().toISOString(),
//           isPaid: orderData.paymentMethod !== 'cod',
//           isDelivered: false,
//         };
        
//         setOrders([...orders, newOrder]);
//         resolve(newOrder);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };

//   return (
//     <ShopContext.Provider 
//       value={{
//         cart,
//         wishlist,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         addToWishlist,
//         removeFromWishlist,
//         cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
//         wishlistCount: wishlist.length,
//         isInWishlist,
//         user,
//         loading,
//         isLoggedIn: !!user,
//         login,
//         register,
//         logout,
//         clearCart,
//         // Checkout related
//         shippingAddress,
//         paymentMethod,
//         saveShippingAddress,
//         savePaymentMethod,
//         createOrder,
//         orders
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export const useShop = () => useContext(ShopContext);