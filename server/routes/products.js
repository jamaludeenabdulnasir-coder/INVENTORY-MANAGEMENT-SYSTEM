import { Router } from "express";
import { body, validationResult } from "express-validator";
import Product from "../models/Product.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = Router();

// GET /api/products — public, list all active products
router.get("/", async (req, res) => {
  try {
    const { search, category, status, page = 1, limit = 20 } = req.query;
    const filter = { status: status || "active" };

    if (category) filter.category = category;
    if (search) filter.$text = { $search: search };

    const skip = (page - 1) * limit;
    const [products, total] = await Promise.all([
      Product.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Product.countDocuments(filter),
    ]);

    res.json({ products, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET /api/products/:id — public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/products — auth required
router.post(
  "/",
  authenticate,
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
    body("category").trim().notEmpty().withMessage("Category is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const product = await Product.create({ ...req.body, createdBy: req.user._id });
      res.status(201).json(product);
    } catch (err) {
      if (err.code === 11000) {
        return res.status(409).json({ message: "SKU already exists" });
      }
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// PUT /api/products/:id — auth required
router.put("/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// DELETE /api/products/:id — auth required
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
