const dbconnection=require('../config/connection')
const postUserToDB=(body)=>{
    return dbconnection.query({
        text:'INSERT INTO users (username) VALUES ($1) RETURNING *',
    values:[body.value]
})
}
module.exports=postUserToDB;