import { foodModel } from "../models/foodModels.js";

export default async function listFood(req, res) {
    const foodName = req.body.foodName;

    try {
        let query = {};
        if(foodName){
            if(!Array.isArray(foodName)){
                foodName = [foodName]
            }
            query = {name : {$in : foodName}};
        }

        const list = await foodModel.find(query);
        return res.json({ success: true, list });
    } catch (error) {
        return res.json({
            success: false,
            message: "Unable to find the food",
        });
    }
}