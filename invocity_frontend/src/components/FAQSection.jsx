import React, { useState } from "react";

const FAQs = [
  {
    question: "What can I do with Invocity?",
    answer:
      "With Invocity you can create all categories of Billing documents like Sales Invoices, Sales Returns, Purchase Invoices, Purchase Orders, Estimates, Manage Inventory in real time with Stock In & Stock Out options, and generate Delivery Challans for Invoices directly. Barcode Scanner and Thermal Print options are also available.",
  },
  {
    question: "Is my data safe on Invocity?",
    answer:
      'Invocity stores user data on its cloud using "Bank Grade" 256-bit SSL encryption. Data is not shared with any external parties. Please find the Privacy Policy and Terms for more details.',
  },
  {
    question: "Can I add my Company's details and logo on Invocity?",
    answer:
      "Yes, you can add your Company Name, GSTIN, Address and Logo to your invoices.",
  },
  {
    question: "Can I use Invocity for Free?",
    answer:
      "Yes, Invocity Mobile app & Web version are absolutely free to use for life-time to create unlimited invoices, purchases, quotations, manage customers/vendors, stock, payments, expenses, share bills via WhatsApp, Email or SMS etc. Start using Invocity for Free!",
  },
  {
    question: "Who all can use Invocity?",
    answer:
      "Invocity is a software for all kinds of small businesses, freelancers and Indian Startups. Anyone can start using Invocity to generate Invoices and other documents. All you need to do is sign-up with your mobile number and start using it!",
  },
  {
    question: "Can I share my invoices or other documents with my customers?",
    answer:
      "Yes, you can share your Invoices either on Whatsapp, Email or as an invoice link.",
  },
  {
    question:
      "Is there any limit on the number of GSTINs I can add on Invocity?",
    answer:
      "As long as the user remains the same, there is no limit to the number of GSTINs you can add on Invocity.",
  },
  {
    question: "Is it possible to add multiple users?",
    answer: "Yes.",
  },
  {
    question: "Can I control user permission for multiple users?",
    answer:
      "Yes with Invocity you can set user Role Settings for different users.",
  },
  {
    question: "Does my data on Invocity web sync to Invocity mobile app?",
    answer:
      "Yes, if you have used the same mobile number to login to Invocity on both mobile app as well as the web. All your data including invoices created, customers added, items added etc. will be synced.",
  },
  {
    question: "Can I receive payments on Invocity?",
    answer: "Yes.",
  },
  {
    question: "Can I send reminders for pending payments on Invocity?",
    answer:
      "Yes , you can directly send reminders to customers for their outstanding payment and keep track of payment ledger on a single Dashboard Screen.",
  },
  {
    question: "Can I recover my data if my system crashes?",
    answer:
      "Yes, you need not worry about data recovery at all since all the data is stored on cloud servers. Even if your system or mobile crashes, you can login via another system with your mobile number and recover your data there.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-section faq-container mt-5">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {FAQs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            {faq.question}
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
