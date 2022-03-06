const dbconnection=require('../config/connection')
const filterAllDataDESC=()=>{
    return dbconnection.query(`SELECT * FROM tasks ORDER BY DATE DESC`);
}
module.exports= filterAllDataDESC;