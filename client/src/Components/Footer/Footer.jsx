import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../Icons/beige.png";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <nav className="footerNav">
          <ul className="story">
            <li>Dragon's Power</li>
            <li>Our Story</li>
            <li>About 379</li>
            <li>Products</li>
            <li>The Magic of Dragon</li>
          </ul>
          <div className="social">
            <p>
              <strong>Էլ․ հասցե:</strong>{" "}
              <a href="mailto:marketing@379beer.am" style={{color: "white"}}>marketing@379beer.am</a>
            </p>
            <p>
              <strong>Հեռ․:</strong> <a href="tel:+37433379003" style={{color: "white"}}>+374 33 379003</a>
            </p>
            <p>
              <strong>Հասցե:</strong> Կոտայք, Կաթնաղբյուր, 6րդ փողոց
            </p>
          </div>
          <div className="settings">
            <NavLink
              to={
                "https://www.instagram.com/379_brewingcompany?igsh=MTZ1ZGgxeDNwd3R4eQ=="
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to={" https://www.facebook.com/share/16PNvZTM7R/?mibextid=wwXIfr"}
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareFacebook />
            </NavLink>
            <NavLink
              to={
                "https://www.tiktok.com/@379_brewingcompany?_t=ZS-8wUGi1Z1ZIO&_r=1"
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </NavLink>
            <NavLink
              to={"https://www.linkedin.com/company/379-brewing-company/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </NavLink>
            <NavLink
              to={"https://youtube.com/@379brewingcompany?si=1XVDxxRnlX5zVsjb"}
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </NavLink>
          </div>
        </nav>
        <img src={logoImg} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
