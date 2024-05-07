import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Course } from "../models/course.model.js"; 
import { ApiResponse } from "../utils/apiResponse.js";

const getAllCourses = asyncHandler(async(res,res)=>{
    const courses = await Course.find()
    return res
    .status(201)
  .json(new ApiResponse(201,courses,'Courses found successfully'))
})

const getCourseByCourseID = asyncHandler(async(res,res)=>{
    const id = req.params.courseID;
    const course = await Course.find({_id:id})
    return res
    .status(201)
  .json(new ApiResponse(201,course,'Course found successfully'))
})


export {getAllCourses,getCourseByCourseID,}