import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <main className="getstarted-page">
      <nav className="getstarted-nav">
        <ul className="menu-left">
          <li>
            <Link to="/">
              <img src="icon/log123.jpg" alt="" width="70" height="40" />
            </Link>
          </li>
          <li>
            <Link to="/">KILIMax</Link>
          </li>
        </ul>

        <select defaultValue="English">
          <option>English</option>
          <option>Portuguese</option>
        </select>
      </nav>

      <section className="hero">
        <h1>Get Started</h1>
        <p>Join KILIMax Partner Network Today</p>
      </section>

      <div className="getstarted-container">
        <div className="form-card">
          <form>
            <div className="form-grid">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter phone number" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" required />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" required />
              </div>

              <div className="form-group">
                <label>Verification Code</label>
                <input type="text" placeholder="Enter code" required />
              </div>
            </div>

            <button className="submit-btn">Create Account</button>
          </form>
        </div>
      </div>
    </main>
  );
}
