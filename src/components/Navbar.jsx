import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header__nav">
      <span className="header__nav__brand">More.</span>
      <ul className="header__nav__list">
        <li className="header__nav__list__item">
          <img src="" alt="" />
        </li>
        <li className="header__nav__list__item">
          <img src="" alt="" />
        </li>
      </ul>
      <ul className="header__nav__list--hidden">
        <li className="header__nav__list--hidden-item">
          <Link to="/shop">shop</Link>
        </li>
        <li className="header__nav__list--hidden-item">
          <a href="#">contact</a>
        </li>
        <li className="header__nav__list--hidden-item">
          <a href="#">about</a>
        </li>
        <li className="header__nav__list--hidden-item">
          <a href="#">login</a>
        </li>
        <li className="header__nav__list--hidden-item">
          <a href="#">sign up</a>
        </li>
        <li className="header__nav__list--hidden-item">
          <img className="header__nav__list--hidden-item" src="" alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
