import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge, Image } from "react-bootstrap";
import hero from "../assets/hero.webp";
import onlineStore from "../assets/online_store.webp";
import imageWtsapp from "../assets/whatsapp_share.png";
import fast_payments from "../assets/fast_payments.png";
import createInvoices from "../assets/create_invoices.png";

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="home-container ">
      <Row className="home-container-inner">
        <Col md={6} className="py-5 mt-5">
          <Badge
            bg="success"
            className="mb-4"
            style={{ backgroundColor: "#00AFD7" }}
            variant="dot"
          >
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
      <Row className="align-items-center subinfo">
        <Col md={5}>
          <h2>Create invoices in less than 10 seconds</h2>
          <p>
            Invocity helps you track your sales, manage inventory, customers &
            vendors and be in control of your business. Create GST compliant
            invoices & share with customers easily.
          </p>

          <Button variant="primary">Get Started with Invocity</Button>
        </Col>{" "}
        <Col md={4}>
          <img
            src={createInvoices}
            className="img-fluid"
            alt="Share Invoices on WhatsApp"
          />
        </Col>
      </Row>
      <Row className="align-items-center subinfo">
        <Col md={5}>
          <img
            src={imageWtsapp}
            className="img-fluid"
            alt="Share Invoices on WhatsApp"
          />
        </Col>
        <Col md={4}>
          <h2>Share Invoices Instantly</h2>
          <p>
            Swipe helps you reach your customers and vendors wherever they are.
            Share invoices and purchase orders on WhatsApp and Email.
          </p>

          <Button variant="primary">Get Started with Invocity</Button>
        </Col>
      </Row>
      <Row className="align-items-center subinfo">
        <Col md={4}>
          <h2>Get payments faster</h2>
          <p>
            With Invocity you can send payment links and even QR codes so that
            customers can pay you quickly. Send payment reminders easily. Make
            payments to your suppliers conveniently from your trusted UPI apps.
          </p>

          <Button variant="primary">Try Invocity For Free</Button>
        </Col>{" "}
        <Col md={5}>
          <img
            src={fast_payments}
            className="img-fluid"
            alt="Share Invoices on WhatsApp"
          />
        </Col>
      </Row>
      <Row className="align-items-center subinfo">
        <Col md={5}>
          <img
            src={onlineStore}
            className="img-fluid"
            alt="Share Invoices on WhatsApp"
          />
        </Col>
        <Col md={4}>
          <h2>Get your store Online</h2>
          <p>
            With Swipe you can setup your online store and grow your business.
            Set up your online store with products, images, prices & exclusive
            offers. Directly share your store link with customers to receive
            online orders and payments!
          </p>

          <Button variant="primary">Create Online Store Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeGuest;
