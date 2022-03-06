const getData=(url)=>{
    return fetch(url).then(res=>res.json())
    .catch(error=>console.log('the error',error))
}
const postData=(data,method,url)=>{
    return fetch(url,{
        method,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>(res.json()))
    .catch(err=>console.log(err))
}