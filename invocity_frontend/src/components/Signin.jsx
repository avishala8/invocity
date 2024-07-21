import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;

    // Check if input is a digit and the length is 10 or less and wont let users to add more than 10 digits
    if (/^\d*$/.test(input) && input.length <= 10) {
      setPhoneNumber(input);
      setError("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10 digit mobile number.");
      return;
    }

    // Handle form submission
    console.log("Form submitted:", phoneNumber);
  };

  return (
    <div className="signin-background">
      <Container className="signin-container">
        <Row className="justify-content-center">
          <Col md={6} className="signin-box">
            <h1 className="signin-title">Invocity</h1>
            <p className="signin-subtitle">Ab Business karo tension free</p>
            <h2 className="signin-welcome">Welcome 🙏</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formPhoneNumber">
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
              </Form.Group>

              <Button variant="primary" type="submit" className="signin-button">
                Continue with Mobile Number
              </Button>

              <hr className="divider" />

              <Button variant="light" className="signin-google">
                <i className="fab fa-google"></i> Sign In with Google
              </Button>
            </Form>

            <p className="signin-footer">
              By continuing you agree to our <a href="/terms">Terms & Policy</a>
              <br />© 2024 Invocity Private Limited. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
