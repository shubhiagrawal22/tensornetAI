import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-lg-4 col-6 footer-heading">
          <div className="footerlogo"><a className="footer-logo" href="index.html">
            <img src={logo} alt="" />
            <p>TensorNet AI</p>
          </a></div>
          <p>Copyright © 2023 TensorNet AI. All Rights Reserved.</p>
          <h6>Social Media</h6>
          <div className="social-icons">
            <a href="/"><i className="bi bi-facebook"></i></a>
            <a href="/"><i className="bi bi-twitter"></i></a>
            <a href="/"><i className="bi bi-instagram"></i></a>
            <a href="/"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-list">
          <h1>About</h1>
          <div className="list-items">
            <li>
              <a href="/">About Company</a>
            </li>
            <li>
              <a href="/">Our Solutions</a>
            </li>
            <li>
              <a href="/">Our Best Services</a>
            </li>
            <li>
              <a href="/">Professional Team</a>
            </li>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-list mobile-footer">
          <h1>Address</h1>
          <div className="list-items">
            <li>
              <a href="https://www.google.com/maps/search/551+Swastik+Street,+Mumbai+Maharashtra/@19.0833189,72.5515009,10z/data=!3m1!4b1?entry=ttu">
              <i className="bi bi-geo-alt-fill"></i> 551 Swastik Street, Mumbai
              Maharashtra 3053 India </a>
            </li>
            <li>
              <a href="tel:0000000000"><i className="bi bi-telephone-fill"></i> +91 000 000 0000</a>
            </li>
            <li>
              <a href="mailto:info@aiworkning.com"> <i className="bi bi-envelope-fill"></i> info@aiworkning.com</a>
            </li>
          </div>
        </div>

        <div className="col-lg-4 col-9 footer-list footer-signup">
            <h1>
                Newsletter Signup
            </h1>
            <form className="form-inline footer-input-group">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Enter Your Email Address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-append footer-button">
                  <span className="input-group-text" id="basic-addon1">
                    Send
                  </span>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
