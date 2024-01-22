import React from 'react';
import Logo from '../assets/brand-images/u.png';
import SocialMediaLinks from './SocialMediaLinks.js';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-top">
          <img
            src={Logo}
            alt="Phillip Harden's logo. The letter PH inside of a circle"
            className="footer-logo"
          />
        </div>
    

        <div className="copyright-div">
          <p className="copyright">
            Copyright &copy; {currentYear} Underground CHH | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
