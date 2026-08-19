import { Router } from "express";
import { body, validationResult } from "express-validator";
import Partner from "../models/Partner.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = Router();

// GET /api/partners — admin only
router.get("/", authenticate, authorize("admin"), async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const skip = (page - 1) * limit;
    const [partners, total] = await Promise.all([
      Partner.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Partner.countDocuments(filter),
    ]);

    res.json({ partners, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/partners — public (application form)
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().withMessage("Phone is required"),
    body("company").trim().notEmpty().withMessage("Company is required"),
    body("type").isIn(["reseller", "implementation", "technology"]).withMessage("Valid partner type is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const partner = await Partner.create(req.body);
      res.status(201).json({ message: "Application submitted successfully", partner });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// PUT /api/partners/:id — admin only (approve/reject)
router.put("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!partner) return res.status(404).json({ message: "Partner not found" });
    res.json(partner);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// DELETE /api/partners/:id — admin only
router.delete("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);
    if (!partner) return res.status(404).json({ message: "Partner not found" });
    res.json({ message: "Partner deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
