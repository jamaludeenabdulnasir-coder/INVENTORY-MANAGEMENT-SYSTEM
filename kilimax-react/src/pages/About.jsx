import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="about-hero">
        <span className="section-badge light">About Us</span>
        <h1>Empowering African Businesses with Smart Software</h1>
        <p>
          We're on a mission to make powerful business tools accessible to every African enterprise
        </p>
        <img src="icon/abu.png" alt="Kilimax Team" />
      </section>

      {/* WHO WE ARE */}
      <section className="about-split">
        <div className="about-split-img">
          <img src="icon/abu1.jpg" alt="Kilimax Office" />
        </div>
        <div className="about-split-content">
          <span className="section-badge">Our Story</span>
          <h2>Who We Are</h2>
          <p>
            Kilimax is a proudly African technology company, headquartered in Kenya with a
            growing presence across the continent — including offices in Nigeria, Tanzania,
            Angola, and more.
          </p>
          <p>
            We're on a mission to empower African businesses with smart, accessible software
            solutions. Our flagship product, an all-in-one ERP system, is designed to be
            simple, powerful, and tailored to the unique needs of African markets.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="about-industries">
        <span className="section-badge light">What We Do</span>
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          <div className="industry-card">
            <img src="icon/pix.png" alt="Retail" />
            <h4>Retail</h4>
          </div>
          <div className="industry-card">
            <img src="icon/pix1.png" alt="Wholesale" />
            <h4>Wholesale</h4>
          </div>
          <div className="industry-card">
            <img src="icon/pix2.png" alt="Distribution" />
            <h4>Distribution</h4>
          </div>
          <div className="industry-card">
            <img src="icon/pix3.png" alt="Manufacturing" />
            <h4>Manufacturing</h4>
          </div>
        </div>
      </section>

      {/* BUILT AROUND YOU */}
      <section className="about-built">
        <div className="about-built-text">
          <span className="section-badge">Our Promise</span>
          <h2>Built Around You</h2>
          <p>
            At KiliMax, our customers are more than just users — they are our partners in progress.
            Every challenge you face shapes the solutions we build, and your growth is a measure
            of our success.
          </p>
          <p>
            We're here to listen, adapt, and grow with you every step of the way.
          </p>
        </div>
        <div className="about-built-images">
          <div className="about-built-col">
            <img src="icon/pix6.png" alt="" />
          </div>
          <div className="about-built-col">
            <img src="icon/pix4.png" alt="" />
            <img src="icon/pix5.png" alt="" />
          </div>
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
