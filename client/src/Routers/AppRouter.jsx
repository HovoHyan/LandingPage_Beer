// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Layout from "../Pages/Layout/Layout";
// import HomePage from "../Pages/HomePage/HomePage";
// import ContactPage from "../Pages/ContactPage/ContactPage";
// import AboutPage from "../Pages/AboutPage/AboutPage";
// import ProductsPage from "../Pages/ProductsPage/ProductsPage";

// const AppRouter = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="products" element={<ProductsPage />} />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="events" element={<h1>Events</h1>} />
//         <Route path="find" element={<h1>Find Us</h1>} />
//         <Route path="contact" element={<ContactPage />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRouter;
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import AdminPanel from "../Components/AdminPanel/AdminPanel";
import FindUs from "../Pages/FindUs/FindUs";
import Events from "../Pages/Eventes/Events";

// Lazy load 
const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const ContactPage = lazy(() => import("../Pages/ContactPage/ContactPage"));
const AboutPage = lazy(() => import("../Pages/AboutPage/AboutPage"));
const ProductsPage = lazy(() => import("../Pages/ProductsPage/ProductsPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<Events />} />
          <Route path="find" element={<ContactPage /> } />
          <Route path="contact" element={<FindUs />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

