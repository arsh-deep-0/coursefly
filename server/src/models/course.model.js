import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    enrollmentStatus: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    prerequisites: [
      {
        type: String,
        required: true,
      },
    ],
    syllabus: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"WeeklySyllabus",
        required: true,
      },
    ],
    students: [{}],
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
