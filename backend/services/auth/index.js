import dotenv from "dotenv"
import express from "express"
import connectDb from "./config/db.js"
dotenv.config()
const app = express()

const port = process.env.PORT

app.get("/",(req,res)=>{
    res.json({message:"hello from auth"})
})
app.listen(port, () => {
  console.log(`auth is running on port ${port}`)
  connectDb()
})
