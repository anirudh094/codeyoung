import React from "react";
import "../CSS/Navbar.css";
import "rsuite/dist/rsuite.min.css";
import { Navbar, Nav } from "rsuite";

function Navbaar() {
  return (
    <>
      <Navbar className="sticky">
        <Navbar.Brand href="#">
          <img
            className="company-logo"
            src="https://www.codeyoung.com/_nuxt/img/codeyoung-logo.4c8144c.svg"
            alt="logo"
          ></img>
        </Navbar.Brand>
        <Nav pullRight>
          <Nav.Item className="nav-underline">About</Nav.Item>
          <Nav.Menu title="View Courses"  trigger={['click', 'hover']}>
            <Nav.Item>Maths</Nav.Item>
            <Nav.Item>Coding</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="Explore"  trigger={['click', 'hover']}>
            <Nav.Item>Trainers</Nav.Item>
            <Nav.Item>Student Project</Nav.Item>
          </Nav.Menu>
          <Nav.Item className="nav-underline">Sandbox</Nav.Item>
          <Nav.Item className="nav-underline">Blogs</Nav.Item>
          <button className="login-btn">Login</button>
          <button className="free-trial-btn">Free Trial</button>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navbaar;
