import React from "react";
import "../CSS/FreeTrial.css";
import { useState } from "react";

function FreeTrial() {
  const [user, setUser] = useState({
    parentName: "",
    parentPhoneNumber: "",
    parentEmail: "",
    course: "",
    childGrade: "",
    coupon: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      parentName,
      parentPhoneNumber,
      parentEmail,
      course,
      childGrade,
      coupon,
    } = user;

    if (
      parentName &&
      parentPhoneNumber &&
      parentEmail &&
      course &&
      childGrade &&
      coupon
    ) {
      const res = await fetch(
        "https://codeyoung-d76a3-default-rtdb.firebaseio.com/freetrial.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            parentName,
            parentPhoneNumber,
            parentEmail,
            course,
            childGrade,
            coupon,
          }),
        }
      );

      if (res) {
        setUser({
          parentName: "",
          parentPhoneNumber: "",
          parentEmail: "",
          course: "",
          childGrade: "",
          coupon: "",
        });

        alert("Data stored successfully");
      }
    } else {
      alert("Fill all data");
    }
  };

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
              <input
                name="parentName"
                type="text"
                placeholder="Name here"
                value={user.parentName}
                onChange={getUserData}
                required
              ></input>

              <p>Parent Phone Number</p>
              <input
                name="parentPhoneNumber"
                type="number"
                placeholder="Phone Number"
                value={user.parentPhoneNumber}
                onChange={getUserData}
                required
              ></input>

              <p>Parent Email Address</p>
              <input
                name="parentEmail"
                type="email"
                placeholder="Email ID here"
                value={user.parentEmail}
                onChange={getUserData}
                required
              ></input>

              <p>Course preference</p>
              <div className="form-course-preference">
                <input
                  name="course"
                  type="checkbox"
                  id="coding"
                  value="coding"
                  onChange={getUserData}
                  required
                />
                <label for="coding">Coding</label>
                <input
                  name="course"
                  type="checkbox"
                  id="Maths"
                  value="Maths"
                  onChange={getUserData}
                  required
                />
                <label for="Maths">Maths</label>
                <input
                  name="course"
                  type="checkbox"
                  id="robotics"
                  value="robotics"
                  onChange={getUserData}
                  required
                />
                <label for="robotics">Robotics</label>
                <input
                  name="course"
                  type="checkbox"
                  id="science"
                  value="science"
                  onChange={getUserData}
                  required
                />
                <label for="science">Science</label>
              </div>

              <p>Childs Grade</p>
              <div className="form-child-grade">
                <input
                  type="radio"
                  id="1st"
                  name="childGrade"
                  value="1st"
                  onChange={getUserData}
                  required
                />
                <label for="1st">1st</label>
                <input
                  type="radio"
                  id="2nd"
                  name="childGrade"
                  value="2nd"
                  onChange={getUserData}
                  required
                />
                <label for="2nd">2nd</label>
                <input
                  type="radio"
                  id="3rd"
                  name="childGrade"
                  value="3rd"
                  onChange={getUserData}
                  required
                />
                <label for="3rd">3rd</label>
                <input
                  type="radio"
                  id="4th"
                  name="childGrade"
                  value="4th"
                  onChange={getUserData}
                  required
                />
                <label for="4th">4th</label>
                <input
                  type="radio"
                  id="5th"
                  name="childGrade"
                  value="5th"
                  onChange={getUserData}
                  required
                />
                <label for="5th">5th</label>
                <input
                  type="radio"
                  id="6th"
                  name="childGrade"
                  value="6th"
                  onChange={getUserData}
                  required
                />
                <label for="6th">6th</label>
              </div>
              <div className="form-child-grade">
                <input
                  type="radio"
                  id="7th"
                  name="childGrade"
                  value="7th"
                  onChange={getUserData}
                  required
                />
                <label for="7th">7th</label>
                <input
                  type="radio"
                  id="8th"
                  name="childGrade"
                  value="8th"
                  onChange={getUserData}
                  required
                />
                <label for="8th">8th</label>
                <input
                  type="radio"
                  id="9th"
                  name="childGrade"
                  value="9th"
                  onChange={getUserData}
                  required
                />
                <label for="9th">9th</label>
                <input
                  type="radio"
                  id="10th"
                  name="childGrade"
                  value="10th"
                  onChange={getUserData}
                  required
                />
                <label for="10th">10th</label>
                <input
                  type="radio"
                  id="11th"
                  name="childGrade"
                  value="11th"
                  onChange={getUserData}
                  required
                />
                <label for="11th">11th</label>
                <input
                  type="radio"
                  id="12th"
                  name="childGrade"
                  value="12th"
                  onChange={getUserData}
                  required
                />
                <label for="12th">12th</label>
              </div>

              <p>Coupon Code</p>
              <input
                name="coupon"
                type="text"
                placeholder="Coupon Code"
                value={user.coupon}
                onChange={getUserData}
                required
              ></input>
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

              <button
                className="time-slot-btn"
                type="submit"
                onClick={postData}
              >
                Book Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeTrial;
