import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleBlur = useCallback((name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const validate = useCallback(() => {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "At least 6 characters";
    return errs;
  }, [form]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({ email: true, password: true });
    if (Object.keys(errs).length === 0) {
      // TODO: handle sign in
    }
  }, [validate]);

  return (
    <main className="si-page">
      {/* NAV */}
      <nav className="si-nav">
        <Link to="/" className="si-logo">
          <img src="icon/log123.jpg" alt="" width="44" height="26" />
          <span>KILIMax</span>
        </Link>
        <select defaultValue="English" className="si-lang">
          <option>English</option>
          <option>Portuguese</option>
          <option>French</option>
        </select>
      </nav>

      <div className="si-layout">
        {/* LEFT PANEL */}
        <div className="si-left">
          <div className="si-left-content">
            <img src="icon/Register.png" alt="Welcome" className="si-left-img" />
            <h2>Welcome Back!</h2>
            <p>Sign in to manage your business from one powerful dashboard.</p>
            <div className="si-left-features">
              <div className="si-left-feature">
                <span>📊</span>
                <span>Real-time analytics</span>
              </div>
              <div className="si-left-feature">
                <span>🛒</span>
                <span>Inventory management</span>
              </div>
              <div className="si-left-feature">
                <span>💬</span>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="si-right">
          <div className="si-form-wrapper">
            <h1>Sign In</h1>
            <p className="si-subtitle">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="si-field">
                <label>Email Address</label>
                <div className={`si-input-wrap ${touched.email && errors.email ? "error" : ""} ${touched.email && !errors.email && form.email ? "valid" : ""}`}>
                  <span className="si-input-icon">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                  />
                  {touched.email && !errors.email && form.email && <span className="si-valid-icon">✓</span>}
                </div>
                {touched.email && errors.email && <span className="si-error">{errors.email}</span>}
              </div>

              <div className="si-field">
                <div className="si-field-header">
                  <label>Password</label>
                  <Link to="#" className="si-forgot">Forgot password?</Link>
                </div>
                <div className={`si-input-wrap ${touched.password && errors.password ? "error" : ""} ${touched.password && !errors.password && form.password ? "valid" : ""}`}>
                  <span className="si-input-icon">🔒</span>
                  <input
                    type={showPw ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={() => handleBlur("password")}
                  />
                  <button type="button" className="si-toggle-pw" onClick={() => setShowPw((p) => !p)} tabIndex={-1}>
                    {showPw ? "🙈" : "👁"}
                  </button>
                </div>
                {touched.password && errors.password && <span className="si-error">{errors.password}</span>}
              </div>

              <label className="si-checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="si-checkmark" />
                <span>Remember me for 30 days</span>
              </label>

              <button type="submit" className="si-btn-primary">Sign In →</button>
            </form>

            <div className="si-divider">
              <span>or</span>
            </div>

            <div className="si-social-row">
              <button type="button" className="si-social-btn">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button type="button" className="si-social-btn">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="currentColor"/></svg>
                GitHub
              </button>
            </div>

            <p className="si-signup-link">
              Don't have an account? <Link to="/getstarted">Create one now</Link>
            </p>

            <p className="si-terms">
              By signing in, you agree to our{" "}
              <Link to="/terms">Terms of Use</Link> and{" "}
              <Link to="/policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
