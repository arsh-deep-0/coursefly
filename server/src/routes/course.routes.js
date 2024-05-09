import { Router } from "express";
import { getAllCourses, getCourseByCourseID } from "../controllers/course.controller.js";



const router = new Router();



router.route("/getAllCourses").get(getAllCourses);

router.route("/getCourse/:courseID").get(getCourseByCourseID)


export default router;
