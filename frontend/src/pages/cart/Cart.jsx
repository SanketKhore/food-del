import"./cart.css";
import { assets } from "../../assets/assets";
import Navbar from "../../components/navbar/Navbar";
import { useRecoilValueLoadable } from "recoil";
export default function Cart(){
    const cartItems = useRecoilValueLoadable(cartAtom);
    console.log(cartItems);
    return(
        <Navbar/>
    )
}