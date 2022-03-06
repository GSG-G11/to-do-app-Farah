const dbconnection = require("../config/connection")
const editTaskInData=(body)=>{
    
   return dbconnection.query(`UPDATE tasks SET content = '${body.content}',type = '${body.type}',date = '${body.date}'  WHERE id = ${body.id} RETURNING *`)
}
module.exports=editTaskInData;
