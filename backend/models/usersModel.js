import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
    name:String,
    qty:Number
})

export { userModelSchema };