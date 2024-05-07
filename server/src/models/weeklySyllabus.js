import mongoose from "mongoose";

const WeeklySyllabusSchema = new mongoose.Schema(
  {
    week: {
      type: Number,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    content: [{
      type: String,
      required: true,
    }],    
  },
  { timestamps: true }
);

export const WeeklySyllabus = mongoose.model("WeeklySyllabus", WeeklySyllabusSchema);
