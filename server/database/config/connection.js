require('env2')('config.env');
const { Pool }=require('pg');
const DB_URL=process.env.DB_URL

if(!DB_URL){
    console.log('errror')
}
const options={
    connectionString:DB_URL,
    ssl:false
}
const dbconnection =new Pool(options);
module.exports=dbconnection;