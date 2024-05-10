import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Course } from "../models/course.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  return res
    .status(201)
    .json(new ApiResponse(201, courses, "Courses found successfully"));
});

const getCourseByCourseID = asyncHandler(async (req, res) => {
  const id = req.params.courseID;
  console.log("id:", id);
  const course = await Course.findOne({ _id: id });
  console.log("course:", course);

  return res
    .status(201)
    .json(new ApiResponse(201, course, "Course found successfully"));
});

const increaseLikes = asyncHandler(async (req, res) => {
  const id = req.params.courseID;
  console.log("id:", id);
  const course = await Course.findOneAndUpdate({ _id: id });
  console.log("course:", course);
  if (course) {
    course.likes += 1;
    console.log(course.likes)
    await course.save();
  }

  return res
    .status(201)
    .json(new ApiResponse(201, course, "Course found successfully"));
});

const decreaseLikes = asyncHandler(async (req, res) => {
  const id = req.params.courseID;
  console.log("id:", id);
  const course = await Course.findOneAndUpdate({ _id: id });
  console.log("course:", course);
  if (course) {
    course.likes -= 1;

    await course.save();
  }

  return res
    .status(201)
    .json(new ApiResponse(201, course, "Course found successfully"));
});

export { getAllCourses, getCourseByCourseID, increaseLikes,decreaseLikes };
