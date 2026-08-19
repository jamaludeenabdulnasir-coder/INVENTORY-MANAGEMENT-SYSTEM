import { Link } from "react-router-dom";

export default function KilliStore() {
  return (
    <main className="product-page">
      <section className="product-hero killistore-hero">
        <h1>KilliStore</h1>
        <p>A fully integrated online-to-offline e-commerce platform</p>
      </section>

      <section className="product-content">
        <div className="product-info">
          <h2>Seamless Online-to-Offline Experience</h2>
          <p>
            Create a fully integrated online-to-offline (O2O) experience for your customers.
            KilliStore connects your physical stores with your online presence.
          </p>

          <div className="product-features">
            <div className="pf-item">
              <h4>Online Ordering</h4>
              <p>Customers can complete product selection and payment through Kilishop online.</p>
            </div>
            <div className="pf-item">
              <h4>In-Store Pickup</h4>
              <p>Customers pick up their order at the nearest store, saving time and delivery costs.</p>
            </div>
            <div className="pf-item">
              <h4>Real-Time Data Sync</h4>
              <p>Online orders are instantly pushed to the KilliPOS system for immediate fulfillment.</p>
            </div>
            <div className="pf-item">
              <h4>Increased Foot Traffic</h4>
              <p>The pickup model increases store visits, creating additional sales opportunities.</p>
            </div>
          </div>

          <Link to="/signin" className="product-cta">Get Started Free →</Link>
        </div>
      </section>
    </main>
  );
}
