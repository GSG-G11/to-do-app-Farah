const  filterDataASC=require('../database/queries/filteredDataASC')
const   filterDataDESC=require('../database/queries/filterDataDESC')
const newData=(req,res)=>{
   
    if(req.body.sort==='older'){
        
        filterDataASC(req.body).then(response=>res.json(response.rows))
        .catch(()=>res.status(500).json({message:"server Error"}))
    }
    else{
      
        filterDataDESC(req.body).then(response=>res.json(response.rows))
        .catch(()=>res.status(500).json({message:"server Error"}))
    }
  
    
}
module.exports=newData;