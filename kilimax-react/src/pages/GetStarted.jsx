import { useState, useCallback, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";

const STEPS = ["Account Info", "Security", "Verification"];

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

function validateCode(v) {
  if (!v) return "Verification code is required";
  if (!/^\d{4,8}$/.test(v.trim())) return "Enter the 6-digit verification code";
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
    code: "",
    agree: false,
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [countdown, setCountdown] = useState(0);

  // Resend cooldown timer
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
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
        case "code": return validateCode(form.code);
        default: return "";
      }
    },
    [form]
  );

  const validateStep = useCallback(
    (s) => {
      const fields =
        s === 0
          ? ["email", "phone"]
          : s === 1
          ? ["password", "confirmPassword"]
          : ["code"];

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

  // Step 0 -> Step 1 or Step 1 -> Step 2
  const goNext = useCallback(async () => {
    if (!validateStep(step)) return;

    if (step === 0) {
      setDirection("next");
      setStep(1);
      return;
    }

    if (step === 1) {
      if (!form.agree) {
        setErrors((prev) => ({ ...prev, agree: "You must agree to the terms" }));
        return;
      }

      setLoading(true);
      setServerError("");
      setInfoMessage("");
      try {
        const res = await api.sendVerificationCode(form.email);
        setDirection("next");
        setStep(2);
        setCountdown(60);
        setInfoMessage(
          res.code
            ? `Verification code sent! (Your code is: ${res.code})`
            : `Verification code sent to ${form.email}`
        );
        if (res.code) {
          setForm((prev) => ({ ...prev, code: res.code }));
        }
      } catch (err) {
        setServerError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, [step, form, validateStep]);

  const goBack = useCallback(() => {
    setDirection("back");
    setServerError("");
    setInfoMessage("");
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const handleResendCode = useCallback(async () => {
    if (countdown > 0) return;
    setLoading(true);
    setServerError("");
    setInfoMessage("");
    try {
      const res = await api.sendVerificationCode(form.email);
      setCountdown(60);
      setInfoMessage(
        res.code
          ? `New code sent! (Your code is: ${res.code})`
          : `New verification code sent to ${form.email}`
      );
      if (res.code) {
        setForm((prev) => ({ ...prev, code: res.code }));
      }
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  }, [form.email, countdown]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateStep(2)) return;

      setLoading(true);
      setServerError("");
      try {
        const { token } = await api.signup({
          name: form.email.split("@")[0],
          email: form.email,
          phone: form.phone,
          password: form.password,
          code: form.code,
        });

        if (token) {
          localStorage.setItem("token", token);
        }
        setSubmitted(true);
      } catch (err) {
        setServerError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [form, validateStep]
  );

  const strength = useMemo(() => passwordStrength(form.password), [form.password]);

  const stepErrors = useMemo(() => {
    if (step === 0) return [errors.email, errors.phone];
    if (step === 1) return [errors.password, errors.confirmPassword];
    return [errors.code];
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
          <h2>Account Created & Verified!</h2>
          <p>Welcome to KiliMax! Your account <strong>{form.email}</strong> has been successfully verified.</p>
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
            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); goNext(); }} noValidate>
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

                {step === 2 && (
                  <>
                    <div style={{ marginBottom: 16 }}>
                      <p style={{ fontSize: 14, color: "#444", marginBottom: 6 }}>
                        We sent a 6-digit verification code to <strong>{form.email}</strong>.
                      </p>
                      {infoMessage && (
                        <div style={{ background: "#e8f8f2", border: "1px solid #a3e6cd", color: "#066a4a", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 14 }}>
                          ✓ {infoMessage}
                        </div>
                      )}
                    </div>

                    <div className="gs-field">
                      <label>6-Digit Verification Code *</label>
                      <div className={`gs-input-wrap ${touched.code && errors.code ? "error" : ""} ${touched.code && !errors.code && form.code ? "valid" : ""}`}>
                        <span className="gs-input-icon">🔑</span>
                        <input
                          type="text"
                          name="code"
                          maxLength={8}
                          placeholder="e.g. 123456"
                          value={form.code}
                          onChange={handleChange}
                          onBlur={() => handleBlur("code")}
                          autoFocus
                          style={{ letterSpacing: "2px", fontWeight: "700" }}
                        />
                        {touched.code && !errors.code && form.code && <span className="gs-valid-icon">✓</span>}
                      </div>
                      {touched.code && errors.code && <span className="gs-error">{errors.code}</span>}
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 6, marginBottom: 12 }}>
                      <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={countdown > 0 || loading}
                        style={{
                          background: "none",
                          border: "none",
                          color: countdown > 0 ? "#999" : "#0aa876",
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: countdown > 0 ? "not-allowed" : "pointer",
                          padding: 0,
                        }}
                      >
                        {countdown > 0 ? `Resend Code in ${countdown}s` : "Resend Verification Code"}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* BUTTONS */}
              {serverError && <span className="gs-error" style={{ marginBottom: 12, display: "block" }}>{serverError}</span>}
              <div className="gs-btn-row">
                {step > 0 && (
                  <button type="button" className="gs-btn-back" onClick={goBack} disabled={loading}>
                    ← Back
                  </button>
                )}
                {step === 0 && (
                  <button type="button" className="gs-btn-primary" onClick={goNext} disabled={hasStepErrors && touched.email}>
                    Continue →
                  </button>
                )}
                {step === 1 && (
                  <button type="button" className="gs-btn-primary" onClick={goNext} disabled={loading}>
                    {loading ? "Sending Code..." : "Get Verification Code →"}
                  </button>
                )}
                {step === 2 && (
                  <button type="submit" className="gs-btn-primary" disabled={loading}>
                    {loading ? "Verifying..." : "Verify & Create Account →"}
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
