// // // // // src/context/ShopContext.jsx
// // // // import React, { createContext, useState, useContext } from 'react';

// // // // const ShopContext = createContext();

// // // // export const ShopProvider = ({ children }) => {
// // // //   const [cart, setCart] = useState([]);
// // // //   const [wishlist, setWishlist] = useState([]);

// // // //   const addToCart = (product) => {
// // // //     setCart(prevCart => {
// // // //       const existingItem = prevCart.find(item => item.id === product.id);
// // // //       if (existingItem) {
// // // //         return prevCart.map(item =>
// // // //           item.id === product.id 
// // // //             ? { ...item, quantity: item.quantity + 1 } 
// // // //             : item
// // // //         );
// // // //       }
// // // //       return [...prevCart, { ...product, quantity: 1 }];
// // // //     });
// // // //   };

// // // //   const removeFromCart = (productId) => {
// // // //     setCart(prevCart => prevCart.filter(item => item.id !== productId));
// // // //   };

// // // //   const updateQuantity = (productId, newQuantity) => {
// // // //     if (newQuantity < 1) return;
// // // //     setCart(prevCart =>
// // // //       prevCart.map(item =>
// // // //         item.id === productId ? { ...item, quantity: newQuantity } : item
// // // //       )
// // // //     );
// // // //   };

// // // //   const addToWishlist = (product) => {
// // // //     setWishlist(prev => {
// // // //       if (prev.some(item => item.id === product.id)) return prev;
// // // //       return [...prev, product];
// // // //     });
// // // //   };

// // // //   const removeFromWishlist = (productId) => {
// // // //     setWishlist(prev => prev.filter(item => item.id !== productId));
// // // //   };

// // // //   const isInWishlist = (productId) => {
// // // //     return wishlist.some(item => item.id === productId);
// // // //   };

// // // //   return (
// // // //     <ShopContext.Provider 
// // // //       value={{
// // // //         cart,
// // // //         wishlist,
// // // //         addToCart,
// // // //         removeFromCart,
// // // //         updateQuantity,
// // // //         addToWishlist,
// // // //         removeFromWishlist,
// // // //         cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
// // // //         wishlistCount: wishlist.length,
// // // //         isInWishlist
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </ShopContext.Provider>
// // // //   );
// // // // };

// // // // export const useShop = () => useContext(ShopContext);

// // // // src/context/ShopContext.jsx
// // // import React, { createContext, useState, useContext } from 'react';

// // // const ShopContext = createContext();

// // // export const ShopProvider = ({ children }) => {
// // //   const [cart, setCart] = useState([]);
// // //   const [wishlist, setWishlist] = useState([]);
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);


// // //   const login = () => {
// // //     setIsLoggedIn(true);
// // //     // In a real app, you would handle actual authentication here
// // //   };

// // //   const logout = () => {
// // //     setIsLoggedIn(false);
// // //   };

// // //   const addToCart = (product) => {
// // //     if (!isLoggedIn) {
// // //       return { requiresLogin: true };
// // //     }
    
// // //     setCart(prevCart => {
// // //       const existingItem = prevCart.find(item => item.id === product.id);
// // //       if (existingItem) {
// // //         return prevCart.map(item =>
// // //           item.id === product.id 
// // //             ? { ...item, quantity: item.quantity + 1 } 
// // //             : item
// // //         );
// // //       }
// // //       return [...prevCart, { ...product, quantity: 1 }];
// // //     });
// // //     return { success: true };
// // //   };

// // //   const removeFromCart = (productId) => {
// // //     setCart(prevCart => prevCart.filter(item => item.id !== productId));
// // //   };

// // //   const updateQuantity = (productId, newQuantity) => {
// // //     if (newQuantity < 1) return;
// // //     setCart(prevCart =>
// // //       prevCart.map(item =>
// // //         item.id === productId ? { ...item, quantity: newQuantity } : item
// // //       )
// // //     );
// // //   };

// // //   const addToWishlist = (product) => {
// // //     if (!isLoggedIn) {
// // //       return { requiresLogin: true };
// // //     }
    
// // //     setWishlist(prev => {
// // //       if (prev.some(item => item.id === product.id)) return prev;
// // //       return [...prev, product];
// // //     });
// // //     return { success: true };
// // //   };

// // //   const removeFromWishlist = (productId) => {
// // //     setWishlist(prev => prev.filter(item => item.id !== productId));
// // //   };

// // //   const isInWishlist = (productId) => {
// // //     return wishlist.some(item => item.id === productId);
// // //   };

// // //   return (
// // //     <ShopContext.Provider 
// // //       value={{
// // //         cart,
// // //         wishlist,
// // //         addToCart,
// // //         removeFromCart,
// // //         updateQuantity,
// // //         addToWishlist,
// // //         removeFromWishlist,
// // //         cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
// // //         wishlistCount: wishlist.length,
// // //         isInWishlist,
// // //         isLoggedIn,
// // //         login,
// // //         logout
// // //       }}
// // //     >
// // //       {children}
// // //     </ShopContext.Provider>
// // //   );
// // // };

// // // export const useShop = () => useContext(ShopContext);

// // // import React, { createContext, useState, useEffect, useContext } from 'react';
// // // import { toast } from 'react-toastify';

// // // const ShopContext = createContext();

// // // export const ShopProvider = ({ children }) => {
// // //   const [cart, setCart] = useState([]);
// // //   const [wishlist, setWishlist] = useState([]);
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// // //   // Load data from localStorage on initial render
// // //   useEffect(() => {
// // //     const savedCart = localStorage.getItem('cart');
// // //     const savedWishlist = localStorage.getItem('wishlist');
// // //     const savedLoginStatus = localStorage.getItem('isLoggedIn');

// // //     if (savedCart) setCart(JSON.parse(savedCart));
// // //     if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
// // //     if (savedLoginStatus) setIsLoggedIn(savedLoginStatus === 'true');
// // //   }, []);

// // //   // Save data to localStorage whenever it changes
// // //   useEffect(() => {
// // //     localStorage.setItem('cart', JSON.stringify(cart));
// // //     localStorage.setItem('wishlist', JSON.stringify(wishlist));
// // //     localStorage.setItem('isLoggedIn', isLoggedIn);
// // //   }, [cart, wishlist, isLoggedIn]);

// // // src/context/ShopContext.js
// // import React, { createContext, useState, useEffect, useContext } from 'react';
// // import { toast } from 'react-toastify';
// // import { auth } from '../firebase';
// // import { 
// //   signInWithEmailAndPassword,
// //   createUserWithEmailAndPassword,
// //   signOut,
// //   onAuthStateChanged
// // } from 'firebase/auth';

// // const ShopContext = createContext();

// // export const ShopProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);
// //   const [wishlist, setWishlist] = useState([]);
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Load data from localStorage on initial render
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem('cart');
// //     const savedWishlist = localStorage.getItem('wishlist');

// //     if (savedCart) setCart(JSON.parse(savedCart));
// //     if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

// //     // Set up auth state listener
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //       setLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   // Save data to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     localStorage.setItem('wishlist', JSON.stringify(wishlist));
// //   }, [cart, wishlist]);

// //   // const login = () => {
// //   //   setIsLoggedIn(true);
// //   //   toast.success('Logged in successfully!', {
// //   //     position: "top-right",
// //   //     autoClose: 3000,
// //   //   });
// //   // };

// //   // const logout = () => {
// //   //   setIsLoggedIn(false);
// //   //   toast.success('Logged out successfully!', {
// //   //     position: "top-right",
// //   //     autoClose: 3000,
// //   //   });
// //   // };


// //   const login = async (email, password) => {
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       toast.success('Logged in successfully!', {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //       return true;
// //     } catch (error) {
// //       toast.error(error.message, {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //       return false;
// //     }
// //   };

// //   const register = async (email, password, fullName) => {
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       // You can add additional user data to Firestore here if needed
// //       toast.success('Registered successfully!', {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //       return true;
// //     } catch (error) {
// //       toast.error(error.message, {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //       return false;
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       toast.success('Logged out successfully!', {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //     } catch (error) {
// //       toast.error(error.message, {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //     }
// //   };

// //   // const addToCart = (product) => {
// //   //   if (!isLoggedIn) {
// //   //     toast.error('Please login to add items to cart', {
// //   //       position: "top-right",
// //   //       autoClose: 3000,
// //   //     });
// //   //     return { requiresLogin: true };
// //   //   }
    
// //   //   setCart(prevCart => {
// //   //     const existingItem = prevCart.find(item => item.id === product.id);
// //   //     let newCart;
// //   //     if (existingItem) {
// //   //       newCart = prevCart.map(item =>
// //   //         item.id === product.id 
// //   //           ? { ...item, quantity: item.quantity + 1 } 
// //   //           : item
// //   //       );
// //   //     } else {
// //   //       newCart = [...prevCart, { ...product, quantity: 1 }];
// //   //     }
      
// //   //     toast.success(`${product.name} added to cart!`, {
// //   //       position: "top-right",
// //   //       autoClose: 3000,
// //   //     });
      
// //   //     return newCart;
// //   //   });
// //   //   return { success: true };
// //   // };

// //   const addToCart = (product) => {
// //     if (!user) {
// //       toast.error('Please login to add items to cart', {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //       return { requiresLogin: true };
// //     }
    
// //     setCart(prevCart => {
// //       const existingItem = prevCart.find(item => item.id === product.id);
// //       let newCart;
// //       if (existingItem) {
// //         newCart = prevCart.map(item =>
// //           item.id === product.id 
// //             ? { ...item, quantity: item.quantity + 1 } 
// //             : item
// //         );
// //       } else {
// //         newCart = [...prevCart, { ...product, quantity: 1 }];
// //       }
      
// //       toast.success(`${product.name} added to cart!`, {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
      
// //       return newCart;
// //     });
// //     return { success: true };
// //   };

// //   const removeFromCart = (productId) => {
// //     setCart(prevCart => {
// //       const product = prevCart.find(item => item.id === productId);
// //       if (product) {
// //         toast.info(`${product.name} removed from cart`, {
// //           position: "top-right",
// //           autoClose: 3000,
// //         });
// //       }
// //       return prevCart.filter(item => item.id !== productId);
// //     });
// //   };

// //   const updateQuantity = (productId, newQuantity) => {
// //     if (newQuantity < 1) return;
// //     setCart(prevCart =>
// //       prevCart.map(item =>
// //         item.id === productId ? { ...item, quantity: newQuantity } : item
// //       )
// //     );
// //   };

// //   const addToWishlist = (product) => {
// //     if (!user) {
// //       toast.error('Please login to add items to wishlist', {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
// //       return { requiresLogin: true };
// //     }
    
// //     setWishlist(prev => {
// //       if (prev.some(item => item.id === product.id)) {
// //         toast.info(`${product.name} is already in your wishlist`, {
// //           position: "top-right",
// //           autoClose: 3000,
// //         });
// //         return prev;
// //       }
      
// //       toast.success(`${product.name} added to wishlist!`, {
// //         position: "top-right",
// //         autoClose: 3000,
// //       });
      
// //       return [...prev, product];
// //     });
// //     return { success: true };
// //   };

// //   const removeFromWishlist = (productId) => {
// //     setWishlist(prev => {
// //       const product = prev.find(item => item.id === productId);
// //       if (product) {
// //         toast.info(`${product.name} removed from wishlist`, {
// //           position: "top-right",
// //           autoClose: 3000,
// //         });
// //       }
// //       return prev.filter(item => item.id !== productId);
// //     });
// //   };

// //   const isInWishlist = (productId) => {
// //     return wishlist.some(item => item.id === productId);
// //   };

// //   const clearCart = () => {
// //     setCart([]);
// //   };

// // //   return (
// // //     <ShopContext.Provider 
// // //       value={{
// // //         cart,
// // //         wishlist,
// // //         addToCart,
// // //         removeFromCart,
// // //         updateQuantity,
// // //         addToWishlist,
// // //         removeFromWishlist,
// // //         cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
// // //         wishlistCount: wishlist.length,
// // //         isInWishlist,
// // //         isLoggedIn,
// // //         login,
// // //         logout,
// // //         clearCart
// // //       }}
// // //     >
// // //       {children}
// // //     </ShopContext.Provider>
// // //   );
// // // };

// // // export const useShop = () => useContext(ShopContext);

// // return (
// //     <ShopContext.Provider 
// //       value={{
// //         cart,
// //         wishlist,
// //         addToCart,
// //         removeFromCart,
// //         updateQuantity,
// //         addToWishlist,
// //         removeFromWishlist,
// //         cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
// //         wishlistCount: wishlist.length,
// //         isInWishlist,
// //         user,
// //         loading,
// //         isLoggedIn: !!user,
// //         login,
// //         register,
// //         logout,
// //         clearCart
// //       }}
// //     >
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export const useShop = () => useContext(ShopContext);




// // src/context/ShopContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { toast } from 'react-toastify';
// import { auth } from '../firebase';
// import { 
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut, // Import signOut
//   onAuthStateChanged
// } from 'firebase/auth';

// const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Load data from localStorage on initial render
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     const savedWishlist = localStorage.getItem('wishlist');

//     if (savedCart) setCart(JSON.parse(savedCart));
//     if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

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
//   }, [cart, wishlist]);

//   const login = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
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

//   const register = async (email, password, fullName) => {
//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
//       // Immediately sign out the newly registered user
//       await signOut(auth); 

//       // You can add additional user data to Firestore here if needed (after userCredential)
      
//       toast.success('Registered successfully! Please log in.', { // Updated message
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

//   // Dummy functions for compilation, assuming they exist in your original context
//   const removeFromCart = () => {};
//   const updateQuantity = () => {};
//   const addToWishlist = () => {};
//   const removeFromWishlist = () => {};
//   const isInWishlist = () => false;
//   const clearCart = () => setCart([]);


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
//         clearCart
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export const useShop = () => useContext(ShopContext);



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

  const register = async (email, password, fullName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update user profile with display name
      await updateProfile(userCredential.user, { displayName: email});
      setUser(userCredential.user);
      toast.success('Registered successfully!', {
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