import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../Icons/logo.png";
import sticker from "../../Images/sticker2.jpg"
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <nav className="footerNav">
            <ul className="story">
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
            </ul>
            <ul className="settings">
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Link</NavLink>
              </li>
            </ul>
            <div className="social">
              <b>logos</b>
              <b>logos</b>
              <b>logos</b>
              <b>logos</b>
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
