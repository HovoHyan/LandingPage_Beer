import React from "react";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <NavigationMenu />
      <Outlet />
      <Footer />    
    </div>
  );
};

export default Layout;
