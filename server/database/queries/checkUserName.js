const dbconnection=require('../config/connection')
const checkUserName=(body)=>{
return dbconnection.query(`select * from users where username = '${body.value}'`)
}
module.exports=checkUserName;