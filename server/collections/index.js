const fetchUser=require('./getUser');
const fetchTask=require('./getTasks');
const renderHome=require('./renderHomeFile')
const postTask=require('./postTask')
const deleteTask=require('./deleteTask')
const editTask=require('./editTask.js')
const newData=require('./filteredData')
const postUser=require('./postUser')
module.exports={
    fetchUser,
    fetchTask,
    renderHome,
    postTask,
    deleteTask,
    editTask,
    newData,
    postUser

}