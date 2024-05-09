import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Subscription } from "../models/subscription.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { getCourseByCourseID } from "./course.controller.js";

const getAllSubscriptions = asyncHandler(async (req, res) => {
  const userID = req.params.userID;
  console.log(userID);
  const subscriptions = await Subscription.find({ user: userID });
  console.log(subscriptions);

  return res
    .status(201)
    .json(
      new ApiResponse(201, subscriptions, "Subscriptions found successfully")
    );
});

const getSubscriptionBySubscriptionID = asyncHandler(async (req, res) => {
  const id = req.params.SubscriptionID;
  console.log("id:", id);
  const Subscription = await Subscription.findOne({ _id: id });
  console.log("Subscription:", Subscription);

  return res
    .status(201)
    .json(
      new ApiResponse(201, Subscription, "Subscription found successfully")
    );
});

export { getAllSubscriptions, getSubscriptionBySubscriptionID };
