import React from "react";
import "./Patients.css";

function Patients() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-xs-12 center patients">
          <h1>Patients</h1>
          <p>
            Our patients can expect the highest level of professional and
            experience care from Certified Anesthesia. Our anesthesia delivery
            is based on current, up to date, evidence-based practice, community
            standards of care, and our years of combined clinical practice. We
            believe in patient centered care. We appreciate our patients’ trust
            in us, and we deliver the highest quality anesthesia care to our
            patients. We strive to exceed your expectation while maintaining the
            safest care.
          </p>
        </div>
      </div>
      <div className="row flex">
        <div className="col-sm-4 col-sm-offset-2 col-xs-6 center patient-container-left">
          <h3>Billing</h3>
          <p>If you have any questions about billing please contact.</p>
          <p>BCS at 400 East 10th Street Waconia, MN 55387-4552</p>
          <p className="wrap">Lee@BCSConsult.com</p>
          <p>1-800-433-1439</p>
          <p>1-952-442-9770</p>
          <p>1-952-442-7512</p>
        </div>
        <div className="col-sm-4 col-xs-6 patient-container-right center">
          <h3>Anesthesia</h3>
          <p>
            If you have any questions about Certified Anesthesia Care or
            Anesthesia services please contact Mike Singh
          </p>
          <p>5751 Long Brake Circle S. Edina MN 55439</p>
          <p className="wrap">msingh@cac.health</p>
          <p>651-257-2251</p>
          <p>320-309-1161</p>
        </div>
      </div>
    </div>
  );
}

export default Patients;
