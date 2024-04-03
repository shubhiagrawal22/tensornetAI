import React from "react";
import about from "../assets/about-2.png";
import leaf from "../assets/mdi_leaf.png";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className="row p-5">
        <div className="col-lg-6 about-image">
          <img src={about} alt="" />
        </div>
        <div className="col-lg-6 about-content">
          <h5>About us</h5>
          <h1>
            Unveiling Our Journey in <span>Image Generation</span>
          </h1>
          <p>
            we are passionate about harnessing the power of technology to unlock
            creativity and transform ideas into captivating visual experiences.
            Our journey began with a vision to empower individuals and
            businesses alike to express themselves through imagery in ways that
            are innovative, intuitive, and impactful. Guided by a team of
            dedicated professionals, we strive to provide an inclusive platform
            where imagination knows no bounds.
          </p>
          <div className="numbers row">
            <div className="number-card col-lg-4 col-6">
                <h1>10,000+</h1>
                <p>Users</p>
            </div>
            <div className="number-card col-lg-4 col-6">
                <h1>20,000+</h1>
                <p>Images Generated</p>
            </div>
            <div className="number-card col-lg-4 col-6">
                <h1>10+</h1>
                <p>Years</p>
            </div>
          </div>
          <div className="about-button">
            <button>Know More <img src={leaf} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
