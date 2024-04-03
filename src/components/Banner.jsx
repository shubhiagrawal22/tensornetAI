import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="container-fluid main-banner">
      <div className="main-banner-con">
        <div className="col-lg-8 main-content">
          <h1>
            A JOURNEY THROUGH <span>
            <ReactTyped
              strings={[
                "IMAGINATION",
                "IMAGINATION",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
          </h1>
          <p>
            Harnessing the power of artificial intelligence, this innovative
            technology <br /> utilizes advanced algorithms to autonomously create
            visually compelling <br /> images based on input parameters.
          </p>
          <div className="main-button">
            <button>Generate Models</button>
            <button>Open DAPP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
