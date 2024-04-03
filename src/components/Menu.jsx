import React from "react";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import menu4 from "../assets/menu-4.png";

const Menu = () => {
  return (
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
  );
};

export default Menu;
