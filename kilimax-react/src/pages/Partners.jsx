import { useState } from "react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: "🤝",
    title: "Revenue Sharing",
    desc: "Earn competitive commissions on every client you refer. Scale your income as your network grows.",
  },
  {
    icon: "🎓",
    title: "Training & Certification",
    desc: "Get hands-on training and certification to confidently sell and support KiliMax products.",
  },
  {
    icon: "📣",
    title: "Marketing Support",
    desc: "Access co-branded materials, campaign assets, and dedicated marketing support to close deals faster.",
  },
  {
    icon: "🚀",
    title: "Lead Referrals",
    desc: "Receive qualified leads directly from our sales team in your region.",
  },
  {
    icon: "🛠️",
    title: "Technical Backing",
    desc: "Rely on our dedicated partner engineering team for pre-sales and implementation support.",
  },
  {
    icon: "📈",
    title: "Growth Roadmap",
    desc: "Get a personalized growth plan with milestones, quotas, and exclusive partner-tier rewards.",
  },
];

const partnerTypes = [
  {
    title: "Resellers",
    desc: "Sell KiliMax products directly to businesses in your region. Perfect for IT firms and software distributors looking to expand their portfolio.",
    img: "icon/screen 1.jpg",
    perks: ["Regional exclusivity options", "Volume-based pricing", "Co-marketing fund"],
  },
  {
    title: "Implementation Partners",
    desc: "Help businesses deploy and customize KiliMax solutions. Ideal for consultancies and system integrators.",
    img: "icon/screen 2.jpg",
    perks: ["Implementation fee revenue", "Certified consultant badge", "Priority support channel"],
  },
  {
    title: "Technology Partners",
    desc: "Integrate your tools and services with the KiliMax platform. Build on our API and reach thousands of businesses.",
    img: "icon/screen 3.jpg",
    perks: ["API access & sandbox", "Joint solution listing", "Co-development support"],
  },
];

const steps = [
  { num: "01", title: "Apply", desc: "Fill out the partner application form below. We review every submission within 48 hours." },
  { num: "02", title: "Onboard", desc: "Get access to your partner portal, sales training, and certification programs." },
  { num: "03", title: "Sell", desc: "Start selling KiliMax products with full marketing and technical support from our team." },
  { num: "04", title: "Earn", desc: "Earn commissions, unlock tier rewards, and grow your business with us." },
];

const logos = [
  "icon/logo.png", "icon/logo1.png", "icon/logo2.png", "icon/logo3.png",
  "icon/logo4.png", "icon/logo5.png", "icon/logo6.png", "icon/logo7.png",
];

export default function Partners() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", type: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main>
      {/* HERO */}
      <section className="partner-hero">
        <span className="section-badge light">Partner Program</span>
        <h1>Grow Your Business with KiliMax</h1>
        <p>
          Join Africa's fastest-growing partner network. Resell, integrate, or implement
          KiliMax solutions — and earn while you scale.
        </p>
        <div className="partner-hero-btns">
          <a href="#apply" className="partner-hero-primary">Become a Partner</a>
          <a href="#benefits" className="partner-hero-secondary">Learn More ↓</a>
        </div>
        <div className="partner-hero-img">
          <img src="icon/picture2.png" alt="KiliMax Partners" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="partner-stats">
        <div className="partner-stat">
          <h3>500+</h3>
          <p>Active Partners</p>
        </div>
        <div className="partner-stat">
          <h3>15+</h3>
          <p>Countries</p>
        </div>
        <div className="partner-stat">
          <h3>$2M+</h3>
          <p>Partner Earnings</p>
        </div>
        <div className="partner-stat">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="partner-benefits" id="benefits">
        <span className="section-badge">Why Partner</span>
        <h2>Everything You Need to Succeed</h2>
        <p className="partner-benefits-sub">
          We invest in our partners' success with tools, training, and support at every stage.
        </p>
        <div className="partner-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="partner-benefit-card">
              <span className="partner-benefit-icon">{b.icon}</span>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="partner-types">
        <span className="section-badge light">Partner Tiers</span>
        <h2>Choose Your Partnership Path</h2>
        <div className="partner-types-grid">
          {partnerTypes.map((pt, i) => (
            <div key={i} className="partner-type-card">
              <div className="partner-type-img">
                <img src={pt.img} alt={pt.title} />
              </div>
              <div className="partner-type-content">
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
                <ul>
                  {pt.perks.map((perk, j) => (
                    <li key={j}>✓ {perk}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="partner-steps">
        <span className="section-badge">How It Works</span>
        <h2>Start Earning in 4 Steps</h2>
        <div className="partner-steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="partner-step-card">
              <span className="partner-step-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="partner-apply" id="apply">
        <div className="partner-apply-content">
          <span className="section-badge">Get Started</span>
          <h2>Become a KiliMax Partner</h2>
          <p>Fill out the form and our partnerships team will reach out within 48 hours.</p>
        </div>
        <form className="partner-apply-form" onSubmit={(e) => e.preventDefault()}>
          <div className="partner-form-row">
            <div className="partner-form-group">
              <label>Full Name *</label>
              <input type="text" name="name" placeholder="John Mwangi" value={form.name} onChange={handleChange} required />
            </div>
            <div className="partner-form-group">
              <label>Email Address *</label>
              <input type="email" name="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="partner-form-row">
            <div className="partner-form-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" placeholder="+254 700 000 000" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="partner-form-group">
              <label>Company Name *</label>
              <input type="text" name="company" placeholder="Your company" value={form.company} onChange={handleChange} required />
            </div>
          </div>
          <div className="partner-form-group">
            <label>Partnership Type *</label>
            <select name="type" value={form.type} onChange={handleChange} required>
              <option value="">Select a partner type</option>
              <option value="reseller">Reseller</option>
              <option value="implementation">Implementation Partner</option>
              <option value="technology">Technology Partner</option>
            </select>
          </div>
          <button type="submit" className="partner-apply-btn">Submit Application →</button>
        </form>
      </section>

      {/* LOGOS */}
      <section className="logos-section">
        <h3>Trusted by Leading Brands</h3>
        <div className="logo-row">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="" />
          ))}
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
