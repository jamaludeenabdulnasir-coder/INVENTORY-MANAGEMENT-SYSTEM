import { Link } from "react-router-dom";

export default function KilliPOS() {
  return (
    <main className="product-page">
      <section className="product-hero killipos-hero">
        <h1>KilliPOS</h1>
        <p>The only point-of-sale system you need for your wholesale business</p>
      </section>

      <section className="product-content">
        <div className="product-info">
          <h2>Powerful Point of Sale</h2>
          <p>
            Manage your entire wholesale operation from one intuitive POS system. From inventory
            tracking to customer management — KilliPOS does it all.
          </p>

          <div className="product-features">
            <div className="pf-item">
              <h4>Smart Inventory</h4>
              <p>Real-time stock tracking with automatic low-stock alerts and reorder suggestions.</p>
            </div>
            <div className="pf-item">
              <h4>Fast Checkout</h4>
              <p>Lightning-fast transactions to keep your customers moving and reduce wait times.</p>
            </div>
            <div className="pf-item">
              <h4>Multi-Store Management</h4>
              <p>Manage multiple locations from one dashboard with centralized data and reporting.</p>
            </div>
            <div className="pf-item">
              <h4>Customer Profiles</h4>
              <p>Track purchase history, credit limits, and loyalty rewards for every customer.</p>
            </div>
          </div>

          <Link to="/signin" className="product-cta">Get Started Free →</Link>
        </div>
      </section>
    </main>
  );
}
