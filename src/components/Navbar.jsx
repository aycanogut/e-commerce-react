import React from "react";
import { Link } from "react-router-dom";
import IconHamburger from '../assets/icons/hamburger.svg'
import IconBasket from '../assets/icons/shop.svg'
import IconClose from '../assets/icons/close.svg'


const Navbar = () => {
  return (
    <nav className="nav">
      <span className="nav__brand">More.</span>
      <ul className="nav__list">
        <li className="nav__list__item">
          <img src={IconHamburger} alt="" />
        </li>
        <li className="nav__list__item">
          <img src={IconBasket} alt="" />
        </li>
      </ul>
      <ul className="nav__list--hidden">
        <li className="nav__list--hidden-item">
          <Link to="/shop">shop</Link>
        </li>
        <li className="nav__list--hidden-item">
          <a href="#">contact</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="#">about</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="#">login</a>
        </li>
        <li className="nav__list--hidden-item">
          <a href="#">sign up</a>
        </li>
        <li className="nav__list--hidden-item">
          <img className="nav__list--hidden-item" src={IconClose} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
