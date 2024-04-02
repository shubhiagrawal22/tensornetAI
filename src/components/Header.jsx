import React from "react";
import logo from "../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="nav-container d-flex px-5">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="" />
            <p>TensorNet AI</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  Solutions
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  Roadmaps
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  DAPP
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  GPU TPU
                </a>
              </li>
            </ul>
            <div className="d-flex nav-buttons">
              <button className="first-btn me-3" type="submit">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
