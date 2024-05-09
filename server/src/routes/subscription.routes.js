import { Router } from "express";
import { getAllSubscriptions } from "../controllers/subsciption.controller.js";

const router = new Router();

router.route("/getAllSubscriptions/:userID").get(getAllSubscriptions);

export default router;
