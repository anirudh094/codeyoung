import React from "react";
import "../CSS/About.css";
function About() {
  return (
    <>
      <div className="about-body">
        <h4>
          <span>About</span> Us
        </h4>
        <div className="about-img">
          <img
            src="https://www.codeyoung.com/_nuxt/img/about-us-top.410855a.png"
            alt="about-logo"
          ></img>
        </div>
        <div className="about-description">
          <div>
            <h2>Who are we?</h2>
            <p>
              Codeyoung is a platform where your kids can let their imaginations
              run wild. Students are taught to be creative, innovative and use
              coding in the most unusual way possible.
            </p>
          </div>
          <img
            src="https://www.codeyoung.com/_nuxt/img/who-are-we.8dd40ea.svg"
            alt="about-logo"
          ></img>
        </div>
        <div className="about-elements about-elements-bg1">
          <img src="https://www.codeyoung.com/_nuxt/img/live_interaction.909bf0a.png" alt="about-element"></img>
          <p>Live Interactive coding platform for kids</p>
        </div>
        <div className="about-elements about-elements-bg2">
          <p>Globally active with 20,000+ students from 10+ countries</p>
          <img src="https://www.codeyoung.com/_nuxt/img/global_students.c16eddf.png" alt="about-element"></img>
        </div>
        <div className="about-elements about-elements-bg1">
          <img src="https://www.codeyoung.com/_nuxt/img/iit_alumni.eaa1ca5.png" alt="about-element"></img>
          <p>Founded by IIT alumni</p>
        </div>
        <div className="about-elements about-elements-bg2">
          <p>For kids 5-17 years of age</p>
          <img src="https://www.codeyoung.com/_nuxt/img/5_7_age.88f6411.png" alt="about-element"></img>
        </div>
      </div>
    </>
  );
}

export default About;
