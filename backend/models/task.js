import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    id: Number,
    title: String,
    date: String,
    desc: String,
    done: Boolean,
  },
  { collection: "tasks" }
);

const Task = mongoose.model("task", taskSchema);

export default Task;
