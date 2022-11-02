import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-xs-12 col-sm-4 phone-hide">
          <h3>Email</h3>
          <p className="footer-text-flex">msingh@cac.health</p>
          <p className="footer-text-flex">jnelson@cac.health</p>
          <p className="footer-text-flex">sowen@cac.health</p>
        </div>
        <div className="col-xs-12 col-sm-4 phone-hide">
          <h3>(651)257-2251</h3>
          <p className="footer-text-flex">Business Hours</p>
          <p className="footer-text-flex">Mon-Fri 8AM to 4PM</p>
        </div>
        <div className="col-xs-12 col-sm-4 phone-show">
          <h3>(651)257-2251</h3>
          <p className="footer-text-flex">Business Hours</p>
          <p className="footer-text-flex">Mon-Fri 8AM to 4PM</p>
        </div>
        <div className="col-xs-12 col-sm-4 phone-show">
          <h3>Email</h3>
          <p className="footer-text-flex">msingh@cac.health</p>
          <p className="footer-text-flex">jnelson@cac.health</p>
          <p className="footer-text-flex">sowen@cac.health</p>
        </div>

        <div className="col-xs-1 col-xs-offset-1 phone-hide">
          <p>
            <Link to="/" className="a-fix">
              Home
            </Link>
          </p>
          <p>
            <Link to="Patients" className="a-fix">
              Patients
            </Link>
          </p>
          <p>
            <Link to="Providers" className="a-fix">
              Providers
            </Link>
          </p>
          <p>
            <Link to="about" className="a-fix">
              About Us
            </Link>
          </p>
          <p>
            <Link to="Contact" className="a-fix">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
