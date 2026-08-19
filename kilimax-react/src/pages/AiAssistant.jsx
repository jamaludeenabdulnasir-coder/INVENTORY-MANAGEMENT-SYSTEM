import { Link } from "react-router-dom";

export default function AiAssistant() {
  return (
    <main className="product-page">
      <section className="product-hero">
        <h1>KILLI AI Assistant</h1>
        <p>Your intelligent business partner that speaks your language</p>
      </section>

      <section className="product-content">
        <div className="product-info">
          <h2>Smart Automation for Your Business</h2>
          <p>
            Kily, the AI in Kilimax, speaks your business language from WhatsApp orders to cash
            flow alerts, working quietly in the background so you can focus on selling.
          </p>

          <div className="product-features">
            <div className="pf-item">
              <h4>Voice & Image Recognition</h4>
              <p>Place orders via text messages or photos — Kily handles the rest automatically.</p>
            </div>
            <div className="pf-item">
              <h4>Smart Suggestions</h4>
              <p>Get personalized product recommendations based on sales history and trends.</p>
            </div>
            <div className="pf-item">
              <h4>WhatsApp Integration</h4>
              <p>Manage your business directly from WhatsApp — orders, invoices, and alerts.</p>
            </div>
            <div className="pf-item">
              <h4>Cash Flow Alerts</h4>
              <p>Receive automatic reminders for overdue payments and low-stock warnings.</p>
            </div>
          </div>

          <Link to="/signin" className="product-cta">Get Started Free →</Link>
        </div>
      </section>
    </main>
  );
}
