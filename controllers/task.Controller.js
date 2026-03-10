import sql from "../db/db.connect.js"

const addTask = async (req,res) =>{
    const {title,user_id} = req.body

    try {
        await sql`INSERT INTO todos (title,user_id) values (${title},${user_id})`
        return res.status(201).json({
            message : "Data inserted"
        })
    } catch (error) {
        return res.status(500).json({
            message : "Internal server errr"
        })
    }
}

const getAllTask = async (req,res) =>{
    try {
        const tasks = await sql`SELECT * FROM todos`
        if(tasks.length===0){
            return res.status(404).json({
                message : "Data Not Found"
            })
        }

        return res.status(200).json({
            tasks
        })
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error"
        })
    }
}



export {addTask,getAllTask}