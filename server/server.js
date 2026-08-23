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

// ─── Direct CORS Allowed Origins ─────────────────────────────
// You can add your exact custom Vercel domain here if you have one
const DIRECT_ALLOWED_ORIGINS = [

  "https://kilimax-react.vercel.app/",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
];

// Combine direct origins with any from process.env.CLIENT_URL
const envOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((url) => url.trim().replace(/\/+$/, ""))
  .filter(Boolean);

const allowedOriginsList = Array.from(new Set([...DIRECT_ALLOWED_ORIGINS, ...envOrigins]));

const isOriginAllowed = (origin) => {
  // Allow requests without Origin (e.g. mobile apps, curl, Postman, server-to-server)
  if (!origin) return true;

  const cleanOrigin = origin.trim().replace(/\/+$/, "");

  // If wildcard '*' is in env or list
  if (allowedOriginsList.includes("*")) return true;

  // Direct match
  if (allowedOriginsList.includes(cleanOrigin)) return true;

  // Automatically allow ALL Vercel deployments (*.vercel.app)
  try {
    const { hostname } = new URL(origin);
    if (
      hostname.endsWith(".vercel.app") ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    ) {
      return true;
    }
  } catch {
    // ignore URL parsing error
  }

  return false;
};

const corsOptions = {
  origin: (origin, callback) => {
    if (isOriginAllowed(origin)) {
      // Echo the origin back so browser accepts credentials (cookies/tokens)
      callback(null, true);
    } else {
      console.warn(`[CORS Blocked] Origin: ${origin} not in allowed list:`, allowedOriginsList);
      callback(new Error(`CORS blocked for origin: ${origin}`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ─── Body Parsers ───────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ─── Health & Root Routes ───────────────────────────────────
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "KiliMax API",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    dbState: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

// ─── API Routes ─────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/stories", storyRoutes);

// ─── 404 Handler ────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ─── Global Error Handler ───────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("[Server Error]", err.stack || err.message);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
});

// ─── Connect DB & Start ─────────────────────────────────────
if (!MONGO_URI) {
  console.error("✗ Warning: MONGO_URI environment variable is missing, falling back to local MongoDB.");
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✓ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`✓ Server running on port ${PORT}`);
      console.log(`✓ CORS automatically allows: *.vercel.app, localhost, and`, allowedOriginsList);
    });
  })
  .catch((err) => {
    console.error("✗ MongoDB connection failed:", err.message);
    process.exit(1);
  });
