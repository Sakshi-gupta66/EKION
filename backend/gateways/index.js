import dotenv from "dotenv"
import express from "express"
import proxy from "express-http-proxy"
dotenv.config()
const app = express()

const port = process.env.PORT

app.use("/auth", proxy(process.env.AUTH_SERVICE_URL))

app.get("/",(req,res)=>{
    res.json({message:"hello from gateway"})
})
app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`)
})
