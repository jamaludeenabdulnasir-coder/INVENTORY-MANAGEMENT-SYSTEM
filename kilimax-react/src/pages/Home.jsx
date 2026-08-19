import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";

const boostFeatures = [
  "Smart ordering allows you to expand",
  "Manage your catalogue by adding or updating products in seconds",
  "Increase sales by converting more orders, faster",
  "Retain customer loyalty through consistent follow-ups",
];

const insightFeatures = [
  "Alert for low stock, slow-moving items, and sales drops",
  "Automatic credit and overdue payment reminders, keeping your cash flow steady",
  "Recommends which products to promote or restock",
  "Flags unprofitable or overstocked items",
];

const aiImages = [
  "icon/laptop.png",
  "icon/screen 1.jpg",
  "icon/screen 2.jpg",
  "icon/screen 3.jpg",
  "icon/screen 4.jpg",
  "icon/screen 5.jpg",
];

const stories = [
  {
    img: "icon/customer 1.png",
    name: "Max Buy",
    title: "MaxBuy Streamlines 40+ Stores with Kilimax",
    text: "One unified system cut through growing complexity, boosting stock accuracy, staff control, and turnover within months",
    to: "/stories/maxbuy",
  },
  {
    img: "icon/customer 2.jpg",
    name: "Toyar",
    title: "Toyar's Breakthrough with Kilimax",
    text: "Digitizing manual processes to deliver faster operations, higher accuracy, and rapid growth.",
    to: "/stories/toya",
  },
  {
    img: "icon/final1.jpg",
    name: "IKEN COMPUTERS LTD",
    title: "Iken Computers Scales Operations with Kilimax ERP & POS",
    text: "Kenya's leading Hikvision distributor streamlined inventory, sales, and customer management with KiliMax.",
    to: "/stories/iken",
  },
];

function FeatureCard({ title, items, img }) {
  return (
    <div className="feature-card">
      <h4>{title}</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <img src={img} alt={title} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <h1>The Only Software You Need For Your Wholesale Business</h1>
        <p className="hero-subtitle">
          Streamline inventory, boost sales, and grow your business with one powerful platform
        </p>
        <Link to="/signin" className="hero-btn">
          Get a free Trial →
        </Link>
        <img id="one" src="icon/KILI.png" alt="Kilimax Dashboard" />
      </section>

      {/* SCREENSHOTS */}
      <section className="img-row-section">
        <img id="two" src="icon/image 2 .png" alt="" />
        <img id="three" src="icon/image 3.png" alt="" />
      </section>

      {/* FEATURES — BOOST & INSIGHTS */}
      <section className="feature-section">
        <FeatureCard title="BOOST" items={boostFeatures} img="icon/phone1.png" />
        <FeatureCard
          title="Insights"
          items={insightFeatures}
          img="icon/Screenshot 2026-03-12 141549.png"
        />
      </section>

      {/* AI ASSISTANT */}
      <section className="ai-combined-section">
        <div className="ai-combined-header">
          <span className="section-badge">AI Powered</span>
          <h3>KILLI — Your AI Business Partner</h3>
          <p>
            Kily, the AI in KilliMax, speaks your business language from WhatsApp orders to cash
            flow alerts, working quietly in the background so you can focus on selling.
          </p>
        </div>
        <div className="ai-combined-grid">
          {aiImages.map((img, i) => (
            <div key={i} className="ai-combined-card">
              <img src={img} alt="AI Bot" />
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section className="stories-section">
        <span className="section-badge">Customer Stories</span>
        <h3>See How Businesses Thrive with Kilimax</h3>
        <p className="stories-sub">
          See how businesses across Africa are transforming operations with Kilimax
        </p>
        <Link to="/customer" className="btn-primary">See all Stories</Link>

        <div className="stories-grid">
          {stories.map((s, i) => (
            <div key={i} className="story-card">
              <img src={s.img} alt={s.name} />
              <h4>{s.name}</h4>
              <p className="story-title">{s.title}</p>
              <p className="story-text">{s.text}</p>
              <Link className="read-story" to={s.to}>
                Read Story →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-banner">
        <img src="icon/picture1.png" alt="" />
        <img src="icon/picture2.png" alt="" />
        <img src="icon/picture3.png" alt="" />
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
