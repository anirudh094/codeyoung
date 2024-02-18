import React, { useState } from "react";
import ScratchJr from "./ScratchJr";
import Scratch from "./Scratch";
import MITAppIn from "./MITAppIn";
import Development from "./Development";
import Python from "./Python";
import "../../CSS/CodingCourse.css";

function CodingCourse() {
  const [grade1to2, setGrade1to2] = useState(true);
  const [grade3to5, setGrade3to5] = useState(false);
  const [grade6to8, setGrade6to8] = useState(false);
  const [grade9plus, setGrade9plus] = useState(false);

  const showgrade1to2 = () => {
    setGrade1to2(true);
    setGrade3to5(false);
    setGrade6to8(false);
    setGrade9plus(false);
    document.getElementById("grd1-2").style.backgroundColor = "#FFF0CC";
    document.getElementById("grd3-5").style.backgroundColor = "white";
    document.getElementById("grd6-8").style.backgroundColor = "white";
    document.getElementById("grd9").style.backgroundColor = "white";
  };
  const showgrade3to5 = () => {
    setGrade1to2(false);
    setGrade3to5(true);
    setGrade6to8(false);
    setGrade9plus(false);
    document.getElementById("grd1-2").style.backgroundColor = "white";
    document.getElementById("grd3-5").style.backgroundColor = "#FFF0CC";
    document.getElementById("grd6-8").style.backgroundColor = "white";
    document.getElementById("grd9").style.backgroundColor = "white";
  };
  const showgrade6to8 = () => {
    setGrade1to2(false);
    setGrade3to5(false);
    setGrade6to8(true);
    setGrade9plus(false);
    document.getElementById("grd1-2").style.backgroundColor = "white";
    document.getElementById("grd3-5").style.backgroundColor = "white";
    document.getElementById("grd6-8").style.backgroundColor = "#FFF0CC";
    document.getElementById("grd9").style.backgroundColor = "white";
  };
  const showgrade9plus = () => {
    setGrade1to2(false);
    setGrade3to5(false);
    setGrade6to8(false);
    setGrade9plus(true);
    document.getElementById("grd1-2").style.backgroundColor = "white";
    document.getElementById("grd3-5").style.backgroundColor = "white";
    document.getElementById("grd6-8").style.backgroundColor = "white";
    document.getElementById("grd9").style.backgroundColor = "#FFF0CC";
  };

  return (
    <>
      <div className="coding-course-body">
        <h2>Multiple Online Coding Courses, for kids of all Grades</h2>
        <p>Choose from coding courses fit for ages 5-17.</p>
        <div className="coding-course-btn">
          <button onClick={showgrade1to2} id="grd1-2">
            Grade 1 - 2
          </button>
          <button onClick={showgrade3to5} id="grd3-5">
            Grade 3 - 5
          </button>
          <button onClick={showgrade6to8} id="grd6-8">
            Grade 6 - 8
          </button>
          <button onClick={showgrade9plus} id="grd9">
            Grade 9+
          </button>
        </div>

        {grade1to2 ? (
          <div>
            <ScratchJr />
            <Scratch />
          </div>
        ) : (
          <></>
        )}
        {grade3to5 ? (
          <div>
            <Scratch />
            <MITAppIn />
          </div>
        ) : (
          <></>
        )}
        {grade6to8 ? (
          <div>
            <Development />
          </div>
        ) : (
          <></>
        )}
        {grade9plus ? (
          <div>
            <Development />
            <Python />
          </div>
        ) : (
          <></>
        )}

        <button className="explore-math-courses-p">
          Explore Math Courses
        </button>
      </div>
    </>
  );
}

export default CodingCourse;
