const dbconnection=require('../config/connection')
const filterDataASC=(body)=>{
    return dbconnection.query(`SELECT * FROM tasks where type ='${body.option}'ORDER BY DATE ASC`);
}
module.exports= filterDataASC;