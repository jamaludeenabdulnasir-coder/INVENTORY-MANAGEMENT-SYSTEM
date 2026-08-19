import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    text: { type: String, required: true },
    country: { type: String, required: true, trim: true },
    stores: { type: String, default: "" },
    image: { type: String, default: "" },
    slug: { type: String, unique: true, sparse: true },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["draft", "published"], default: "published" },
  },
  { timestamps: true }
);

storySchema.index({ featured: 1 });

export default mongoose.model("Story", storySchema);
