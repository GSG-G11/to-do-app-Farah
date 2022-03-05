const dbconnection=require('../config/connection')
const getUser=()=>{
    return dbconnection.query('SELECT * FROM users');
}
module.exports=getUser;