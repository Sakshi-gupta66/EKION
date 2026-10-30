import dotenv from "dotenv"
import express from "express"
import connectDb from "./config/db.js"
import router from "./routes/auth.route.js"
dotenv.config()
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use("/",router)

app.get("/",(req,res)=>{
    res.json({message:"hello from auth"})
})
app.listen(port, () => {
  console.log(`auth is running on port ${port}`)
  connectDb()
})
