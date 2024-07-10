import { assets } from "../../assets/assets";
import "./navbar.css"
function Navbar(){
    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img src={assets.logo} alt="" />
                </div>
                <div className="admin-panel-text">
                    <p>Admin Panel</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;