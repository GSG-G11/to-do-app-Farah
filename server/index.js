const app =require('./app')
const port = app.get('port');
app.listen(port,()=>{
    console.log('I ammmlistening at localhost:4000')
})