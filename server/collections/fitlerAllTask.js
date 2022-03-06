const filterAllDataASC=require('../database/queries/filterAllDataASC')
const filterAllDataDESC=require('../database/queries/filteredAllDataDESC')
const fitlerAllTask=(req,res)=>{
    console.log('the sort',req.body.sort)
    if(req.body.sort==='older'){
        
        filterAllDataASC(req.body).then(response=>res.json(response.rows))
        .catch(()=>res.status(500).json({message:"server Error"}))
    }
    else{
      
        filterAllDataDESC(req.body).then(response=>res.json(response.rows))
        .catch(()=>res.status(500).json({message:"server Error"}))
    } 
}
module.exports=fitlerAllTask;