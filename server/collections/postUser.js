const postUserToDB=require('../database/queries/postUser')
const postUser=(req,res)=>{

    postUserToDB(req.body).then(response=>res.json(response.rows)).catch(()=>res.json({message:'error'}))

}
module.exports=postUser;