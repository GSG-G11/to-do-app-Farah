const postData=require('../database/queries/postTask')
const postTask=(req,res)=>{
   
postData(req.body).then(response=>res.json(response.rows)).catch(error=>console.log(error))

}
module.exports=postTask;