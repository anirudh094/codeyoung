import React,{useState} from "react";
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
        <Navbar.Brand href="#">
          <img
            className="company-logo"
            src="https://www.codeyoung.com/_nuxt/img/codeyoung-logo.4c8144c.svg"
            alt="logo"
          ></img>
        </Navbar.Brand>
        <Nav pullRight className="navbar-big">
          <Nav.Item className="nav-underline">About</Nav.Item>
          <Nav.Menu title="View Courses" trigger={["click", "hover"]}>
            <Nav.Item>Maths</Nav.Item>
            <Nav.Item>Coding</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="Explore" trigger={["click", "hover"]}>
            <Nav.Item>Trainers</Nav.Item>
            <Nav.Item>Student Project</Nav.Item>
          </Nav.Menu>
          <Nav.Item className="nav-underline">Sandbox</Nav.Item>
          <Nav.Item className="nav-underline">Blogs</Nav.Item>
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
                <Nav.Item className="nav-underline">About</Nav.Item>
                <Nav.Menu title="View Courses" trigger={["click", "hover"]}>
                  <Nav.Item>Maths</Nav.Item>
                  <Nav.Item>Coding</Nav.Item>
                </Nav.Menu>
                <Nav.Menu title="Explore" trigger={["click", "hover"]}>
                  <Nav.Item>Trainers</Nav.Item>
                  <Nav.Item>Student Project</Nav.Item>
                </Nav.Menu>
                <Nav.Item className="nav-underline">Sandbox</Nav.Item>
                <Nav.Item className="nav-underline">Blogs</Nav.Item>
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
