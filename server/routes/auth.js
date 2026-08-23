import { Router } from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import VerificationCode from "../models/VerificationCode.js";
import { generateToken, authenticate } from "../middleware/auth.js";

const router = Router();

const validate = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return false;
  }
  return true;
};

// POST /api/auth/send-code — generates and stores 6-digit OTP in MongoDB
router.post(
  "/send-code",
  [body("email").isEmail().withMessage("Valid email is required")],
  async (req, res) => {
    try {
      if (!validate(req, res)) return;

      const email = req.body.email.toLowerCase().trim();

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email is already registered. Please sign in." });
      }

      // Generate random 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();

      // Remove any previous unverified codes for this email
      await VerificationCode.deleteMany({ email, type: "signup" });

      // Save to MongoDB with 10-minute expiry
      await VerificationCode.create({
        email,
        code,
        type: "signup",
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      });

      console.log(`[Verification Code] Code for ${email}: ${code}`);

      res.status(200).json({
        message: "Verification code sent successfully",
        code, // Returned for instant user verification / testing convenience
      });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// POST /api/auth/verify-code — checks if code is valid in MongoDB
router.post(
  "/verify-code",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("code").trim().isLength({ min: 4, max: 8 }).withMessage("Valid code is required"),
  ],
  async (req, res) => {
    try {
      if (!validate(req, res)) return;

      const email = req.body.email.toLowerCase().trim();
      const code = req.body.code.trim();

      const record = await VerificationCode.findOne({
        email,
        code,
        type: "signup",
        expiresAt: { $gt: new Date() },
      });

      if (!record) {
        return res.status(400).json({ message: "Invalid or expired verification code" });
      }

      res.status(200).json({ message: "Verification code is valid", valid: true });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// POST /api/auth/signup — verifies code in MongoDB then creates user
router.post(
  "/signup",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().withMessage("Phone is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("code").trim().notEmpty().withMessage("Verification code is required"),
  ],
  async (req, res) => {
    try {
      if (!validate(req, res)) return;

      const { name, phone, password } = req.body;
      const email = req.body.email.toLowerCase().trim();
      const code = req.body.code.trim();

      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(409).json({ message: "Email already registered" });
      }

      // Verify code against MongoDB
      const record = await VerificationCode.findOne({
        email,
        code,
        type: "signup",
        expiresAt: { $gt: new Date() },
      });

      if (!record) {
        return res.status(400).json({ message: "Invalid or expired verification code" });
      }

      // Delete the used code
      await VerificationCode.deleteMany({ email, type: "signup" });

      const user = await User.create({ name, email, phone, password });
      const token = generateToken(user._id);

      res.status(201).json({ user, token });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// POST /api/auth/signin
router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      if (!validate(req, res)) return;

      const email = req.body.email.toLowerCase().trim();
      const { password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const match = await user.comparePassword(password);
      if (!match) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = generateToken(user._id);
      res.json({ user, token });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// GET /api/auth/me
router.get("/me", authenticate, (req, res) => {
  res.json({ user: req.user });
});

export default router;
