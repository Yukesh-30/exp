import sql from "../db/db.connect.js"
import { addTask,getAllTask } from "../controllers/task.Controller.js";

import express  from "express"


const taskRoute = express.Router()

taskRoute.post("/add-task",addTask);
taskRoute.get("/get-all-task",getAllTask);

export default taskRoute;
