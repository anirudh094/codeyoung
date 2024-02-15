import React from "react";
import "../../CSS/CYpath.css";

function CYpath() {
  return (
    <>
      <div className="cypath-body">
        <div className="cypath-body-content">
          <h2>The Codeyoung Learning Path for Kids Coding</h2>
          <p>
            Our courses are well distributed and tailored for different age
            groups. There is something for everyone!.
          </p>
        </div>
        <img
          src="https://www.codeyoung.com/_ipx/w_1280/learning-path.webp"
          alt="path-img"
        ></img>
      </div>

      <div className="cystem-body">
        <img
          src="https://www.codeyoung.com/_ipx/w_1280/STEM.svg"
          alt="path-img"
          className="cystem-body-img"
        ></img>
        <div>
          <div className="cystem-body-content">
            <img
              src="https://www.codeyoung.com/_ipx/w_1280/check-mark.svg"
              alt="tick-icon"
              className="tick-icon"
            ></img>
            <p>
              Globally Recognized Stem Accredited Program. Check{" "}
              <a href="/">Here</a>
            </p>
          </div>
          <div className="cystem-body-content">
            <img
              src="https://www.codeyoung.com/_ipx/w_1280/check-mark.svg"
              alt="tick-icon"
              className="tick-icon"
            ></img>
            <p>
              Carefully curated curriculum customized according to age groups
            </p>
          </div>
          <div className="cystem-body-content">
            <img
              src="https://www.codeyoung.com/_ipx/w_1280/check-mark.svg"
              alt="tick-icon"
              className="tick-icon"
            ></img>
            <p>Top 1% mentors with the patience and ability to teach kids</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CYpath;
