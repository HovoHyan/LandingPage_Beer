import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../Icons/beige.png";
// import sticker from "../../Images/sticker2.jpg";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
        <div className="footerContent">
          <nav className="footerNav">
            <ul className="story">
              <li>Head Info</li>
              <li>Our Story</li>
              <li>About 379</li>
              <li>Products</li>
              <li>View Product</li>
              <li>The Magic of Dragon</li>
              <li>Events</li>
            </ul>
            <div className="social">
              <p>
                <strong>Էլ․ հասցե:</strong> info@example.com
              </p>
              <p>
                <strong>Հեռ․:</strong> +374 10 123456
              </p>
              <p>
                <strong>Հասցե:</strong> Երևան, Հայաստան
              </p>
            </div>
            <div className="settings">
              <NavLink
                to={"https://www.instagram.com/379_brewingcompany?igsh=MTZ1ZGgxeDNwd3R4eQ=="}
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
                to={"https://www.tiktok.com/@379_brewingcompany?_t=ZS-8wUGi1Z1ZIO&_r=1"}
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
