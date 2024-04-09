import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../CSS/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    // fixed-bottom - add this to fix it in the bottom
    <footer className=" p-3 footer-body">
      <Row className="footer-content footer-alignment">
        <Col md={22} lg={10}>
          <h5 className=" mb-3 footer-heading">
            <img
              className="company-logo"
              src="https://www.codeyoung.com/_nuxt/img/codeyoung-logo.4c8144c.svg"
              alt="logo"
            ></img>
          </h5>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 footer-links">Links</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white links">
              <a href="/" className="footer-content-links">
                {" "}
                Home{" "}
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/about"}
              >
                About Us
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/freetrial"}
              >
                Trainers
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/courses"}
              >
                View Courses
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={6} lg={3}>
          <h5 className="mb-3  footer-links">Contact Info</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links footer-contact-media-links"
                to={"/contactus"}
              >
                <FaHome size={50} color="orange" />
                <span>
                  The Pearl, 1537, 5th Main Rd, Rajiv Gandhi Nagar, Sector 7,
                  HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links footer-contact-media-links"
                to={"/contactus"}
              >
                <IoCall size={25} color="orange" />
                <span> +91 8884459977</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links footer-contact-media-links"
                to={"/contactus"}
              >
                <MdMail size={25} color="orange" />
                <span> support@codeyoung.com</span>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 footer-links">Social Media</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://www.instagram.com/codeyoung_global/"
                className="footer-content-links footersocial-media-links"
              >
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://www.linkedin.com/company/smaowl9/"
                className="footer-content-links footersocial-media-links"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://www.facebook.com/codeyoung01/"
                className="footer-content-links footersocial-media-links"
              >
                {" "}
                <FaFacebook size={20} />
                <span>Facebook</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://www.youtube.com/channel/UCtDHFYVS8TencUQNTkCfRJA"
                className="footer-content-links footersocial-media-links"
              >
                {" "}
                <FaYoutube size={20} />
                <span>Youtube</span>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div className="text-center mt-2 text-black p-3">
        Copyright © 2022 Smart Owl Education Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
