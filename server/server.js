import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import partnerRoutes from "./routes/partners.js";
import storyRoutes from "./routes/stories.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/kilimax";

// ─── Middleware ────────────────────────────────────────────
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());
app.use(cors({ origin: (origin, cb) => cb(null, !origin || allowedOrigins.includes(origin)), credentials: true }));
app.use(express.json({ limit: "10mb" }));

// ─── Routes ───────────────────────────────────────────────
app.get("/", (_req, res) => res.json({ status: "ok", message: "KiliMax API is running" }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/stories", storyRoutes);

// 404
app.use((_req, res) => res.status(404).json({ message: "Route not found" }));

// ─── Connect DB & Start ───────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✓ Connected to MongoDB");
    app.listen(PORT, () => console.log(`✓ Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("✗ MongoDB connection failed:", err.message);
    process.exit(1);
  });
