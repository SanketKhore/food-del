import "./add.css"
import { assets } from "../../assets/assets";
import { useRef, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios"
import { useSetRecoilState } from "recoil";
function Add(){
    const [image,setImage] = useState("");
    const priceRef = useRef();
    const nameRef = useRef();
    const desRef = useRef();
    const catRef = useRef();
    function handleAdd(){
            const formData = new FormData();
            formData.append("image",image);
            formData.append("name",nameRef.current.value);
            formData.append("description",desRef.current.value);
            formData.append("category",catRef.current.value);
            formData.append("price",priceRef.current.value);
            if(image&&priceRef.current.value&&nameRef.current.value&&desRef.current.value&&catRef.current.value){
                    axios.post("http://localhost:3000/api/food/add",formData).then(()=>{
                        toast.success("Food added");
                    }).catch((err)=>{
                        toast.error("Food not added")
                    })
            }
            else{
                if(!image)toast.warn("Insert an image");
                if(!priceRef.current.value)toast.warn("Enter the price");
                if(!nameRef.current.value)toast.warn("Enter the name");
                if(!desRef.current.value)toast.warn("Enter the description");
                if(!catRef.current.value)toast.warn("Enter the category");
            }
            
    }

    return(
        <div className="add-container">
            <div className="add column-flex">
                <div className="upload column-flex area">
                    <p>Upload Image</p>
                    <label htmlFor="image" style={{width:"200px"}}>
                        <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    </label>
                    <input type="file" id="image" onInput={(e)=>setImage(e.target.files[0])} accept="image/*" hidden required/>
                </div>
                <div className="product-name column-flex area">
                    <p>Product Name</p>
                    <input type="text" placeholder="Product Name" ref={nameRef} required/>
                </div>
                <div className="product-description column-flex area">
                    <p>Product Descripiton</p>
                    <textarea name="" id="" placeholder="Product Descripiton" rows={7} ref={desRef}/>
                </div>
                <div className="product-category column-flex area">
                    <p>Product Category</p>
                    <select name="" id="" ref={catRef}>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="PureVeg">PureVeg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="product-price column-flex area">
                    <p>Product Price</p>
                    <input type="number" placeholder="Rs.30" ref={priceRef}/>
                </div>
                <div className="add-button">
                    <button onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add;