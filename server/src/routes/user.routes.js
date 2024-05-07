import { Router } from "express";
import {
  getFullName,
  getUserName,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";


const router = new Router();

router.route("/register").post(
  registerUser
);

router.route("/login").post(loginUser);

router.route("/getUserName/:userID").get(getUserName)
router.route("/getFullName/:userID").get(getFullName)


export default router;
