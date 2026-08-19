import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["reseller", "implementation", "technology"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

partnerSchema.index({ email: 1 });
partnerSchema.index({ status: 1 });

export default mongoose.model("Partner", partnerSchema);
