import { Router } from "express";
import { body, validationResult } from "express-validator";
import Story from "../models/Story.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = Router();

// GET /api/stories — public
router.get("/", async (req, res) => {
  try {
    const { featured, status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (featured === "true") filter.featured = true;
    if (status) filter.status = status;
    else filter.status = "published";

    const skip = (page - 1) * limit;
    const [stories, total] = await Promise.all([
      Story.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Story.countDocuments(filter),
    ]);

    res.json({ stories, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET /api/stories/:slug — public
router.get("/:slug", async (req, res) => {
  try {
    const story = await Story.findOne({ slug: req.params.slug, status: "published" });
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/stories — admin only
router.post(
  "/",
  authenticate,
  authorize("admin"),
  [
    body("name").trim().notEmpty().withMessage("Company name is required"),
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("text").trim().notEmpty().withMessage("Story text is required"),
    body("country").trim().notEmpty().withMessage("Country is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const slug = req.body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const story = await Story.create({ ...req.body, slug });
      res.status(201).json(story);
    } catch (err) {
      if (err.code === 11000) {
        return res.status(409).json({ message: "A story with this title already exists" });
      }
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

// PUT /api/stories/:id — admin only
router.put("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = req.body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// DELETE /api/stories/:id — admin only
router.delete("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json({ message: "Story deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
