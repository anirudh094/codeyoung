import React from "react";
import "../CSS/Home.css";
import { Icon } from "semantic-ui-react";

function Home() {
  return (
    <>
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

    </>
  );
}

export default Home;
