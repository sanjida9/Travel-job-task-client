import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import payment from "./../../assets/images/payment.png";
import logo from "./../../assets/images/imagesss.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-4 bg-blue">
        <Container>
          <Row>
            <Col md={5}>
              <div className="my-2">
                <h2>
                  <img height="70px" src={logo} alt="" /> TraVio
                </h2>
              </div>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-2 fs-5">Green View,Chittagong.</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-2 fs-5">travio@gmail.com</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-2 fs-5">Helpline: +889 225 778</span>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/home">About Us</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/home">Contact</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/home">Tours</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/home">Policy</NavLink>{" "}
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div>
                <img className="img-fluid" src={payment} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <h6 className="text-center m-0 py-3 copyright bg-blue">
        Copyright © All Reserved by TraVio - Tour & Travel Service Community in
        2022
      </h6>
    </div>
  );
};

export default Footer;
