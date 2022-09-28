
const express=require("express")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const NewsAPI = require('newsapi');
const apiValue=process.env.API
const newsapi = new NewsAPI(apiValue);
app.use("/topNewsInIndia",async(req,res)=>{
    try{
const newsDetails=await newsapi.v2.topHeadlines({
    
    
    pageSize:5,
    country:'in',
  })
  res.status(200).json({News:newsDetails})
  console.log(newsDetails)
}

catch(e){
    console.log("error in route")
    console.log(e.message)
}
})


app.use("/listOfNewsTypes",async(req,res)=>{
try{
    const {type}=req.query
const newsDetails=await newsapi.v2.sources({
    
    
    language: 'en',
    category:`${type}`,
    country:'us',
    
    
  })
  res.status(200).json({listOfNewsTypes:newsDetails})
}
catch(e){
    console.log("error in list filter")
    console.log(e.message)
}
})



app.use("/searchNews",async(req,res)=>{
try{
    const {type,from,to,sortBy}=req.query
   const newsDetails=await newsapi.v2.everything({
        q: `${type}`,
        
        from: `${from}`,
        to: `${to}`,
        language: `en`,
        sortBy: `${sortBy}`,
        pageSize:`5`,
      })
res.status(200).json({searchNews:newsDetails})
}
catch(e){
    console.log("error in search filter")
    console.log(e.message)
    
}
})






module.exports=app