require('env2')('config.env');
const { Pool }=require('pg');
const DB_URL=process.env.DB_URL
let dbURL="";
let {NODE_ENV,DEV_DB_URL,DATABASE_URL,TEST_DB_URL}=process.env;
if(NODE_ENV==="dev"){
    dbURL=  DEV_DB_URL;
    
}
else if(NODE_ENV === "test"){
    dbURL=TEST_DB_URL;
}
else if (NODE_ENV === "production"){
    dbURL=  DATABASE_URL;
}else{
    throw new Error('invalid url')
}
const options={
    connectionString:DB_URL,
    ssl:false
}
const dbconnection =new Pool(options);
module.exports=dbconnection;