const getUser=require('../database/queries/getUsers')

const fetchUser=(req,res)=>{
    getUser().then(response=>res.json(response.rows)).catch(()=>res.status(500).json({message:'serverError'}))
}
module.exports=fetchUser;