import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";

const plans = [
  {
    name: "Point of Sale",
    desc: "Sell anywhere, anytime. Fast checkout, mobile payments, multi-terminal access.",
    features: ["Fast checkout", "Mobile payment options", "Multi-terminal access", "Online store integration"],
    img: "icon/shot2.png",
  },
  {
    name: "ERP",
    desc: "Manage inventory, sales, customers, and finances from one powerful dashboard.",
    features: ["Inventory management", "Sales tracking", "Financial reports", "Multi-store support"],
    img: "icon/shot3.png",
  },
  {
    name: "E-Commerce",
    desc: "Create a seamless online-to-offline experience for your customers.",
    features: ["Online ordering", "In-store pickup", "Real-time sync", "Customer portal"],
    img: "icon/shot4.png",
  },
];

const integrations = [
  { label: "Faster checkout", icon: "⚡" },
  { label: "Fewer Stock-outs", icon: "📦" },
  { label: "Smarter Cash Collection", icon: "💰" },
];

const logos = [
  "icon/logo.png", "icon/logo1.png", "icon/logo2.png", "icon/logo3.png",
  "icon/logo4.png", "icon/logo5.png", "icon/logo6.png", "icon/logo7.png",
];

export default function Pricing() {
  return (
    <main>
      {/* HERO */}
      <section className="pricing-hero-section">
        <h1>All Business Operations, Simplified</h1>
        <p>Choose the tools that fit your business — from POS to ERP to E-Commerce</p>
        <img src="icon/shot.png" alt="Kilimax Dashboard" />
      </section>

      {/* PRODUCT CARDS */}
      <section className="pricing-cards-section">
        {plans.map((plan, i) => (
          <div key={i} className="pricing-card">
            <img src={plan.img} alt={plan.name} />
            <h3>{plan.name}</h3>
            <p>{plan.desc}</p>
            <ul>
              {plan.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <Link to="/signin" className="pricing-card-btn">Get Started →</Link>
          </div>
        ))}
      </section>

      {/* INTEGRATIONS */}
      <section className="integrations-section">
        <span className="section-badge">Integrations</span>
        <h3>Integrate with Your Preferred Tools</h3>
        <p>Extend the scope of Kilimax to connect with your favourite business tools</p>
        <div className="integrations-grid">
          {integrations.map((item, i) => (
            <div key={i} className="integration-item">
              <span className="integration-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos-section">
        <div className="logo-row">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="" />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* FOOTER BANNER */}
      <section className="footer-banner">
        <img src="icon/footer.png" alt="Kilimax" />
      </section>
    </main>
  );
}
