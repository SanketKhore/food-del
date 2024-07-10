import mongoose from "mongoose";

function connectDatabase(){
    try {
        mongoose.connect("mongodb+srv://khoresanket2003:Qaq0pqk5vXYTOyOz@cluster0.2v4rsqj.mongodb.net/food-del").then(()=>{
            console.log("database is connected");
        })
    } catch (error) {
        console.log("unable to connect to database");
    }
}
export default connectDatabase;