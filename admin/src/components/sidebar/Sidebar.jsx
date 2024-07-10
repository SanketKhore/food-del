import "./sidebar.css"
import { NavLink,Navigate } from "react-router-dom";
function Sidebar(){

    return(
        <div className="sidebar-container">
            <div className="sidebar">
                <NavLink to="/add">
                    <button>Add</button>
                </NavLink>
                <NavLink to="/list">
                    <button>List</button>   
                </NavLink>
                <NavLink to="/orders">
                    <button>Orders</button>   
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;