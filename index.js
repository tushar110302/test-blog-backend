import express from "express";
import dotenv from "dotenv/config"
import { connectDB } from "./db/index.js";
import router from "./routes/blog.route.js";

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json());

app.use("/api/v1", router)


app.get("/",(req,res) => {
    res.send("Home")
})
connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server listening on ${PORT}`)
    })
})
.catch((err)=>console.log(err))
