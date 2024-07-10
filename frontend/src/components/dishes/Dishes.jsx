import { useRecoilStateLoadable } from "recoil"
import { foodList } from "../../store/atoms/foodAtoms"
import "./dishes.css";
export default function Dishes(){
    const [foods,setFoods] = useRecoilStateLoadable(foodList);
    if(foods.state=="loading"){
        return <h1>Loading</h1>
    }
    else if(foods.contents.list.length<=0){
        return <h1>No food item</h1>
    }
    else{
            console.log(foods.contents.list)
            return (
                <div className="foodItems">
                    {foods.contents.list.map((food,index)=>{
                        const currImg = `http://localhost:3000/images/${food.image}`;
                        return(
                            <div className="foodCard" key={index} >
                                <div className="foodImage" style={{backgroundImage: `url(${currImg})`}}>
                                    
                                </div>
                                <div className="foodContent">
                                    <p id="foodName">{food.name}</p>
                                    <p id="foodDescription">{food.description}</p>
                                    <p id="foodPrice">${food.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
    }
}