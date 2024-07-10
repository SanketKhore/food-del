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
const loggedIn = atom({
    key:"loggedIn",
    default:false
})


export {foodList,loggedIn};