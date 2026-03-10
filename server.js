import express from "express";
import cors from "cors"

import taskRoute from "./routes/task.route.js";


const app= express();

app.use(cors())
app.use(express.json())



app.use("/tasks",taskRoute)


app.listen(3000,(err)=>{
    if(!err){
        console.log("Server runs in 3000")
    }
})

