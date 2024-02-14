import React from "react";
import "../CSS/Process.css";

function ProcessCY() {
  return (
    <div className="process-body">
      <h3>A Simple 3-Step Process To Enroll Your Kid To Any Coding Course</h3>
      <div className="process-container">
        <div className="process-container-component">
          <img
            src="https://www.codeyoung.com/_ipx/w_1280/choose.svg"
            alt="logo"
          ></img>
          <div className="process-container-component-element">
            <div className="process-container-component-element-serial">1</div>
            <div>
              <h6>Select A Course</h6>
              <p>
                Choose a course of your choice based on the child's age/grade
              </p>
            </div>
          </div>
        </div>
        <div className="process-container-component">
          <img
            src="https://www.codeyoung.com/_ipx/w_1280/subscribe.svg"
            alt="logo"
          ></img>
          <div className="process-container-component-element">
            <div className="process-container-component-element-serial">2</div>
            <div>
              <h6>Book a FREE trial class</h6>
              <p>
                Choose your mentor of choice from 200+ mentors as well as your
                preferred time slot
              </p>
            </div>
          </div>
        </div>
        <div className="process-container-component">
          <img
            src="https://www.codeyoung.com/_ipx/w_1280/success.svg"
            alt="logo"
          ></img>
          <div className="process-container-component-element">
            <div className="process-container-component-element-serial">3</div>
            <div>
              <h6>Enroll for the course</h6>
              <p>
                If you liked the demo session, enroll for the course & begin
                your child's exciting journey!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="book-free-trial-class-p">Book a Free Trial Class</button>
    </div>
  );
}

export default ProcessCY;
