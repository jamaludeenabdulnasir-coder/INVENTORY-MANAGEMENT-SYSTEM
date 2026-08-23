import { Router } from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
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

// POST /api/auth/signup
router.post(
  "/signup",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().withMessage("Phone is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    try {
      if (!validate(req, res)) return;

      const { name, email, phone, password } = req.body;

      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(409).json({ message: "Email already registered" });
      }

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

      const { email, password } = req.body;

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
