require("dotenv").config()
const express=require("express") //importing express framework
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const NewsAPI = require('newsapi')//importing the newsapi package

const apiValue=process.env.API // geting the value of my own API from .env file
const newsapi = new NewsAPI(apiValue) 

//Routes for newsAPI
//It is the route for getting the top trending news in India by passing optional parameters 
//pageSize and country of news we are going to fetch from this route
app.use("/trending",async(req,res)=>{
try{
        const newsDetails=await newsapi.v2.topHeadlines({
         country:'in',
         })
      res.status(200).json({News:newsDetails})
    }
catch(e){
    console.log("error in route")
    console.log(e.message)
}
})

//It is the route for listing down of different types of news
//like for Eg: business, entertainment , technology
app.use("/types",async(req,res)=>{
try{
    const {type}=req.query
    const newsDetails=await newsapi.v2.sources({
    language: 'en',
    category:`${type}`,
    })
  res.status(200).json({listOfNewsTypes:newsDetails})
  }
catch(e){
    console.log("error in list filter")
    console.log(e.message)
}
})


//It is the route for query filters for the news by passing optional parameters
//like for Eg: query q i.e type , from and to Date , sortBy and pageSize that 
//is number of results we are trying to fetch
app.use("/search",async(req,res)=>{
try{
    const {type,from,to,sortby}=req.query
    const newsDetails=await newsapi.v2.everything({
        q: `${type}`,
        from: `${from}`,
        to: `${to}`,
        language: `en`,
        sortBy: `${sortby}`,
        })
    res.status(200).json({searchNews:newsDetails})
}
catch(e){
    console.log("error in search filter")
    console.log(e.message)
    }
})

//exporting app instance to index.js file to listen the server
module.exports=app