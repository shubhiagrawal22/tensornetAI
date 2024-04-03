import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import scene from "../assets/scene.png";
import star from "../assets/star-arrow.png";

const Generate = () => {
  return (
    <div className="container-fluid generate-banner">
      <div className="generate-box p-5">
        <div className="generate-header">
          <div className="col-lg-6 text-center generate-heading">
            <h1>
              Turn Your Imagination into <span>Reality</span>
            </h1>
          </div>
          <div className="col-lg-6 mt-5">
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text search-icon" id="basic-addon1">
                    <i className="bi bi-search text-white"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Visualize a peaceful mountain lake...."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={star} alt="" />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="generate-image p-4">
          <div className="col-lg-4 p-2">
            <img src={scene} alt="" />
          </div>
          <div className="col-lg-4 p-2">
            <img src={scene} alt="" />
          </div>
          <div className="col-lg-4 p-2">
            <img src={scene} alt="" />
          </div>
        </div>
        <div className="generate-button mt-3 d-flex justify-content-center">
          <button>
            Generate More <img src={star} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generate;
