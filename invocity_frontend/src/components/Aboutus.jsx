import React from "react";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import Page from "./Page";

const features = [
  [
    "Create invoice within 10 seconds",
    "Delivery Challan",
    "Share invoices on WhatsApp and Email",
    "Payment ledger",
    "Edit bills",
    "Generate ProForma Invoices",
    "Unlimited Customers",
    "User Role Settings",
    "Customer/Vendor details",
    "Real time Analytics",
    "E-way Bills",
    { text: "Cess", new: true },
    { text: "Export/ SEZ Invoices", new: true },
    { text: "Batch & Expiry", new: true },
    { text: "Advanced Column Linking", new: true },
  ],
  [
    "Customize invoices",
    "GSTR report",
    "Payment reminders",
    "POS billing",
    "Purchase orders and purchase invoices",
    "Stock and Inventory Management",
    "Unlimited Products/ Bulk Upload",
    "Multiple GSTs Accounting",
    "Manage Expenses",
    "Online Store",
    "E-Invoices",
    { text: "Recurring Invoices/ Subscriptions", new: true },
    { text: "Bill of Supply", new: true },
    { text: "Manufacturing & Grouping", new: true },
  ],
  [
    "Multiple invoice templates",
    "Credit note",
    "Integrated payment gateway",
    "Thermal printing",
    "Generate Estimates/Quotation",
    "Unlimited Logins",
    "Multiple User/Business accounts",
    "Multiple Pricing (Wholesale/Retail)",
    "Profit/Loss statement",
    "Add Product Variants",
    { text: "TDS", new: true },
    { text: "SMS Campaigns", new: true },
    { text: "Serial Number & IMEI", new: true },
    { text: "Tally Integration", new: true },
  ],
];

const FeatureList = () => {
  return (
    <Page title="About Us">
      <Container className="py-4">
        <h2 className="text-center mb-4">Why Invocity?</h2>
        <Row>
          {features.map((column, colIdx) => (
            <Col key={colIdx} md={4}>
              <ListGroup variant="flush">
                {column.map((feature, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex align-items-center"
                  >
                    <span className="text-success">✔️</span>
                    <span
                      className={`ms-2 ${
                        typeof feature === "string" && feature.new
                          ? "fw-bold text-primary"
                          : ""
                      }`}
                    >
                      {typeof feature === "string" ? feature : feature.text}
                    </span>
                    {typeof feature !== "string" && feature.new && (
                      <Badge bg="primary" className="ms-2">
                        NEW
                      </Badge>
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  );
};

export default FeatureList;
