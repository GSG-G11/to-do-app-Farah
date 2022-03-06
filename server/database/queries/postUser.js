const dbconnection=require('../config/connection')
const postUserToDB=(body)=>{
    console.log('I am in')
    return dbconnection.query({
        text:'INSERT INTO users (username) VALUES ($1) RETURNING *',
    values:[body.value]
})
}
module.exports=postUserToDB;