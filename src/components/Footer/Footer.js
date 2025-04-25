import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  const phoneNumber = "07799525650";
  const email = "nick@promtrecovery.co.uk";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Prompt Recovery" />
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/faqs">FAQ's</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${phoneNumber}`} onClick={handleCallNow}>
              {phoneNumber}
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Prompt Recovery. All rightsreserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
