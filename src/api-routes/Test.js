import validate from "../middlewares/validate";
import schemas from "../validations/Test";

import express from "express";
import { index, create } from "../controllers/Test";

const router = express.Router();

router.get("/", index);
router.route("/").post(validate(schemas.createValidation), create);

export default router;
