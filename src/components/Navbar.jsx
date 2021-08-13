import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHamburger from "../assets/icons/hamburger.svg";
import IconBasket from "../assets/icons/shop.svg";
import IconClose from "../assets/icons/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <a href="/">
       <span className="nav__brand">More.</span>
      </a>
      <ul className={`nav__list ${isOpen ? "nav__hide" : "nav__show"}`}>
        <li className="nav__list__item" onClick={handleHamburgerMenu}>
          <img src={IconHamburger} alt=""  />
        </li>
        <li className="nav__list__item">
          <a href="/payment"><img src={IconBasket} alt="" /></a>
        </li>
      </ul>
      <ul className={`nav__list--hidden ${isOpen ? "nav__show" : "nav__hide"}`}>
        <li className="nav__list--hidden-item">
          <a href="/">shop</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/">contact</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/">about</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/login">login</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/signup">sign up</a>
        </li>
        <li className="nav__list--hidden-item" onClick={handleHamburgerMenu}>
          <img className="nav__list--hidden-item" src={IconClose} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
