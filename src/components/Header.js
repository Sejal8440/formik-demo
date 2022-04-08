import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <div className="logo">
              <Link to="/">
                <img src="https://html.hauper.info/targus/v2/images/targus-logo-dark.svg" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="navigation">
            <ul className="nav-item">
              <li>
                <Link to="/documentation">Documentaion</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <Link to="/contact">Contact Us</Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
