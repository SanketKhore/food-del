import { foodModel } from "../models/foodModels.js";

export default async function addFood(req,res){
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:req.file.filename,
    })
    try {
        await food.save();
        res.json({
            success:true,
            message:"Food is added successfully"
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Food is not added"
        })
    }
}