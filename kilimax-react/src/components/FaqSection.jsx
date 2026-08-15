import { useState } from "react";

const faqs = [
  { question: "What is KiliMax ERP?", image: "icon/link.png" },
  { question: "Is Kilimax ERP suitable for my business size?", image: "icon/link1.png" },
  { question: "Does it work offline?", image: "icon/link2.png" },
  { question: "Can Kilimax integrate with M-Pesa?", image: "icon/link3.png" },
  { question: "How does Kilimax help with inventory management?", image: "icon/link4.png" },
  { question: "Is there AI built into KilliMax?", image: "icon/link5.png" },
  { question: "What languages and currencies does KiliMax support?", image: "icon/link6.png" },
  { question: "How secure is my business data with KiliMax?", image: "icon/link7.png" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions</h3>
      {faqs.map((faq, i) => (
        <div className="faq-item" key={i}>
          <div
            className={`dropdown-header ${openIndex === i ? "active" : ""}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{faq.question}</span>
            <span className="icon">▼</span>
          </div>
          <div className={`faq-content ${openIndex === i ? "show" : ""}`}>
            <img src={faq.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
