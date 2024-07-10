import express from "express";
import multer from "multer";
import addFood from "../controllers/addFood.js";
import listFood from "../controllers/listFood.js";
const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
})  
const upload = multer({ storage: storage })

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood)

export {foodRouter};