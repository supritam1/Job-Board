import express from "express";
import {
  getJobs,
  getJobById,
  createJob,
} from "../controllers/jobControllers.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJobById);
router.post("/", createJob);

export default router;
