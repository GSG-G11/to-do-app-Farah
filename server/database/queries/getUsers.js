const dbconnection=require('../config/connection')
const getUser=(body)=>{

    return dbconnection.query(`SELECT * FROM users where username='${body.value}'`);
}
module.exports=getUser;