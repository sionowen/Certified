import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="row center">
      <div className="col-xs-6 col-xs-offset-3 ">
        <h1>Contact Us</h1>
        <p>Certified Anesthesia Care Inc.</p>
        <p>Address: 5751 Long Brake Circle, Edina MN 55439</p>
        <p>CEO: Michael Singh MSN, CRNA, APRN. </p>
        <p>Business: 651-257-2251</p>
        <p>Cell: 320-309-1161</p>
        <p>Fax: 866-726-9153</p>
        <p>Business Manager: Jennifer Nelson</p>
        <p>Email: Jnelson@cac.health</p>
        <div className="col-sm-4 col-sm-offset-2 col-xs-6 center patient-container-left">
        <h3>Social media</h3>
        <a href="https://www.linkedin.com/company/certified-anesthesia-care-inc/about/" class="text-warning">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
