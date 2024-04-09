import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Pages/HOME/Home";
import Navbaar from "./Pages/Navbar";
import CodingCourse from "./Pages/CodingCourses/CodingCourse";
import Sandbox from "./Pages/HOME/Sandbox";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Maths from "./Pages/MathsCourses/Maths"
import FreeTrial from "./Pages/FreeTrial";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbaar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CodingCourse />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/freetrial" element={<FreeTrial />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
