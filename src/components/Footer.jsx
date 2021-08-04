import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__left">
          <h2 className="footer__title">need help with anything?</h2>
          <ul className="footer__icons">
            <li className="footer__icons__item">
              <img className="footer__icons__item__icon" src="" alt="" />
            </li>
            <li className="footer__icons__item">
              <img className="footer__icons__item__icon" src="" alt="" />
            </li>
            <li className="footer__icons__item">
              <img className="footer__icons__item__icon" src="" alt="" />
            </li>
            <li className="footer__icons__item">
              <img className="footer__icons__item__icon" src="" alt="" />
            </li>
          </ul>
        </section>
        <section className="footer__links">
          <div className="footer__column">
            <header className="footer__links__header">home</header>
            <ul className="footer__links__list">
              <li className="footer__links__list__item">
                <a href="">what is it</a>
              </li>
              <li className="footer__links__list__item">
                <a href="">how its works</a>
              </li>
              <li className="footer__links__list__item">
                <a href="">why it's important</a>
              </li>
              <li className="footer__links__list__item">
                <a href="">pricing</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <header className="footer__links__header">company</header>
            <ul className="footer__links__list">
              <li className="footer__links__list__item">
                <a href="">about</a>
              </li>
              <li className="footer__links__list__item">
                <a href="">blog</a>
              </li>
              <li className="footer__links__list__item">
                <a href="">careers</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <header className="footer__links__header">legal</header>
            <ul className="footer__links__list">
              <li className="footer__links__list__item">
                <a href="">terms & conditions</a>
              </li>
              <li className="footer__links__list__item">
                <a href="">privacy & policy </a>
              </li>
              <li className="footer__links__list__item">
                <a href="">contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <header className="footer__links__header">help</header>
            <ul className="footer__links__list">
              <li className="footer__links__list__item">
                <a href="">faqs</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
