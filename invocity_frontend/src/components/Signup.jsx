import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Axios from "axios";
import DispatchContext from "./DispatchContext";
import Page from "./Page";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const appDispatch = useContext(DispatchContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;

    // Check if input is a digit and the length is 10 or less and won't let users add more than 10 digits
    if (/^\d*$/.test(input) && input.length <= 10) {
      setPhoneNumber(input);
      setPhoneNumberError("");
    }
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

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
    if (phoneNumber.length !== 10) {
      setPhoneNumberError("Please enter a valid 10 digit mobile number.");
      return;
    }
    if (username.trim() === "") {
      setUsernameError("Please enter a valid username.");
      return;
    }
    if (
      email.trim() === "" ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (password.trim() === "" || password.length < 8) {
      setPasswordError(
        "Please enter a valid password with at least 8 characters."
      );
      return;
    }

    // Handle form submission

    setIsFormSubmitted(true);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      async function registerUser() {
        try {
          setLoading(true); // Set loading to true when request starts

          const response = await Axios.post("/register", {
            phoneNumber: phoneNumber,
            username: username,
            email: email,
            password: password,
          });

          if (response.data.success) {
            appDispatch({
              type: "flashMessage",
              value: "User Already Exists!",
            });
          } else {
            appDispatch({ type: "login", data: response.data });
            navigate("/dashboard");
            appDispatch({ type: "success", value: "true" });
            appDispatch({ type: "flashMessage", value: "User Registered!" });
          }
        } catch (error) {
          appDispatch({ type: "success", value: false });
          appDispatch({
            type: "flashMessage",
            value: "User Already Exists!",
          });
        } finally {
          setLoading(false); // Set loading to false when request ends
          setIsFormSubmitted(false);
        }
      }
      registerUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted]);

  return (
    <Page title="Sign Up">
      <div className="signin-background">
        <Container className="signin-container">
          <Row className="justify-content-center">
            <Col md={6} className="signin-box">
              <h1 className="signin-title">Invocity</h1>
              <p className="signin-subtitle">Ab Business karo tension free</p>
              <h2 className="signin-welcome">Welcome 🙏</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPhoneNumber">
                  <div className="input-group mb-2">
                    <span className="input-group-text">+91</span>
                    <Form.Control
                      type="text"
                      placeholder="10 digit mobile number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  {phoneNumberError && (
                    <div className="error-message">{phoneNumberError}</div>
                  )}
                  {/* <Form.Text className="text-muted">
                    We will be sending an OTP to this number
                  </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formUsername">
                  <div className="input-group mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                  {usernameError && (
                    <div className="error-message">{usernameError}</div>
                  )}
                </Form.Group>

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
                  disabled={loading} // Disable button when loading
                >
                  {loading ? "Processing..." : "Sign Up with Mobile Number"}
                </Button>

                <hr className="divider" />

                <Button
                  variant="light"
                  className="signin-google"
                  disabled={loading} // Disable button when loading
                >
                  <i className="fab fa-google"></i> Sign Up with Google
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
