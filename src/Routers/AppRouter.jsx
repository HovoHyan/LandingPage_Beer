import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"more"} element={<h1>more</h1>} />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"contact"} element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
