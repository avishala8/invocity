import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Invocity" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto navbar-items">
              <LinkContainer to="/aboutus">
                <Nav.Link>Why Invocity?</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/templates">
                <Nav.Link>Templates</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pricing">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/FAQs">
                <Nav.Link>FAQs </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav variant="pills" className="ms-auto">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
