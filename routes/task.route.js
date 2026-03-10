import sql from "../db/db.connect.js"
import { addTask,getAllTask,deleteTask } from "../controllers/task.Controller.js";

import express  from "express"


const taskRoute = express.Router()

taskRoute.post("/add-task",addTask);
taskRoute.get("/get-all-task",getAllTask);
taskRoute.delete("/delete-task/:id",deleteTask);

export default taskRoute;
