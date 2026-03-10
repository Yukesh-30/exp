import sql from "../db/db.connect.js"
import { addTask } from "../controllers/task.Controller.js";

import express  from "express"


const taskRoute = express.Router()

taskRoute.post("/add-task",addTask);

export default taskRoute;
