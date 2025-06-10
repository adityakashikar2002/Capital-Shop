// // src/components/ProtectedRoute.jsx
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useShop } from '../context/ShopContext';

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useShop();
//   const location = useLocation();

//   if (!isLoggedIn) {
//     return <Navigate to="/signin" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


// // src/components/ProtectedRoute.jsx
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useShop } from '../context/ShopContext';

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useShop();
//   const location = useLocation();

//   if (loading) {
//     return <div>Loading...</div>; // You can replace this with a proper loading spinner
//   }

//   if (!user) {
//     return <Navigate to="/signin" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;




// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useShop();
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;