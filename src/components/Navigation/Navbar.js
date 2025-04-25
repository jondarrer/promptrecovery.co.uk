import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const phoneNumber = "07799525650";

  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > 50;

      if (shouldShrink !== isShrunk) {
        setIsShrunk(shouldShrink);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShrunk]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={`navbar ${isShrunk ? "shrink" : ""}`}>
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>

        <div className="desktop-menu">
          <Link className="home-link" to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/faqs" onClick={closeMenu}>
            FAQ's
          </Link>
          <Link to="/reviews" onClick={closeMenu}>
            Reviews
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </div>

        <div className="call-button">
          <a href={`tel:${phoneNumber}`}>CALL NOW</a>
        </div>

        <div
          className={`burger-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          ref={burgerRef}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>

      <div
        className={`mobile-menu ${isMenuOpen ? "show" : ""}`}
        style={{ top: isShrunk ? "80px" : "120px" }}
        ref={menuRef}
      >
        <Link className="home-link" to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/faqs" onClick={closeMenu}>
          FAQ's
        </Link>
        <Link to="/reviews" onClick={closeMenu}>
          Reviews
        </Link>
        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>
        <a href={`tel:${phoneNumber}`} className="mobile-call">
          CALL NOW
        </a>
      </div>
    </>
  );
}

export default Navbar;
