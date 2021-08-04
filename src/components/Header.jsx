import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="header__title">
        <h1 className="header__title__h1">less isn't more</h1>
        <a className="header__title__button" href="#">
          get one
        </a>
      </section>
    </header>
  );
};

export default Header;
