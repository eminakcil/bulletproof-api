import validate from "../middlewares/validate";
import schemas from "../validations/Test";

import express from "express";
import TestController from "../controllers/Test";

const router = express.Router();
const controller = new TestController();

router.get("/", controller.index());
router.route("/").post(validate(schemas.createValidation), controller.create());
router.delete("/:id", controller.delete());

export default router;
