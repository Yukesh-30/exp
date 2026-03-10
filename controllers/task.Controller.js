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



export {addTask}