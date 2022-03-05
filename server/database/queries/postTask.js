const dbconnection=require('../config/connection')
const postData=(body)=>{
   
    return dbconnection.query({
        text:'INSERT INTO tasks (content, type, date, userId) VALUES ($1,$2,$3,$4) RETURNING *',
    values:[body.value,body.option,body.date,body.userId]
})
}
module.exports=postData;