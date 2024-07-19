import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge, Image } from "react-bootstrap";
import hero from "../assets/hero.webp";

const words = ["Accounting", "Invoicing", "Billing", "Quotations"];

const HomeGuest = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="home-container ">
      <Row className="home-container-inner">
        <Col md={6} className="py-5 mt-5">
          <Badge bg="success" className="mb-3">
            100% Safe & Secure!
          </Badge>
          <h1 className="display-4 fw-bold">
            Simple{" "}
            <span className={`text-slide ${fade ? "fade-in" : "fade-out"}`}>
              {words[currentWordIndex]}
            </span>
          </h1>
          <p className="lead">
            Create Invoices, Purchases & Quotations in less than 10 seconds.
            <br />
            Share on WhatsApp with payment links and get paid faster!
          </p>
          <Button variant="primary" size="lg" className="mt-3 mb-4">
            Sign Up for Free
          </Button>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <Image src={hero} alt="Hero Image" fluid />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <h4>
            Trusted by <span className="fw-bold">10,00,000+</span> SMEs
          </h4>
          <h5 className="text-primary">#AtmaNirbharBharat 🇮🇳</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeGuest;
