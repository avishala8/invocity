import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Page from "./Page";

const ContactUs = () => {
  return (
    <Page title="Contact Us">
      <Container className="contact-us-section">
        <h3 className="section-title">
          Don't wait to <i className="fas fa-map-marker-alt">contact us</i>!{" "}
          <br /> We are ready whenever you are.
        </h3>
        <Row className="contactForm">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="submit-button-contactus"
              >
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={3} className="py-5">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>Sector-62, Noida, Uttar Pradesh, India</p>
              <p>+91 8534820552</p>
              <p>support@invocity.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default ContactUs;
