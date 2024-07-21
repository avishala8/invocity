import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

const header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom-navbar basic-navbar-nav"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Invocity" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-centered">
              <LinkContainer className="nav-link-spacing" to="/aboutus">
                <Nav.Link>Why Invocity?</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav-link-spacing" to="/templates">
                <Nav.Link>Templates</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav-link-spacing" to="/pricing">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav-link-spacing" to="/FAQs">
                <Nav.Link>FAQs </Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav-link-spacing" to="/contactus">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav-link-spacing" to="/login">
                <Button className="btn" href="/login">
                  Login
                </Button>
              </LinkContainer>
              <LinkContainer className="nav-link-spacing" to="/signup">
                <Button className="btn" href="/signup">
                  Sign Up
                </Button>
              </LinkContainer>
            </Nav>

            {/* <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
