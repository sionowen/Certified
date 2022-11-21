import React from "react";
import "./Insurance.css";

function Insurance() {
  return (
    <div>
      <div className="row center about">
        <div className="center col-xs-offset-1 col-xs-10">
          <h1 className="about">Insurance</h1>
          <p>
          BCS, Incorporated is a separate organization beyond Certified Anesthesia
          Care whose responsibility is to handle all patient and third party 
          billing processes for Certified Anesthesia Care.
          That includes assisting any patients with any type of billing question.  
          If you have any questions concerning your billing statement from Certified
          Anesthesia Care, please contact BCS who is our Business Office, their staff 
          of Patient Account Representatives are available to you Monday – Friday  
          8.30-4.00 pm CST at 888-278-4126.   Clinical questions should be directed to
           your surgeon or the surgery center where your services were rendered.


          </p>
        </div>
      </div>
      <div className="row flex">
        <div className="left-statement-container col-xs-12">
          <div className="row">
            <div className="center col-sm-12 col-sm-offset-3 col-xs-8 col-xs-offset-2 center ">
              <h2>Billing Statement</h2>
              <p>
              If you are a patient who arrived at our website due to 
              receiving a bill 
              from BCS, here is a link to the secure payment portal
              <br />
              <a href="https://www.bcsconsult.com/billing/" class="text-warning">https://www.bcsconsult.com/billing/</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
