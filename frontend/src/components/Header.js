import React, { useState } from "react";
import Logo from "../assets/brand-images/u.png";
import SocialMedia from "./SocialMediaLinks.js";
import DonationsButton from "./DonationsButton.js";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <header>
      <div className="header-top">
        <ul>
          <li>
            <a
              href="https://open.spotify.com/playlist/417SuTqYaefaB7wYpCkw3B?si=f0a4d5afd1a245bd"
              target="_blank"
            >
              Listen
            </a>
          </li>
          <li>
            <DonationsButton />
          </li>
        </ul>
      </div>

      <nav className="nav" id="nav">
        <div className="nav-container">
          <div className="logo-container">
            <a
              className="header-logo"
              onClick={removeActive}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                src={Logo}
                alt="text that says Nazirite Radio"
                className="header-logo-img"
              />
            </a>
          </div>

          {/* <ul className={`nav-list ${isActive ? 'active' : ''}`}>
          <li className="animated scaleCenter">
            <Link
              onClick={removeActive}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              className="animated scaleCenter"
              onClick={removeActive}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link
              className="animated scaleCenter"
              onClick={removeActive}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul> */}
        </div>

        {/* <div
        className={`hamburger ${isActive ? 'active' : ''}`}
        onClick={toggleActiveClass}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> */}
      </nav>
      <div className="header-social-media app-container">
        <SocialMedia className="header-social-media-links" />
      </div>
    </header>
  );
}

export default Header;
