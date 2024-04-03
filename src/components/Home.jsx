import React from 'react'
import Header from './Header';
import { ReactTyped } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import scene from "../assets/scene.png";
import star from "../assets/star-arrow.png";
import about from "../assets/about-2.png";
import leaf from "../assets/mdi_leaf.png";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import menu4 from "../assets/menu-4.png";
import gcloud from '../assets/Logo-Google-Cloud.png';
import aws from '../assets/aws.png';
import nvd from '../assets/nvdia.png';
import google from '../assets/Google_2015_logo.png';
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import symbol from "../assets/Symbol.png";
import profile from "../assets/profile.png";
import Footer from './Footer';

const Home = () => {
  return (
    <>
        <Header />

        {/* banner */}

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

    {/* Cards */}

    <div className="container-fluid p-5 card-banner">
      <div className="cards p-5">
        <div className="card-content card1 col-lg-4 px-5">
          <h1>What we Do</h1>
          <p className="text-center">
            we do all likd if tecjjjlklkkljust test and see how we rool here at
            mmekut tech house
          </p>
        </div>
        <div className="card-content card1 col-lg-4 px-5">
          <h1>Our Vision</h1>
          <p className="text-center">
            we do all likd if tecjjjlklkkljust test and see how we rool here at
            mmekut tech house
          </p>
        </div>
        <div className="card-content col-lg-4 px-5">
          <h1>Our Mission</h1>
          <p className="text-center">
            we do all likd if tecjjjlklkkljust test and see how we rool here at
            mmekut tech house
          </p>
        </div>
      </div>
    </div>

    {/* Cards */}

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

    {/* About */}

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

    {/* Menu */}

    <div className="container-fluid menu">
      <div className="row p-5">
        <div className="col-lg-3 menu-content">
          <div color="menu-image">
            <img src={menu1} alt="" />
          </div>
          <h1>We Analyzing Experience</h1>
          <p>
            Easy to grasp, rewarding to perfect. Be proficient in producing
            exquisite content quickly and efficiently.
          </p>
        </div>
        <div className="col-lg-3 menu-content">
          <div color="menu-image">
            <img src={menu2} alt="" />
          </div>
          <h1>New Thinking For Result</h1>
          <p>
            Easy to grasp, rewarding to perfect. Be proficient in producing
            exquisite content quickly and efficiently.
          </p>
        </div>
        <div className="col-lg-3 menu-content">
          <div color="menu-image">
            <img src={menu3} alt="" />
          </div>
          <h1>From Concept To Final</h1>
          <p>
            Easy to grasp, rewarding to perfect. Be proficient in producing
            exquisite content quickly and efficiently.
          </p>
        </div>
        <div className="col-lg-3 menu-content">
          <div color="menu-image">
            <img src={menu4} alt="" />
          </div>
          <h1>New Creative Horizons</h1>
          <p>
            Easy to grasp, rewarding to perfect. Be proficient in producing
            exquisite content quickly and efficiently.
          </p>
        </div>
      </div>
    </div>

    {/* Providers */}

    <div className='container-fluid provider'>
        <div className='container'>
            <div className="text-center provider-content">
                <p>Our Trusted Service Partners</p>
                <h1>Providers & Collaborators</h1>
            </div>
            <div className="row provider-image p-3">
                <div className="col-lg-2 col-6 pro-img">
                    <img src={gcloud} alt="" />
                </div>
                <div className="col-lg-2 col-6 pro-img">
                    <img src={aws} alt="" />
                </div>
                <div className="col-lg-2 col-6 pro-img">
                    <img src={nvd} alt="" />
                </div>
                <div className="col-lg-2 -col-6 pro-img">
                    <img src={google} alt="" />
                </div>
                <div className="col-lg-2 col-6 pro-img">
                    <img src={gcloud} alt="" />
                </div>
            </div>
        </div>
    </div>

    {/* News */}

    <div className="container-fluid news">
      <div className="container">
        <div className="text-center news-content">
          <p>Latest Posts</p>
          <h1>News & Articles</h1>
        </div>
        <div className="news-cards">
          <div className="col-lg-4 news-card1 bg-black mx-3">
            <div className="news-image">
              <img src={card1} alt="" />
            </div>
            <div className="news-card-content text-white">
              <p>
              <img src={profile} alt="" /> Caroline Forsey
              </p>
              <h2>The Top Benefits of AI for Marketers, State of AI Data</h2>
              <span><i className="bi bi-calendar-week"></i> 25 June 2023</span>
              <span><img src={symbol} alt="" /> 0 Comments</span>

            </div>
          </div>
          <div className="col-lg-4 news-card1 bg-black mx-3">
            <div className="news-image">
              <img src={card2} alt="" />
            </div>
            <div className="news-card-content text-white">
              <p>
              <img src={profile} alt="" /> Caroline Forsey
              </p>
              <h2>The Top Benefits of AI for Marketers, State of AI Data</h2>
              <span><i className="bi bi-calendar-week"></i> 25 June 2023</span>
              <span><img src={symbol} alt="" /> 0 Comments</span>

            </div>
          </div>
          <div className="col-lg-4 news-card1 bg-black mx-3">
            <div className="news-image">
              <img src={card3} alt="" />
            </div>
            <div className="news-card-content text-white">
              <p>
              <img src={profile} alt="" /> Caroline Forsey
              </p>
              <h2>The Top Benefits of AI for Marketers, State of AI Data</h2>
              <span><i className="bi bi-calendar-week"></i> 25 June 2023</span>
              <span><img src={symbol} alt="" /> 0 Comments</span>

            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer />
        
    </>
  )
}

export default Home