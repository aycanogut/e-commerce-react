import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconHamburger from "../assets/icons/hamburger.svg";
import IconBasket from "../assets/icons/shop.svg";
import IconClose from "../assets/icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAction, logoutAction } from "../redux/actions/authActions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const getCurrentUser = () => dispatch(currentUserAction());
  const { user } = useSelector((state) => state.auth);
  const logout = () => dispatch(logoutAction());

  const handleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getCurrentUser();
  }, [user]);

  return (
    <nav className="nav">
      <Link to="/">
        <span className="nav__brand">More.</span>
      </Link>
      <ul className={`nav__list ${isOpen ? "nav__hide" : "nav__show"}`}>
        <li onClick={logout} className="nav__list__item">
          {user && "logout"}
        </li>
        <li className="nav__list__item" onClick={handleHamburgerMenu}>
          <img src={IconHamburger} alt="" />
        </li>
        <li className="nav__list__item">
          <Link to="/payment">
            <img src={IconBasket} alt="" />
          </Link>
        </li>

      </ul>
      <ul className={`nav__list--hidden ${isOpen ? "nav__show" : "nav__hide"}`}>
        <li className="nav__list--hidden-item">
          <Link to="/">shop</Link>
        </li>
        <li className="nav__list--hidden-item">
          <Link to="/favorites">favorites</Link>
        </li>
        <li className="nav__list--hidden-item">
          <Link to="/payment">payment</Link>
        </li>
        {user ? (
          <li onClick={logout} className="nav__list--hidden-item">
            logout
          </li>
        ) : (
          <>
            <li className="nav__list--hidden-item">
              <Link to="/login">login</Link>
            </li>
            <li className="nav__list--hidden-item">
              <Link to="/signup">sign up</Link>
            </li>
          </>
        )}

        <li className="nav__list--hidden-item" onClick={handleHamburgerMenu}>
          <img className="nav__list--hidden-item" src={IconClose} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
