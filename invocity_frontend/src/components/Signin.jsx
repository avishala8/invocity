import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Axios from "axios";
import DispatchContext from "./DispatchContext";
import { useNavigate } from "react-router-dom";
import Page from "./Page";

const SignIn = () => {
  const appDispatch = useContext(DispatchContext);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);

  // const handlePhoneNumberChange = (event) => {
  //   const input = event.target.value;

  //   // Check if input is a digit and the length is 10 or less and wont let users to add more than 10 digits
  //   if (/^\d*$/.test(input) && input.length <= 10) {
  //     setPhoneNumber(input);
  //     setError("");
  //   }
  // };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    // if (phoneNumber.length !== 10) {
    //   setError("Please enter a valid 10 digit mobile number.");
    //   return;
    // }

    // Handle form submission
  };
  useEffect(() => {
    if (error.length === 0 && isFormSubmitted) {
      async function loginUser() {
        try {
          // setLoading(true);
          const response = await Axios.post("/login", {
            email,
            password,
          });

          if (response.status === 200) {
            appDispatch({ type: "login", data: response.data });
            appDispatch({ type: "flashMessage", value: "Login Successfull!" });

            navigate("/dashboard");
          }
        } catch (error) {
          setError("Something went wrong");
          console.log(error);
          setIsFormSubmitted(false);
          if (error.response.status === 401) {
            appDispatch({
              type: "flashMessage",
              value: "Invalid Password!",
            });
          } else if (error.response.status === 404) {
            appDispatch({
              type: "flashMessage",
              value: "Sorry! User not registered.",
            });
          }
        }
      }
      loginUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted]);

  return (
    <Page title="Sign In">
      <div className="signin-background">
        <Container className="signin-container">
          <Row className="justify-content-center">
            <Col md={6} className="signin-box">
              <h1 className="signin-title">Invocity</h1>
              <p className="signin-subtitle">Ab Business karo tension free</p>
              <h2 className="signin-welcome">Welcome 🙏</h2>
              <Form onSubmit={handleSubmit}>
                {/* <Form.Group controlId="formPhoneNumber">
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <Form.Control
                      type="text"
                      placeholder="10 digit mobile number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <Form.Text className="text-muted">
                    We will be sending an OTP to this number
                  </Form.Text>
                </Form.Group> */}
                <Form.Group controlId="formEmail">
                  <div className="input-group mb-2">
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  {emailError && (
                    <div className="error-message">{emailError}</div>
                  )}
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <div className="input-group mb-2">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  {passwordError && (
                    <div className="error-message">{passwordError}</div>
                  )}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="signin-button"
                >
                  Continue Sign In
                </Button>

                <hr className="divider" />

                <Button variant="light" className="signin-google">
                  <i className="fab fa-google"></i> Sign In with Google
                </Button>
              </Form>

              <p className="signin-footer">
                By continuing you agree to our{" "}
                <a href="/terms">Terms & Policy</a>
                <br />© 2024 Invocity Private Limited. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
};

export default SignIn;
