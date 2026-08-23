import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";

const STEPS = ["Account Info", "Security"];

function validateEmail(v) {
  if (!v) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email";
  return "";
}

function validatePhone(v) {
  if (!v) return "Phone is required";
  if (!/^[\+]?[\d\s\-()]{7,15}$/.test(v)) return "Enter a valid phone number";
  return "";
}

function validatePassword(v) {
  if (!v) return "Password is required";
  if (v.length < 6) return "At least 6 characters";
  return "";
}

function validateConfirm(v, pw) {
  if (!v) return "Please confirm your password";
  if (v !== pw) return "Passwords do not match";
  return "";
}

function passwordStrength(pw) {
  if (!pw) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  if (score <= 1) return { score: 1, label: "Weak", color: "#e74c3c" };
  if (score <= 2) return { score: 2, label: "Fair", color: "#f39c12" };
  if (score <= 3) return { score: 3, label: "Good", color: "#3498db" };
  return { score: 4, label: "Strong", color: "#0aa876" };
}

export default function GetStarted() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState("next");
  const [submitted, setSubmitted] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }, []);

  const handleBlur = useCallback((name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const validateField = useCallback(
    (name) => {
      switch (name) {
        case "email": return validateEmail(form.email);
        case "phone": return validatePhone(form.phone);
        case "password": return validatePassword(form.password);
        case "confirmPassword": return validateConfirm(form.confirmPassword, form.password);
        default: return "";
      }
    },
    [form]
  );

  const validateStep = useCallback(
    (s) => {
      const fields = s === 0 ? ["email", "phone"] : ["password", "confirmPassword"];
      const newErrors = {};
      let valid = true;
      fields.forEach((f) => {
        const err = validateField(f);
        if (err) {
          newErrors[f] = err;
          valid = false;
        }
      });
      setErrors((prev) => ({ ...prev, ...newErrors }));
      const newTouched = {};
      fields.forEach((f) => (newTouched[f] = true));
      setTouched((prev) => ({ ...prev, ...newTouched }));
      return valid;
    },
    [validateField]
  );

  const goNext = useCallback(() => {
    if (!validateStep(step)) return;
    setDirection("next");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }, [step, validateStep]);

  const goBack = useCallback(() => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateStep(step)) return;
      if (!form.agree) {
        setErrors((prev) => ({ ...prev, agree: "You must agree to the terms" }));
        return;
      }
      setLoading(true);
      setServerError("");
      try {
        await api.signup({
          name: form.email.split("@")[0],
          email: form.email,
          phone: form.phone,
          password: form.password,
        });
        setSubmitted(true);
      } catch (err) {
        setServerError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [step, form, validateStep]
  );

  const strength = useMemo(() => passwordStrength(form.password), [form.password]);

  const stepErrors = useMemo(() => {
    if (step === 0) return [errors.email, errors.phone];
    return [errors.password, errors.confirmPassword];
  }, [step, errors]);

  const hasStepErrors = stepErrors.some(Boolean);

  if (submitted) {
    return (
      <main className="gs-page">
        <nav className="gs-nav">
          <Link to="/" className="gs-logo">
            <img src="icon/log123.jpg" alt="" width="50" height="30" />
            <span>KILIMax</span>
          </Link>
        </nav>
        <div className="gs-success">
          <div className="gs-success-check">
            <svg viewBox="0 0 52 52" className="gs-check-svg">
              <circle cx="26" cy="26" r="25" fill="none" className="gs-check-circle" />
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" className="gs-check-path" />
            </svg>
          </div>
          <h2>Account Created!</h2>
          <p>Welcome to KiliMax! Your account <strong>{form.email}</strong> has been created successfully.</p>
          <Link to="/signin" className="gs-btn-primary">Go to Sign In →</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="gs-page">
      {/* NAV */}
      <nav className="gs-nav">
        <Link to="/" className="gs-logo">
          <img src="icon/log123.jpg" alt="" width="50" height="30" />
          <span>KILIMax</span>
        </Link>
        <select defaultValue="English" className="gs-lang">
          <option>English</option>
          <option>Portuguese</option>
          <option>French</option>
        </select>
      </nav>

      <div className="gs-layout">
        {/* LEFT PANEL */}
        <div className="gs-left">
          <div className="gs-left-content">
            <img src="icon/Register.png" alt="Register" className="gs-left-img" />
            <h2>Build Your Business with KiliMax</h2>
            <p>Join hundreds of businesses already growing with our AI-powered platform.</p>
            <div className="gs-left-features">
              <div className="gs-left-feature">
                <span>🚀</span>
                <span>Setup in 5 minutes</span>
              </div>
              <div className="gs-left-feature">
                <span>🔒</span>
                <span>Bank-grade security</span>
              </div>
              <div className="gs-left-feature">
                <span>🌍</span>
                <span>15+ countries supported</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="gs-right">
          <div className="gs-form-wrapper">
            <h1>Create Your Account</h1>
            <p className="gs-subtitle">Join KiliMax Partner Network Today</p>

            {/* PROGRESS */}
            <div className="gs-progress">
              {STEPS.map((label, i) => (
                <div key={i} className={`gs-progress-step ${i <= step ? "active" : ""} ${i < step ? "done" : ""}`}>
                  <div className="gs-step-dot">
                    {i < step ? (
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span className="gs-step-label">{label}</span>
                  {i < STEPS.length - 1 && <div className="gs-step-line" />}
                </div>
              ))}
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} noValidate>
              <div className={`gs-step-panel ${direction}`} key={step}>
                {step === 0 && (
                  <>
                    <div className="gs-field">
                      <label>Email Address *</label>
                      <div className={`gs-input-wrap ${touched.email && errors.email ? "error" : ""} ${touched.email && !errors.email && form.email ? "valid" : ""}`}>
                        <span className="gs-input-icon">✉</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur("email")}
                        />
                        {touched.email && !errors.email && form.email && <span className="gs-valid-icon">✓</span>}
                      </div>
                      {touched.email && errors.email && <span className="gs-error">{errors.email}</span>}
                    </div>

                    <div className="gs-field">
                      <label>Phone Number *</label>
                      <div className={`gs-input-wrap ${touched.phone && errors.phone ? "error" : ""} ${touched.phone && !errors.phone && form.phone ? "valid" : ""}`}>
                        <span className="gs-input-icon">📞</span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+254 700 000 000"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur("phone")}
                        />
                        {touched.phone && !errors.phone && form.phone && <span className="gs-valid-icon">✓</span>}
                      </div>
                      {touched.phone && errors.phone && <span className="gs-error">{errors.phone}</span>}
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="gs-field">
                      <label>Password *</label>
                      <div className={`gs-input-wrap ${touched.password && errors.password ? "error" : ""}`}>
                        <span className="gs-input-icon">🔒</span>
                        <input
                          type={showPw ? "text" : "password"}
                          name="password"
                          placeholder="Create a strong password"
                          value={form.password}
                          onChange={handleChange}
                          onBlur={() => handleBlur("password")}
                        />
                        <button type="button" className="gs-toggle-pw" onClick={() => setShowPw((p) => !p)} tabIndex={-1}>
                          {showPw ? "🙈" : "👁"}
                        </button>
                      </div>
                      {touched.password && errors.password && <span className="gs-error">{errors.password}</span>}

                      {/* STRENGTH METER */}
                      {form.password && (
                        <div className="gs-strength">
                          <div className="gs-strength-bar">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className={`gs-strength-seg ${i <= strength.score ? "filled" : ""}`}
                                style={{ background: i <= strength.score ? strength.color : undefined }}
                              />
                            ))}
                          </div>
                          <span className="gs-strength-label" style={{ color: strength.color }}>
                            {strength.label}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="gs-field">
                      <label>Confirm Password *</label>
                      <div className={`gs-input-wrap ${touched.confirmPassword && errors.confirmPassword ? "error" : ""} ${touched.confirmPassword && !errors.confirmPassword && form.confirmPassword ? "valid" : ""}`}>
                        <span className="gs-input-icon">🔒</span>
                        <input
                          type={showConfirm ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Re-enter your password"
                          value={form.confirmPassword}
                          onChange={handleChange}
                          onBlur={() => handleBlur("confirmPassword")}
                        />
                        <button type="button" className="gs-toggle-pw" onClick={() => setShowConfirm((p) => !p)} tabIndex={-1}>
                          {showConfirm ? "🙈" : "👁"}
                        </button>
                      </div>
                      {touched.confirmPassword && errors.confirmPassword && <span className="gs-error">{errors.confirmPassword}</span>}
                    </div>

                    <label className="gs-checkbox">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                      />
                      <span className="gs-checkmark" />
                      <span>
                        I agree to the{" "}
                        <Link to="/terms" target="_blank">Terms of Use</Link> and{" "}
                        <Link to="/policy" target="_blank">Privacy Policy</Link>
                      </span>
                    </label>
                    {errors.agree && <span className="gs-error" style={{ marginTop: -10 }}>{errors.agree}</span>}
                  </>
                )}
              </div>

              {/* BUTTONS */}
              {serverError && <span className="gs-error" style={{ marginBottom: 12, display: "block" }}>{serverError}</span>}
              <div className="gs-btn-row">
                {step > 0 && (
                  <button type="button" className="gs-btn-back" onClick={goBack}>
                    ← Back
                  </button>
                )}
                {step < STEPS.length - 1 ? (
                  <button type="button" className="gs-btn-primary" onClick={goNext} disabled={hasStepErrors && touched.email}>
                    Continue →
                  </button>
                ) : (
                  <button type="submit" className="gs-btn-primary" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Account →"}
                  </button>
                )}
              </div>
            </form>

            <p className="gs-signin-link">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
