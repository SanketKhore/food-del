import express from "express";
import connectDatabase from "./db/db.js";
import { foodRouter } from "./routes/foodRoutes.js";
import cors from "cors"
const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());

app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"))

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(3000,()=>{
    console.log("listening to the port...");
})