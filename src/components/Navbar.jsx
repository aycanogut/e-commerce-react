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
      <span className="nav__brand">More.</span>
      <ul className={`nav__list ${isOpen ? "nav__hide" : "nav__show"}`}>
        <li className="nav__list__item" onClick={handleHamburgerMenu}>
          <img src={IconHamburger} alt=""  />
        </li>
        <li className="nav__list__item">
          <img src={IconBasket} alt="" />
        </li>
      </ul>
      <ul className={`nav__list--hidden ${isOpen ? "nav__show" : "nav__hide"}`}>
        <li className="nav__list--hidden-item">
          <Link to="/shop">shop</Link>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/contact">contact</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/about">about</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/login">login</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="/sign-up">sign up</a>
        </li>
        <li className="nav__list--hidden-item" onClick={handleHamburgerMenu}>
          <img className="nav__list--hidden-item" src={IconClose} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
