import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Assets/CertifiedLogoFixed.png";
function Header() {
  return (
    <div>
      <div className="row">
        <img
          className="certified-logo col-xs-offset-2 col-xs-8"
          src={Logo}
        ></img>
      </div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-collapse row">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Providers">Providers</Link>
              </li>
              <li className="nav-item">
                <Link to="/Patients">Patients</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
