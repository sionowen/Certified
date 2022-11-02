import React from "react";
import "./Main.css";
import WhatWeDo from "../../Assets/Anesthetic2.jpg";
import Hospital from "../../Assets/Hospital.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainContent() {
  return (
    <main>
      <div className="row img-container">
        <div className="bg-img col-xs-10 col-xs-offset-1"></div>
        <div className="bg-text">
          <h1 className="header">
            Rest Easy With Certified Anesthesia Services
          </h1>
          <p>
            We are a full-service anesthesia company that tailors individualized
            anesthesia delivery services to a facility’s particular needs. Our
            unique approach to anesthesia delivery ensures our hospitals,
            ambulatory surgery centers, and office-based anesthesia locations
            have the highest quality of care while maintaining value to our
            facilities. Our technologically advanced scheduling system confirms
            schedules to be confirmed more than a month in advance yet still
            allows for flexibility on behalf of the facility to make changes as
            needed. Our hand-selected pool of qualified CRNAs ensures reliable
            and dependable care. We are experts in providing a smooth transition
            of anesthesia services without disruption to the facility or
            patients.
          </p>
        </div>
      </div>
      <div className="row color-border"></div>
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2 margin-bottom">
          <h2 className="margin-top center sub-header">
            "It starts with a call and ends with a partnership for success"
          </h2>
          <p className="margin-top center">
            We know each facility has its own unique needs and that a one size
            fits all approach to anesthesia delivery is not what is best for
            facility or patients. We start with an evaluation of your current
            services and develop a staffing plan based on your facility’s goals.
            We work with both established groups and individual anesthesia
            groups. No matter the need or model, Certified provides anesthesia
            services you can sleep through.
          </p>
        </div>
      </div>
      <div className="row color-border"></div>
      <div className="row bullet-section">
        <div className="col-xs-12 col-sm-8 col-md-7 col-xl-6">
          {/* <img className="what-we-do" src={WhatWeDo}></img> */}
          <LazyLoadImage className="what-we-do" src={WhatWeDo} />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-md-offset-1 center offset-text-container">
          <h2 className="offset-title">What We Do</h2>
          <ul className="bullets">
            <li className="bullet">Long term and short term staffing needs</li>
            <li className="bullet">
              Recruiting, managing, and maintaining anesthesia staff
            </li>
            <li className="bullet">Scheduling</li>
            <li className="bullet">Comprehensive billing service</li>
            <li className="bullet">Credentialing and compliance</li>
            <li className="bullet">
              24/7 Support team dedicated to ensuring your facilities’ success
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xs-12 col-sm-8 col-md-7 col-xl-6 phone-show">
        {/* <img className="what-we-do" src={Hospital}></img> */}
        <LazyLoadImage className="what-we-do" src={Hospital} />
      </div>
      <div className="row bullet-section">
        <div className="col-xs-12 col-sm-4 col-md-4 col-md-offset-1 center offset-text-container">
          <h2 className="offset-title">Who We Serve</h2>
          <ul className="bullets">
            <li className="bullet">Hospitals</li>
            <li className="bullet">Ambulatory Surgery Centers</li>
            <li className="bullet">Plastic Surgery Centers</li>
            <li className="bullet">Pain Management Centers</li>
            <li className="bullet">Dental Clinics</li>
            <li className="bullet">Office based Anesthesia</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7 col-xl-6 phone-hide">
          {/* <img className="what-we-do" src={Hospital}></img> */}
          <LazyLoadImage className="what-we-do" src={Hospital} />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
