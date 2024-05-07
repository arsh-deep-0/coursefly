import { Router } from "express";
import { getAllCourses, getCourseByCourseID } from "../controllers/course.controller";



const router = new Router();

router.route("/register").post(
  registerUser
);

router.route("/getAllCourses").post(getAllCourses);

router.route("/getCourse/:courseID").get(getCourseByCourseID)


export default router;
