import React from "react"
import {Link} from "react-router-dom"
// instalogo from "../assets/templates/instalogo.jpg"

function Footer(){
return(
    <footer className="footer">
         <div className="footer-container">

      <div className="logo-container">
      <span className="logo">Invocity</span>
      <p className="tagline">Ab Business Karo, Tension Free!</p>
      <div className="social-icons">
     <img src="/" alt="facebook" />
     <img src="/" alt="Instgram" />
     <img src="/" alt="twitter" />
     <img src="/" alt="linkedIn" />
     <img src="/" alt="youtube" />
      </div>
      </div>
      <div className="footer-section ">
        <h3>QUICK LINKS</h3>
        <ul > 
        <li>
                <Link to="/WhyInvocity" className="footer-link">
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
            <Link to="/Invoice Formats" className="footer-link">
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
        <h3>EXPLORE</h3>
        <ul>
            <li>
                <Link to ="/Join Community 🤝" className="footer-link">
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
        <h3>LEGAL</h3>
        <ul>
            <li>
                <Link to ="/Privacy" className="footer-link">
                Privacy
                </Link>
            </li>
            <li>
            <Link to="/Refund" className="footer-link">
            Refund
            </Link>
            </li>
            <li>
                <Link to="/Terms" className="footer-link">
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
      CopyRight &copy;{new Date().getFullYear()}{" "}
         All rights reserved.
      </div>
    </footer>
  );
}

export default Footer 