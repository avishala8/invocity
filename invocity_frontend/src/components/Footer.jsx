import React from "react"
import {Link} from "react-router-dom"
//import { Navbar} from "react-bootstrap";

function Footer(){
return(
    <footer className="footer">
      <div className="logo">
        {/*<img src="/path-to-swipe-logo.png" alt="Swipe Logo" />*/}
      </div>
      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <ul > 
        <li>
                <Link to="/WhySwipe" className="swipe">
                 Why Swipe?
                 </Link>
        </li>

        <li>
                 <Link to="/E-Waybill" className="swipe">
                 E-Waybill
                 </Link>
            </li>
            <li>
                 <Link to="E-Invoice" className="swipe">
                 E-Invoice
                 </Link>
             </li>
          <li>
            <Link to="Invoice Formats" className="swipe">
            Invoice Formats
            </Link>
          </li>
          <li>
            <Link to="Swipe for Accountants" className="swipe">
            Swipe for Accountants
            </Link>
          </li>
          <li>
            <Link to="FAQs" className="swipe">
            FAQs
            </Link>
          </li>
          <li>
            <Link to="Tutorials" className="swipe">
            Tutorials
            </Link>
          </li>

        </ul>
      </div>

      <div className="quick-links">
        <h3>LEGAL</h3>
        <ul>
            <li>
                <Link to ="Privacy" className="swipe">
                Privacy
                </Link>
            </li>
            <li>
            <Link to="Refund" className="swipe">
            Refund
            </Link>
            </li>
            <li>
                <Link to="Terms" className="swipe">
                Terms
                </Link>
            </li>
        <li>
            <Link to="Referral Program" className="swipe">
            Referral Program
            </Link>
        </li>
        </ul>
        </div>

      <div className="footer-bottom">
      CopyRight &copy;{new Date().getFullYear()}{" "}
         All rights reserved.
      </div>
    </footer>
  );
}

export default Footer 