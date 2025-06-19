import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Plans start at ₹149/month. Cancel anytime.",
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime, on an unlimited number of devices.",
  },
  {
    question: "How do I cancel?",
    answer:
      "You can cancel your plan at any time through your account settings.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "From blockbuster movies to exclusive Netflix originals, there's something for everyone.",
  },
  {
    question: "Is Netflix good for kids?",
    answer: "Netflix includes a kids section with family-friendly content.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <span>{openIndex === index ? "✕" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
      <p className="faq-footer-text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  );
};

export default FAQ;
