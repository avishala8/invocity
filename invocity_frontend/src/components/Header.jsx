import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

const Header = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
    appDispatch({ type: "flashMessage", value: "Logout Successful!" });
    console.log(appState);
  }

  return (
    <header className="header-top">
      <Navbar collapseOnSelect expand="lg">
        <div className="header-container">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Invocity" className="brand-logo" />
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
              {!appState.login ? (
                <>
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
                </>
              ) : (
                <LinkContainer
                  className="nav-link-spacing"
                  to="/"
                  onClick={handleLogout}
                >
                  <Button className="btn" href="/" onClick={handleLogout}>
                    Log Out
                  </Button>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
