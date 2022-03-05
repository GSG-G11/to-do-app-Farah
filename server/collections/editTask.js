const { json } = require('express/lib/response');
const editTaskInData=require('../database/queries/editTask')
const editTask=(req,res)=>{

    editTaskInData(req.body)
    .then(response=>res.json(response.rows))
    .catch(error=>res.status(500).res.json({message:"error"}))
}
module.exports =editTask;