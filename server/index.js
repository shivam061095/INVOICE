const express=require("express")
const { connection } = require("mongoose")

const env=require("dotenv")
env.config()

const app=express()









app.listen(process.env.PORT,async()=>{
   try {
    await connection
    console.log("CONNECTED TO DB")
   } catch (error) {
      console.log(error)
    
   }

   console.log("running on server")
})
