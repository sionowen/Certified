import React from "react";
import "./Insurance.css";

function Insurance() {
  return (
    <div>
      <div className="row center about">
        <div className="col-xs-offset-1 col-xs-10">
          <h1 className="about">About Us</h1>
          <p>
            Certified Anesthesia Care Inc. (Certified) is a locally owned
            company that has been providing safe, dependable, high quality
            anesthesia care in the Twin Cities and Central Minnesota since 1989.
            Certified has a strong history of leadership by anesthesia business
            professions who understand today’s evolving healthcare market. Our
            collective experience spans more than 90 years of anesthesia
            delivery and business which allows us to provide solutions to
            comprehensive anesthesia care with a hands on approach. Michael
            Singh MSN, CRNA, APRN, CEO currently manages Certified and is guided
            by the core values of exceptional services and ethical business
            practice. Certified’s goal is to provide facilities with a quality
            full-service anesthesia model. We are committed to providing quality
            Certified Registered Nurse Anesthetists to surgical facilities
            across Minnesota to meet the superior standards patients should
            expect in anesthesia professionals.
          </p>
        </div>
      </div>
      <div className="row center about proven">
        <div className="col-xs-offset-1 col-xs-10">
          <h3 className="record">A Proven Record</h3>
          <p>
            Our success is proven in the longevity and loyalty of facilities who
            use Certified, and in our core values. Certified Anesthesia Care Inc
            means your facility is getting the highest level of quality in
            anesthetic care. Our long-standing history of delivering
            exceptional, dependable staffing and patient care in a
            cost-effective manner is validated by our references. Feel free to
            contact us!
          </p>
        </div>
      </div>
      <div className="row flex">
        <div className="left-statement-container col-xs-6">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 center ">
              <h2>Mission Statement</h2>
              <p>
                To connect facilities with the highest quality providers in the
                most flexible and reliable way.
              </p>
            </div>
          </div>
        </div>
        <div className="right-statement-container col-xs-6">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 center ">
              <h2>Vision Statement</h2>
              <p>
                Certified aims to build and grow long term partnerships that can
                attract, retain, and engage healthcare professionals and
                facilities through a comprehensive and pleasant scheduling
                experience which prioritizes consistency, flexibility, and
                quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
