import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="find" element={<h1>Find Us</h1>} />
        <Route path="event" element={<h1>Events</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
