import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../Icons/logo.png";
import sticker from "../../Images/sticker2.jpg";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <nav className="footerNav">
            <ul className="story">
              <li>Head Info</li>
              <li>Our Story</li>
              <li>Our Products</li>
              <li>Description</li>
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
                to={"https://facebook.com"}
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareFacebook />
              </NavLink>
              <NavLink
                to={"https://instagram.com"}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </NavLink>
              <NavLink
                to={"https://linkedin.com"}
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineAttachEmail />
              </NavLink>
            </div>
            <div className="sticker">
              <img src={sticker} alt="Sticker" />
            </div>
          </nav>
          <img src={logoImg} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
