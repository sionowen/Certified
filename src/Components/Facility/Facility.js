import React from "react";
import "./Facility.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import WorkLife from "../../Assets/WorkLife.jpg";
import Credentialing from "../../Assets/Credentialing.jpg";
import Contractor from "../../Assets/IndependentContractor.jpg";
import Service from "../../Assets/Service.jpg";
import Clinic from "../../Assets/clinic.jpg";

import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image,
} from "pure-react-carousel";

let setCarouselHeight = () => {
  if (window.innerWidth < 500) {
    return 55;
  } else if (window.innerWidth < 2250) {
    return 40;
  } else if (window.innerWidth < 3000) {
    return 30;
  } else {
    return 25;
  }
};

function Facility() {
  // React.useEffect(() => {
  //   function handleResize() {
  //     console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
  //     setCarouselHeight(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);
  // });

  return (
    <div>
      <div className="row">
        <div className="col-sm-offset-1 col-sm-10 col-xs-12">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={setCarouselHeight()}
            totalSlides={4}
            interval={7000}
            isPlaying={true}
          >
            <Slider>
              <Slide index={0}>
                <p className="slidebox-content">
                  Best-in-industry scheduling flexibility to support work/life
                  balance
                </p>
                <Image src={Clinic} />
              </Slide>
              <Slide index={1}>
                <p className="slidebox-content">
                  Timely credentialing so you can start your role seamlessly
                </p>

                <Image src={Credentialing} />
              </Slide>
              <Slide index={2}>
                <p className="slidebox-content">
                  White glove assistance in business formation to establish
                  yourself as an independent contractor
                </p>

                <Image src={Contractor} />
              </Slide>
              <Slide index={3}>
                <p className="slidebox-content">
                  A service oriented partner that values your contribution
                </p>

                <Image src={Service} />
              </Slide>
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </div>
      </div>
      <div className="row">
        <h1 className="center"></h1>
        <p className="col-xs-8 col-xs-offset-2 center">
        Certified Anesthesia Care Inc. (Certified) is a full-service 
        Midwest Anesthesia Company that can do anything from 
        providing PRN assistance to taking over your anesthesia 
        department, managing billing process. Our process for 
        creating custom solutions for our facility partners 
        ensures that your anesthesia needs will be satisfied 
        with the highest possible acuity, safety, and consistency.

        Certified partners with hospitals, surgical and 
        specialty centers, dental offices and ASC’s to 
        deliver quality anesthesia care. Whatever your needs 
        are we can provide the gold standard of care in the 
        billing modality that is most effective for your 
        business. Please reach out for an inquiry or initial 
        conversation or send us a more detailed RFP to 
        msingh@cac.health!
        </p>
      </div>
    </div>
  );
}


export default Facility;
