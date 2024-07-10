import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name:String,
    description:String,
    image:String,
    category:String,
    price:Number
})

const foodModel = mongoose.model("food",foodSchema);

export {foodModel};