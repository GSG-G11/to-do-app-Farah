const deleteTaskFromDB=require('../database/queries/deleteTask')
const deleteTask=(req,res)=>{

   deleteTaskFromDB(req.body).then(response=>res.json(response.rows)).catch(error=>res.status(500).json({message:"error"}))

}
module.exports=deleteTask;