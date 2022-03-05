const dbconnection=require('../config/connection')
const filterDataDESC=(body)=>{
  
    return dbconnection.query(`SELECT * FROM tasks where type ='${body.option}'ORDER BY DATE DESC`);
}
module.exports= filterDataDESC;