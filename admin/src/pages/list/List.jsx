import "./list.css";
import { foodList } from "../../store/atoms/foodAtom";
import { useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable } from "recoil";
import { useEffect,useState } from "react";
export default function List(){
    const foods = useRecoilValueLoadable(foodList);
    console.log("foods  ",foods.contents.list);
    if(foods.state=="loading"){
        return(
            <h1>loading</h1>
        )
    }else{
        if(foods.contents.list.length==0){
            return(
                <div className="list-container">
                    <h1>No Food Items</h1>
                </div>
            )
        }
        else{
            return(
                <div className="list-container">
                    <table className="list">
                        <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {foods.contents.list.map((food,index)=>{
                            const currImg = `http://localhost:3000/images/${food.image}`
                            return(
                                <tr key={index}>
                                    <td><img src={currImg} alt=""  /></td>
                                    <td>{food.name}</td>
                                    <td>{food.category}</td>
                                    <td>{food.price}</td>
                                    <td className="remove">X</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            )}
        }
}