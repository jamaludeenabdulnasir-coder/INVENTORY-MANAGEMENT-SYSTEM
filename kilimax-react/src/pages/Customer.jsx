import { Link } from "react-router-dom";

const stories = [
  {
    img: "icon/customer 1.png",
    name: "Max Buy",
    title: "MaxBuy Streamlines 40+ Stores with Kilimax",
    text: "One unified system cut through growing complexity, boosting stock accuracy, staff control, and turnover within months.",
    to: "/stories/maxbuy",
    country: "Kenya",
    stores: "40+",
  },
  {
    img: "icon/customer 2.jpg",
    name: "Toyar",
    title: "Toyar's Breakthrough with Kilimax",
    text: "Digitizing manual processes to deliver faster operations, higher accuracy, and rapid growth — far sooner than expected.",
    to: "/stories/toya",
    country: "Kenya",
    stores: "25+",
  },
  {
    img: "icon/final1.jpg",
    name: "IKEN COMPUTERS LTD",
    title: "Iken Computers Kenya Scales Operations with Kilimax ERP & POS",
    text: "Iken Computers, Kenya's leading Hikvision distributor, streamlined inventory, sales, and customer management with KiliMax ERP & POS.",
    to: "/stories/iken",
    country: "Kenya",
    stores: "15+",
  },
  {
    img: "icon/final2.jpg",
    name: "SPECTRUM PHONES LTD",
    title: "Spectrum Nigeria Scales Nationally with Kilimax ERP & POS",
    text: "Spectrum Nigeria grew from a single store to over 60 locations nationwide with KiliMax ERP, POS, and AI-powered insights.",
    to: "/stories/spectrum",
    country: "Nigeria",
    stores: "60+",
  },
  {
    img: "icon/final3.jpg",
    name: "ANKE-HAIER HOME APPLIANCES",
    title: "Anke-Haier Kenya Powers Smarter Operations with Kilimax",
    text: "Anke-Haier Kenya's trusted Haier distributor implemented KiliMax ERP to centralize operations, track inventory, and optimize order processing.",
    to: "#",
    country: "Kenya",
    stores: "10+",
  },
  {
    img: "icon/final4.jpg",
    name: "TAICO POWER KENYA",
    title: "Taico Power Kenya Accelerates Growth with Kilimax ERP & POS",
    text: "Taico Power Kenya, a leading renewable energy company, implemented Kilimax ERP & POS to automate sales, inventory, and multi-country operations.",
    to: "#",
    country: "Kenya",
    stores: "12+",
  },
];

const featured = stories[0];
const rest = stories.slice(1);

const stats = [
  { num: "500+", label: "Businesses Trust Us" },
  { num: "15+", label: "Countries" },
  { num: "60+", label: "Stores per Client" },
  { num: "99.9%", label: "Uptime" },
];

export default function Customer() {
  return (
    <main className="cus-page">
      {/* HERO */}
      <section className="cus-hero">
        <span className="section-badge light">Customer Stories</span>
        <h1>Real Businesses, Real Results</h1>
        <p>
          See how companies across Africa are transforming their operations
          with KiliMax — from a single store to nationwide scale.
        </p>
      </section>

      {/* STATS */}
      <section className="cus-stats">
        {stats.map((s, i) => (
          <div key={i} className="cus-stat">
            <h3>{s.num}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* FEATURED STORY */}
      <section className="cus-featured">
        <div className="cus-featured-img">
          <img src={featured.img} alt={featured.name} />
          <div className="cus-featured-badge">Featured Story</div>
        </div>
        <div className="cus-featured-content">
          <div className="cus-featured-meta">
            <span className="cus-tag">{featured.country}</span>
            <span className="cus-tag">{featured.stores} Stores</span>
          </div>
          <h2>{featured.title}</h2>
          <p>{featured.text}</p>
          <Link to={featured.to} className="cus-read-btn">Read Full Story →</Link>
        </div>
      </section>

      {/* ALL STORIES */}
      <section className="cus-stories">
        <span className="section-badge">Success Stories</span>
        <h2>More Customer Stories</h2>
        <p className="cus-stories-sub">
          Every business has a unique journey. Explore how KiliMax helps them grow.
        </p>
        <div className="cus-stories-grid">
          {rest.map((s, i) => (
            <div key={i} className="cus-card">
              <div className="cus-card-img">
                <img src={s.img} alt={s.name} />
                <div className="cus-card-overlay">
                  <span className="cus-tag">{s.country}</span>
                  <span className="cus-tag">{s.stores} Stores</span>
                </div>
              </div>
              <div className="cus-card-body">
                <h4 className="cus-card-name">{s.name}</h4>
                <h3 className="cus-card-title">{s.title}</h3>
                <p className="cus-card-text">{s.text}</p>
                <Link to={s.to} className="cus-card-link">Read Story →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cus-cta">
        <h2>Ready to Write Your Success Story?</h2>
        <p>Join hundreds of businesses growing with KiliMax every day.</p>
        <div className="cus-cta-btns">
          <Link to="/getstarted" className="cus-cta-primary">Get Started Free →</Link>
          <Link to="/pricing" className="cus-cta-secondary">View Pricing</Link>
        </div>
      </section>

      {/* JOURNEY CTA */}
      <section className="journey-cta">
        <div className="journey-cta-inner">
          <span className="section-badge light">Get Started Today</span>
          <h2>Your Journey Starts Here</h2>
          <p>
            Join hundreds of businesses across Africa already growing with KiliMax.
            Start your free trial today — no credit card required.
          </p>
          <div className="journey-cta-btns">
            <Link to="/getstarted" className="journey-cta-primary">Start Free Trial →</Link>
            <Link to="/pricing" className="journey-cta-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
