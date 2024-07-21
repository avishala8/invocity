import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <div className="signin-background">
      <Container className="signin-container">
        <Row className="justify-content-center">
          <Col md={6} className="signin-box">
            <h1 className="signin-title">Invocity</h1>
            <p className="signin-subtitle">Ab Business karo tension free</p>
            <h2 className="signin-welcome">Welcome 🙏</h2>
            <Form>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+91 10 digit mobile number"
                />
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
