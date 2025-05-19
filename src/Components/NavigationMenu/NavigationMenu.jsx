import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigationMenu.scss";
import logoImg from "../../Icons/logo.png";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  const toggleBurger = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navigationMenu ${scrollDirection === "down" ? "nav--hidden" : "nav--visible"}`}>
      <div className="container">
        <div className="navContent">
          <img src={logoImg} alt="logo" />
          <ul className={`navLinks ${isMenuOpen ? "open" : ""}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About 379</NavLink></li>
            <li><NavLink to="/products">379 Beer Styles</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/find">Find Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          <div
            className={`burger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
