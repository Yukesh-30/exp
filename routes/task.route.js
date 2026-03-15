import sql from "../db/db.connect.js"
import { addTask,getAllTask,deleteTask,getOneTask } from "../controllers/task.Controller.js";

import express  from "express"


const taskRoute = express.Router()

taskRoute.post("/add-task",addTask);
taskRoute.get("/get-all-task",getAllTask);
taskRoute.delete("/delete-task/:id",deleteTask);
taskRoute.get("/get-one",getOneTask);


export default taskRoute;
