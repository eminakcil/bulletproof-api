import validate from "../middlewares/validate.js";
import schemas from "../validations/Test.js";

import express from "express";
import { index, create } from "../controllers/Test.js";

const router = express.Router();

router.get("/", index);
router.route("/").post(validate(schemas.createValidation), create);

export default router;
