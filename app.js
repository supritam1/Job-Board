import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*", // later it will restrict
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.use(errorHandler);

export default app;
