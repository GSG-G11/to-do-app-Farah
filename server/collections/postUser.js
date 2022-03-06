const postUserToDB=require('../database/queries/postUser')
const checkUserName=require('../database/queries/checkUserName')
const getUser=require('../database/queries/getUsers')
const postUser=(req,res)=>{
    checkUserName(req.body).then(
        response=>{
           
            if (response.rows.length > 0){
             
                getUser(req.body).then(response=>res.json(response.rows)).catch(()=>res.json({message:'error'}))  
            }
            else{
                postUserToDB(req.body).then(response=>res.json(response.rows)).catch(()=>res.json({message:'error'}))  
            }
        }
        )


}
module.exports=postUser;