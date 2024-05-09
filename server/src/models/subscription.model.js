import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      ref: "Course",
      required: true,
    },
    progress:{
        type:Number,
        required: true,
        default:0
    },
    startDate:{
      type:Date,
      required: true,
    }
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
