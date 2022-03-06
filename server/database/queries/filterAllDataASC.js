const dbconnection=require('../config/connection')
const filterAllDataASC=()=>{
    return dbconnection.query(`SELECT * FROM tasks ORDER BY DATE ASC`);
}
module.exports= filterAllDataASC;