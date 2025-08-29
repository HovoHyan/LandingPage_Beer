import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import logoImg from "../../Icons/beige.png";
import "./navigationMenu.scss";

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

  const toggleBurger = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`navigationMenu ${
        scrollDirection === "down" ? "nav--hidden" : "nav--visible"
      } ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="navContent">
        <img src={logoImg} alt="Logo" />

        <ul className={`navLinks ${isMenuOpen ? "open" : ""}`}>
          <li onClick={closeMenu}>
            <NavLink to="/">Գլխավոր էջ</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/about">379-ի մասին</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/products">379 տեսականի</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/events">Միջոցառումներ</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/find">Որտեղ գնել</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact">Կապ</NavLink>
          </li>
          <li>
            <MdLanguage />
          </li>
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
    </nav>
  );
};

export default NavigationMenu;
