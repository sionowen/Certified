import React from "react";
import "./Providers.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import WorkLife from "../../Assets/WorkLife.jpg";
import Credentialing from "../../Assets/Credentialing.jpg";
import Contractor from "../../Assets/IndependentContractor.jpg";
import Service from "../../Assets/Service.jpg";
import ResumeUpload from "../ResumeUpload/ResumeUpload";

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

function Providers() {
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
                <Image src={WorkLife} />
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
        <h1 className="center">What you can expect</h1>
        <p className="col-xs-8 col-xs-offset-2 center">
          Certified Anesthesia Care was founded by anesthesia providers who
          understand the importance of transparency, honesty, and trust. We know
          the tremendous value of our healthcare providers and the superior care
          they deliver to patients because we’ve been there too. We strive for a
          mutually beneficial relationship between Certified and our health care
          professionals. Our CRNAs, anesthesiologists, and other providers stick
          with Certified because they know they can rely on us for quality
          placements and technologically advanced scheduling software to help
          them reach their goals. We deliver the best contracts, scheduling,
          credentialing, and service to our independent contractors. By putting
          our providers first, our providers can put their patients first.
        </p>
        <br />
      </div>
    <ResumeUpload />
    </div>
  );
}

export default Providers;
