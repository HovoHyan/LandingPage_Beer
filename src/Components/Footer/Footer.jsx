import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import logoImg from "../../Icons/logo.png";

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
              <b>sticker</b>
            </div>
          </nav>
          <img src={logoImg} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
