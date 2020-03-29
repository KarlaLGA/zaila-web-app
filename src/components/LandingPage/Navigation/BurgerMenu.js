import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu = () => {
  const toggleBurger = useSelector(state => state.user.burgerMenu);

  const nameRef = useRef(null);
  const dispatch = useDispatch();

  const handleBurgerMenu = e => {
    console.log(nameRef.current);
    dispatch({ type: "BURGER" });
  };

  const handleCloseBurgerMenu = e => {
    dispatch({ type: "CLOSE_BURGER" });
  };

  return (
    <div className="icon-button">
      <p className="burger-icon" onClick={handleBurgerMenu}>
        {toggleBurger ? (
          <FontAwesomeIcon icon={faTimes} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </p>
      <div className="zindex"></div>
      <div className={toggleBurger ? "burger-menu open" : "burger-menu"}>
        <Link
          smooth
          to="/#features"
          className="navigation-item"
          onClick={handleCloseBurgerMenu}
        >
          Features
        </Link>
        <Link
          smooth
          to="/#team"
          className="navigation-item"
          onClick={handleCloseBurgerMenu}
        >
          Team
        </Link>
        <Link
          smooth
          to="/#contact"
          className="navigation-item"
          onClick={handleCloseBurgerMenu}
        >
          Contact
        </Link>
        <Link
          smooth
          to="/#download"
          className="navigation-item"
          onClick={handleCloseBurgerMenu}
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
