import dotenv from "dotenv"
import express from "express"
import proxy from "express-http-proxy"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cookieParser())

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))
app.use("/auth", proxy(process.env.AUTH_SERVICE_URL))

app.get("/",(req,res)=>{
    res.json({message:"hello from gateway"})
})
app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`)
})
