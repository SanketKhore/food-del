import { selector,atom } from "recoil"
import axios from "axios"
const foodList = atom({
    key:"foodList",
    default:selector({
        key:"foodListSelector",
        get: async ({get})=>{
            const response = await axios.get("http://localhost:3000/api/food/list");
            return response.data;
        }
    })
})


export {foodList};