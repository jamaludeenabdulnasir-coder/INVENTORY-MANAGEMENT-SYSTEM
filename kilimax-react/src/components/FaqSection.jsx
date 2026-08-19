import { useState } from "react";

const faqs = [
  {
    question: "What is KiliMax ERP?",
    answer: "KiliMax ERP is a comprehensive enterprise resource planning solution designed specifically for wholesale businesses. It integrates inventory management, sales, customer management, and AI-powered insights into one powerful platform.",
    image: "icon/link.png",
  },
  {
    question: "Is Kilimax ERP suitable for my business size?",
    answer: "KiliMax ERP scales with your business. Whether you're running a single store or managing 40+ locations, KiliMax adapts to your needs with flexible plans and features that grow alongside you.",
    image: "icon/link1.png",
  },
  {
    question: "Does it work offline?",
    answer: "Yes! KiliMax supports offline operations. You can continue processing sales, managing inventory, and serving customers even without an internet connection. Data syncs automatically when you're back online.",
    image: "icon/link2.png",
  },
  {
    question: "Can Kilimax integrate with M-Pesa?",
    answer: "Absolutely. KiliMax seamlessly integrates with M-Pesa for payments, reconciliation, and transaction tracking. This allows you to manage all your mobile money operations from one dashboard.",
    image: "icon/link3.png",
  },
  {
    question: "How does Kilimax help with inventory management?",
    answer: "KiliMax provides real-time stock tracking, automatic low-stock alerts, smart reorder suggestions, and detailed inventory reports. You can manage your entire catalogue in seconds and never run out of popular items.",
    image: "icon/link4.png",
  },
  {
    question: "Is there AI built into KilliMax?",
    answer: "Yes! KILLI, our AI business partner, offers voice and image recognition for placing orders, automatic product suggestions, cash flow alerts, and smart analytics — all working in the background so you can focus on selling.",
    image: "icon/link5.png",
  },
  {
    question: "What languages and currencies does KiliMax support?",
    answer: "KiliMax supports multiple languages including English, Portuguese, and French. It also handles multiple currencies, making it ideal for businesses operating across different African markets.",
    image: "icon/link6.png",
  },
  {
    question: "How secure is my business data with KiliMax?",
    answer: "Your data security is our top priority. KiliMax uses enterprise-grade encryption, secure cloud backups, role-based access controls, and regular security audits to keep your business data safe and compliant.",
    image: "icon/link7.png",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-section">
      <span className="section-badge">Support</span>
      <h3>Frequently Asked Questions</h3>
      <p className="faq-subtitle">
        Everything you need to know about KiliMax ERP
      </p>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <div
              className={`faq-header ${openIndex === i ? "active" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="faq-question">{faq.question}</span>
              <span className={`faq-icon ${openIndex === i ? "rotated" : ""}`}>+</span>
            </div>
            <div className={`faq-body ${openIndex === i ? "open" : ""}`}>
              <div className="faq-answer">
                <p>{faq.answer}</p>
                <img src={faq.image} alt={faq.question} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
