require("dotenv").config()
const app=require("./app")
const PORT=process.env.PORT || 6500 //getting PORT value from .env value and giving default value as it is hosted in heroku it requires default value
//servers starts listening at defined PORT number and logging it to check is it working or not
app.listen(PORT,()=>{
    console.log(`server is succesfully listening at ${PORT}`)
})