import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid main-banner">
      <div className="main-banner-con">
        <div className="col-lg-6 main-content">
          <h1>
            A JOURNEY THROUGH <span>IMAGINATION</span>
          </h1>
          <p>
            Harnessing the power of artificial intelligence, this innovative
            technology utilizes advanced algorithms to autonomously create
            visually compelling images based on input parameters.
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
