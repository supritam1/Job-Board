import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship"],
      required: true,
    },

    workMode: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
      required: true,
    },

    location: { type: String, required: true },

    description: { type: String, required: true },

    applyLink: { type: String },

    applyEmail: { type: String },

    applyPhone: { type: String },

    deadline: { type: Date },
  },
  { timestamps: true }
);

/**
 * ✅ Schema-level validation (SAFE)
 * Ensures at least one apply method is provided
 */
jobSchema.path("applyLink").validate(function () {
  return (
    !!this.applyLink ||
    !!this.applyEmail ||
    !!this.applyPhone
  );
}, "At least one apply method is required");

export default mongoose.model("Job", jobSchema);
