import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as GiHamburgerMenu from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 460) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <i className="fas fa-times" />
            ) : (
              <GiHamburgerMenu.GiHamburgerMenu />
            )}
          </div>
          <div
            className={`close-icon ${click ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            <i className="fas fa-times" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/education"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
          </ul>
          {button}
          <div className="btn-resume">
            <a href="https://docdro.id/F5vvA30">RESUME</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
