import React from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={onClick}>
      {question}
    </div>
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
);

export default FAQItem;
