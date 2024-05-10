import { Router } from "express";
import { decreaseLikes, getAllCourses, getCourseByCourseID, increaseLikes } from "../controllers/course.controller.js";



const router = new Router();



router.route("/getAllCourses").get(getAllCourses);


router.route("/getCourse/:courseID").get(getCourseByCourseID)

router.route("/increaseLikes/:courseID").get(increaseLikes)

router.route("/decreaseLikes/:courseID").get(decreaseLikes)


export default router;
