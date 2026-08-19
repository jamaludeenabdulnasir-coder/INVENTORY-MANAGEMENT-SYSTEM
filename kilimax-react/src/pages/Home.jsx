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

const aiRows = [
  ["icon/laptop.png", "icon/screen 1.jpg", "icon/screen 2.jpg"],
  ["icon/screen 3.jpg", "icon/screen 4.jpg", "icon/screen 5.jpg"],
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
    text: "Digitizing manual processes to deliver faster operations, higher accuracy, and rapid growth - far sooner than expected.",
    to: "/stories/toya",
  },
  {
    img: "icon/final1.jpg",
    name: "IKEN COMPUTERS LTD",
    title: "Iken Computers Kenya Scales Operations with Kilimax ERP & POS",
    text: "Iken Computers, Kenya's leading Hikvision distributor, streamlined inventory, sales, and customer management with KiliMax ERP & POS",
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

function AiFeatureRow({ images, light }) {
  return (
    <div className={`ai-features-section ${light ? "light" : ""}`}>
      <h3>AI Bot Features</h3>
      <div className="ai-features-grid">
        {images.map((img, i) => (
          <div key={i} className="ai-feature-card">
            <img src={img} alt="AI Bot" />
            <h4>AI Bot</h4>
            <p>
              Kilimax AI offers automatic detection and autofill of item details such as brand
              name, category, and variants. It also enables automatic placement of a sales order
              either via text or image recognition
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoriesSection() {
  return (
    <div className="stories-section">
      <span className="section-badge">Customer Stories</span>
      <h3>See How Businesses Thrive with Kilimax</h3>
      <p className="stories-sub">
        See how businesses across Africa are transforming operations with Kilimax - streamlining
        workflows, gaining visibility, and unlocking growth through smarter, connected systems.
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
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
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

      {/* AI PARTNER SECTION */}
      <section className="ai-partner-section">
        <h3>KILLI - Your AI Business Partner</h3>
        <p>
          Kily, the AI in KilliMax, speaks your business language from WhatsApp orders to cash
          flow alerts, working quietly in the background so you can focus on selling.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="feature-section">
        <FeatureCard title="BOOST" items={boostFeatures} img="icon/phone1.png" />
        <FeatureCard
          title="Insights"
          items={insightFeatures}
          img="icon/Screenshot 2026-03-12 141549.png"
        />
      </section>

      {/* AI FEATURES GRID */}
      <AiFeatureRow images={aiRows[0]} />
      <AiFeatureRow images={aiRows[1]} light />

      {/* CUSTOMER STORIES */}
      <StoriesSection />

      {/* STATS BANNER */}
      <section className="stats-banner">
        <img src="icon/picture1.png" alt="" />
        <img src="icon/picture2.png" alt="" />
        <img src="icon/picture3.png" alt="" />
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* FOOTER BANNER */}
      <section className="footer-banner">
        <img src="icon/footer.png" alt="Kilimax" />
      </section>
    </main>
  );
}
