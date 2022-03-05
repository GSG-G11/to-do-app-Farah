const {join}=require('path')
const renderHome=(req,res)=>{
    res.sendFile(join(__dirname,'..','..','public','html','home.html'))
}
module.exports=renderHome;