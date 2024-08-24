import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <hr className="separator-line" />
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Invocity" />
          <p className="tagline">Ab Business Karo, Tension Free!</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <div className="footer-section ">
          <h2>QUICK LINKS</h2>
          <ul>
            <li>
              <Link to="/aboutus" className="footer-link">
                Why Invocity
              </Link>
            </li>

            <li>
              <Link to="/E-Waybill" className="footer-link">
                E-Waybill
              </Link>
            </li>
            <li>
              <Link to="/E-Invoice" className="footer-link">
                E-Invoice
              </Link>
            </li>
            <li>
              <Link to="/templates" className="footer-link">
                Invoice Formats
              </Link>
            </li>
            <li>
              <Link to="/Swipe for Accountants" className="footer-link">
                Swipe for Accountants
              </Link>
            </li>
            <li>
              <Link to="/FAQs" className="footer-link">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/Tutorials" className="footer-link">
                Tutorials
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>EXPLORE</h2>
          <ul>
            <li>
              <Link to="/Join Community 🤝" className="footer-link">
                Join Community 🤝
              </Link>
            </li>
            <li>
              <Link to="/Product Updates 🚀" className="footer-link">
                Product Updates 🚀
              </Link>
            </li>
            <li>
              <Link to="/Tools" className="footer-link">
                Tools
              </Link>
            </li>
            <li>
              <Link to="/Explore GST" className="footer-link">
                Explore GST
              </Link>
            </li>
            <li>
              <Link to="/Tech" className="footer-link">
                Tech
              </Link>
            </li>
            <li>
              <Link to="/Trending" className="footer-link">
                Trending
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>LEGAL</h2>
          <ul>
            <li>
              <Link to="/terms" className="footer-link">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/Refund" className="footer-link">
                Refund
              </Link>
            </li>
            <li>
              <Link to="/terms" className="footer-link">
                Terms
              </Link>
            </li>
            <li>
              <Link to="Referral Program" className="footer-link">
                Referral Program
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Invocity Private Limited. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
