import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import symbol from "../assets/Symbol.png";
import profile from "../assets/profile.png";

const News = () => {
  return (
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
  );
};

export default News;
