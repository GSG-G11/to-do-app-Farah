const dbconnection=require('../config/connection')
const getTaks=(id)=>{
    console.log('idnow',id)
    return dbconnection.query({
        text :'SELECT * FROM tasks WHERE userId =$1',
        values:[id]
})}
module.exports=getTaks;