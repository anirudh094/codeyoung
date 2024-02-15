import React, { useState } from "react";
import Grade1to2 from "./Grade1to2";
import Grade3to5 from "./Grade3to5";
import Grade6to8 from "./Grade6to8";
import Grade9plus from "./Grade9plus";

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
  };
  const showgrade3to5 = () => {
    setGrade1to2(false);
    setGrade3to5(true);
    setGrade6to8(false);
    setGrade9plus(false);
  };
  const showgrade6to8 = () => {
    setGrade1to2(false);
    setGrade3to5(false);
    setGrade6to8(true);
    setGrade9plus(false);
  };
  const showgrade9plus = () => {
    setGrade1to2(false);
    setGrade3to5(false);
    setGrade6to8(false);
    setGrade9plus(true);
  };

  return (
    <>
      <div>
        <button onClick={showgrade1to2}>Grade 1 to 2</button>
        <button onClick={showgrade3to5}>Grade 3 to 5</button>
        <button onClick={showgrade6to8}>Grade 6 to 8</button>
        <button onClick={showgrade9plus}>Grade 9+</button>

        {grade1to2 ? (
          <div><Grade1to2/></div>
        ) : (<></>)}
        {grade3to5 ? (
          <div><Grade3to5/></div>
        ) : (<></>)}
        {grade6to8 ? (
          <div><Grade6to8/></div>
        ) : (<></>)}
        {grade9plus ? (
          <div><Grade9plus/></div>
        ) : (<></>)}

      </div>
    </>
  );
}

export default CodingCourse;
