import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeadLogo from "../imagies/head-logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbars() {
  const [bgColor, setbgColor] = useState("transparent");
  const Change = () => {
    if (window.scrollY >= 40) {
      setbgColor("black");
    }
    if (window.scrollY <= 40) {
      setbgColor("transparent");
    }
  };
  window.addEventListener("scroll", Change);

  return (
    <>
      <Navbar
        style={{ top: "0", backgroundColor: bgColor }}
        expand="lg"
        className=" fixed-top"
      >
        <Container>
          <Navbar.Brand
            onClick={() => ChangeBg("home")}
            style={{ fontWeight: "500", color: "white", fontSize: "32px" }}
            to="#"
          >
            <Link to='/'>
            <img
              style={{ width: "130px", height: "70px" }}
              src={HeadLogo}
              alt=""
            /></Link>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: "white" }}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto  py-0   my-0"
              style={{
                maxHeight: "100px",
                fontWeight: "400",
                color: "white",
              }}
              navbarScroll
            >
              <Nav.Link id="About" className="text-white me-3  ">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  About Us{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white me-3">
                <Link
                  to="/feature"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Features{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white me-3">
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Blogs{" "}
                </Link>
              </Nav.Link>

              <Nav.Link className="text-white me-3">
                <Link
                  to="/career"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Career
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white me-3">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </Link>
              </Nav.Link>
              <Button
                style={{
                  backgroundColor: "#e74425",
                  border: "none",
                  width: "130px",
                  fontWeight: "400",
                }}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
