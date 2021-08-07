import React from "react";
import Navbar from "./Navbar";
import ImageHero from "../assets/images/hero.png"

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <img className="header__background" src={ImageHero} alt="" />
      <section className="header__title">
        <h1 className="header__title__h1">less isn't more</h1>
        <div className="header__title__button">
          <a className="header__title__button" href="/#">
            get one
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
