
const editTaskInData=require('../database/queries/editTask')
const editTask=(req,res)=>{
    console.log(req.body)
    editTaskInData(req.body)
    .then(response=>res.json(response.rows))
    .catch(error=>res.status(500).res.json({message:"error"}))
}
module.exports =editTask;