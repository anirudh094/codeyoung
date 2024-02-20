import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import "rsuite/dist/rsuite.min.css";
import { Navbar, Nav } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import { Drawer, ButtonToolbar, Button } from "rsuite";

function Navbaar() {
  const MenuUIcon = ({ size }) => (
    <MenuIcon style={{ fontSize: size, marginRight: 10, color: "white" }} />
  );
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <Navbar className={colorChange ? "sticky navbar-color-change" : "sticky"}>
        <Navbar.Brand>
          <Link to={"/"} className="no-decoration">
            <img
              className="company-logo"
              src="https://www.codeyoung.com/_nuxt/img/codeyoung-logo.4c8144c.svg"
              alt="logo"
            ></img>
          </Link>
        </Navbar.Brand>
        <Nav pullRight className="navbar-big">
          <Nav.Item className="nav-underline">
            <Link to={"/about"} className="no-decoration">
              About
            </Link>
          </Nav.Item>
          <Nav.Menu title="View Courses" trigger={["click", "hover"]}>
            <Nav.Item>
              <Link to={"/maths"} className="no-decoration">
                Maths
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/courses"} className="no-decoration">
                Coding
              </Link>
            </Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="Explore" trigger={["click", "hover"]}>
            <Nav.Item>Trainers</Nav.Item>
            <Nav.Item>Student Project</Nav.Item>
          </Nav.Menu>
          <Nav.Item className="nav-underline">
            <Link to={"/sandbox"} className="no-decoration">
              Sandbox
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-underline">
            <Link to={"/blogs"} className="no-decoration">
              Blogs
            </Link>
          </Nav.Item>
          <button className="login-btn">Login</button>
          <button className="free-trial-btn">Free Trial</button>
        </Nav>
        <Nav pullRight className="navbar-small">
          <ButtonToolbar>
            <Button onClick={() => handleOpen("300px")}>
              <span>
                <MenuUIcon size="30px" />
              </span>
            </Button>
          </ButtonToolbar>

          <Drawer size={size} open={open} onClose={() => setOpen(false)}>
            <Drawer.Body>
              <Nav className="side-nav-bar">
                <Nav.Item className="nav-underline">
                  <Link to={"/about"} className="no-decoration">
                    About
                  </Link>
                </Nav.Item>
                <Nav.Menu title="View Courses" trigger={["click", "hover"]}>
                  <Nav.Item>
                    <Link to={"/maths"} className="no-decoration">
                      Maths
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    {" "}
                    <Link to={"/courses"} className="no-decoration">
                      Coding
                    </Link>
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu title="Explore" trigger={["click", "hover"]}>
                  <Nav.Item>Trainers</Nav.Item>
                  <Nav.Item>Student Project</Nav.Item>
                </Nav.Menu>
                <Nav.Item className="nav-underline">
                  <Link to={"/sandbox"} className="no-decoration">
                    Sandbox
                  </Link>
                </Nav.Item>
                <Nav.Item className="nav-underline">
                  <Link to={"/blogs"} className="no-decoration">
                    Blogs
                  </Link>
                </Nav.Item>
                <button className="login-btn">Login</button>
                <button className="free-trial-btn">Free Trial</button>
              </Nav>
            </Drawer.Body>
          </Drawer>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navbaar;
