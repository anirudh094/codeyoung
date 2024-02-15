import React from "react";
import "../../CSS/Home.css";
import { Icon } from "semantic-ui-react";
import WorkingCY from "./WorkingCY";
import ProcessCY from "./ProcessCY";
import Navbaar from "../Navbar";
import CYpath from "./CYpath";

function Home() {
  return (
    <>
      <div className="advertise-top-box">
        <img src="https://www.codeyoung.com/_nuxt/img/new_gif.a210875.gif" alt="logo"></img>
        Codeyoung is now starting Math classes for all grades! <a href="/">Click here</a> for enquiry
      </div>

      
      <Navbaar />


      {/* Feature 1 */}
      <div className="home-banner">
        <div className="home-banner-body">
          <h1>Online Live Classes for Kids</h1>
          <p>Introduce your kids to the world of coding and mathematics!</p>
          <button className="book-free-trial-class">
            Book a Free Trial Class
          </button>
          <div className="home-explore">
            <button>
              <img
                src="https://www.codeyoung.com/_ipx/_/coding.png"
                alt="math"
              />
              Explore coding courses <Icon name="angle right" />
            </button>
            <button>
              <img
                src="https://www.codeyoung.com/_ipx/w_1280/math.png"
                alt="math"
              />
              Explore math courses <Icon name="angle right" />
            </button>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="feature2">
        <div>
          <img
            src="https://www.codeyoung.com/_ipx/_/stem-logo1.svg"
            alt="logo"
            className="stem-org"
          />
          Globally Recognized STEM.ORG Accredited Program
        </div>
        <div>
          <img
            src="https://www.codeyoung.com/_ipx/w_1280/GSV.webp"
            alt="logo"
            className="gsv-cup"
          />
          GSV Cup — Elite Top 25
        </div>
      </div>

      {/* Feature 3 */}
      <div className="feature3">
        <div className="feature3-stats">
          <h6>15,000+</h6>
          <p>students taught</p>
        </div>
        <div className="feature3-divider"></div>
        <div className="feature3-stats">
          <h6>50,000+</h6>
          <p>classes taken</p>
        </div>
        <div className="feature3-divider"></div>
        <div className="feature3-stats">
          <h6>500+</h6>
          <p>registered mentors</p>
        </div>
        <div className="feature3-divider"></div>
        <div className="feature3-stats">
          <h6>7,500+</h6>
          <p>projects created</p>
        </div>
        <div className="feature3-divider"></div>
        <div className="feature3-stats">
          <h6>15+</h6>
          <p>country presence</p>
        </div>
      </div>

      <WorkingCY />
      <ProcessCY />
      <CYpath/>
    </>
  );
}

export default Home;
