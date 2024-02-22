import React from "react";
import "../CSS/FreeTrial.css";

function FreeTrial() {
  return (
    <>
      <div className="free-trial-body">
        <div className="free-trial-heading">
          Book a free trial class! Use code <span>'CYOUNG2023'</span> for flat
          25% off on enrollment
        </div>
        <div className="free-trial-content">
          <div className="free-trial-content-description">
            <h2>
              Transform your child's learning experience and unlock{" "}
              <span>100% of their potential!</span>
            </h2>
            <h3>
              Affordable live <span>1:1 online classes for kids</span> with
              expert teachers!
            </h3>
            <h4>Coding | Math | Science | Robotics</h4>
            <div>
              <p>Live learning experience complemented by host of offerings</p>
            </div>
          </div>
          <div className="free-trial-content-form">
            <div className="free-trial-content-form-heading">
              Book a free demo class now!
            </div>
            <form>
              <p>Parent Name</p>
              <input type="text" placeholder="Name here"></input>

              <p>Parent Phone Number</p>
              <input type="number" placeholder="Phone Number"></input>

              <p>Parent Email Address</p>
              <input type="email" placeholder="Email ID here"></input>

              <p>Course preference</p>
              <div className="form-course-preference">
                <input type="checkbox" id="coding" />
                <label for="coding">Coding</label>
                <input type="checkbox" id="Maths" />
                <label for="Maths">Maths</label>
                <input type="checkbox" id="robotics" />
                <label for="robotics">Robotics</label>
                <input type="checkbox" id="science" />
                <label for="science">Science</label>
              </div>

              <p>Childs Grade</p>
              <div className="form-child-grade">
                <input type="radio" id="1st" name="Child_Grade" value="1st" />
                <label for="1st">1st</label>
                <input type="radio" id="2nd" name="Child_Grade" value="2nd" />
                <label for="2nd">2nd</label>
                <input type="radio" id="3rd" name="Child_Grade" value="3rd" />
                <label for="3rd">3rd</label>
                <input type="radio" id="4th" name="Child_Grade" value="4th" />
                <label for="4th">4th</label>
                <input type="radio" id="5th" name="Child_Grade" value="5th" />
                <label for="5th">5th</label>
                <input type="radio" id="6th" name="Child_Grade" value="6th" />
                <label for="6th">6th</label>
              </div>
              <div className="form-child-grade">
                <input type="radio" id="7th" name="Child_Grade" value="7th" />
                <label for="7th">7th</label>
                <input type="radio" id="8th" name="Child_Grade" value="8th" />
                <label for="8th">8th</label>
                <input type="radio" id="9th" name="Child_Grade" value="9th" />
                <label for="9th">9th</label>
                <input type="radio" id="10th" name="Child_Grade" value="10th" />
                <label for="10th">10th</label>
                <input type="radio" id="11th" name="Child_Grade" value="11th" />
                <label for="11th">11th</label>
                <input type="radio" id="12th" name="Child_Grade" value="12th" />
                <label for="12th">12th</label>
              </div>

              <p>Coupon Code</p>
              <input type="text" placeholder="Coupon Code"></input>
              <br></br>

              <div className="form-tnc">
                <input type="checkbox" id="18agree" checked />
                <label for="18agree">
                  I agree, I am 18+ and booking this trial class for a child
                  related to me.
                </label>
              </div>

              <div className="form-tnc">
                <input type="checkbox" id="tnc" checked></input>
                <label for="tnc">
                  By proceeding you are agreeing to Codeyoung’s terms of use and
                  privacy policy
                </label>
              </div>

              <button className="time-slot-btn">Book Free Trial</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeTrial;
