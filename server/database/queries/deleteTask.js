const dbconnection=require('../config/connection')
const deleteTaskFromDB=(body)=>{
  return dbconnection.query({
      text:'DELETE FROM tasks WHERE id =$1  RETURNING *',
        values:[body.id]
  })
}
module.exports=deleteTaskFromDB;