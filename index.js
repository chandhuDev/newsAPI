const app=require("./app")
require("dotenv").config()
const PORT=process.env.PORT || 6500
app.listen(PORT,()=>{
    console.log(`server is succesfully listening at ${PORT}`)
})