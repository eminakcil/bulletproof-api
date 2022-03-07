import express from "express";
import TestRoutes from "./Test";

const router = express.Router();

router.use("/tests", TestRoutes);

export default router;
