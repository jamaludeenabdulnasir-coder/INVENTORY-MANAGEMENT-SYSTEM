import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <main style={{ paddingTop: "70px" }}>
      <nav className="auth-nav">
        <Link to="/">
          <img src="icon/log123.jpg" width="70" height="40" alt="KILIMax logo" />
        </Link>

        <ul className="menu-list">
          <li>
            <Link to="/">KILIMax</Link>
          </li>
          <li>
            <select defaultValue="English">
              <option>English</option>
              <option>Portuguese</option>
              <option>French</option>
            </select>
          </li>
        </ul>
      </nav>

      <div className="auth-container">
        <div className="left">
          <img src="icon/Register.png" alt="Register" />
        </div>

        <div className="right">
          <div className="form-card">
            <h1>Create Your Account</h1>
            <p>Join KILIMax Partner Network Today</p>

            <form>
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
                <label>Verification Code</label>
                <input type="text" placeholder="Enter code" required />
              </div>

              <button className="submit-btn">Sign In</button>
              <div className="signin-link">
                Don't have an account? <Link to="/signin">Sign Up Now</Link>
              </div>

              <div className="accept">
                By proceeding, you agree to our <Link to="/terms">Terms of Use</Link> and{" "}
                <Link to="/policy">Privacy Policy</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
