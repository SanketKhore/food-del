import { assets } from "../../assets/assets";
import {NavLink} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css"
import { useRecoilState } from "recoil";
import { loggedIn } from "../../store/atoms/foodAtoms";
import { useEffect} from "react";
export default function Navbar(){
    const { user,loginWithRedirect,isAuthenticated,logout } = useAuth0();
    const [logged,setLogged] = useRecoilState(loggedIn);
    useEffect(()=>{
        if(user){
            setLogged(true);
        }else{
            setLogged(false);
        }
    },[user])
    console.log(logged);
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img src={assets.logo} alt="" draggable="false" />
                </div>
                <div className="links">
                    <a href="">home</a>
                    <a href="">menu</a>
                    <a href="">mobile app</a>
                    <a href="">contact us</a>
                </div>
                <div className="right-section">
                    <img src={assets.search} alt="" />
                    <NavLink to="/cart">
                        <img src={assets.basket} alt="" />
                    </NavLink>
                    
                    {isAuthenticated?<button className="signin-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>log out</button>:<button className="signin-button" onClick={loginWithRedirect}>sign in</button>}
                    
                    
                </div>
            </div>
        </div>
    )
}