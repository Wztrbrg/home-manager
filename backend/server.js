import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongodb = process.env.MONGODB_URI;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/tasks", taskRoutes);

mongoose
  .connect(mongodb)
  .then(() => app.listen(port, console.log(`Server running on ${port}`)))
  .catch((err) => console.log(err));
