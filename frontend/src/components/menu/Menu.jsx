import "./menu.css";
import { assets } from "../../assets/assets";
import Dishes from "../dishes/Dishes";
import { RecoilRoot } from "recoil";
export default function Menu(){
    return(
        <div className="menu-container">
            <div className="menu">
                <div className="explore-section">
                    <h1>Explore our menu</h1>
                    <p className="explore-section-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quos corporis assumenda ratione magnam nemo, aperiam hic tempore! Magnam nihil assumenda rem voluptatum optio possimus?</p>
                    <div className="menus">
                        <div className="salad menu-item">
                            <img src={assets.menu_1} alt="" />
                            <p>Salad</p>
                        </div>
                        <div className="rolls menu-item">
                            <img src={assets.menu_2} alt="" />
                            <p>Rolls</p>
                        </div>
                        <div className="deserts menu-item">
                            <img src={assets.menu_3} alt="" />
                            <p>Deserts</p>
                        </div>
                        <div className="sandwich menu-item">
                            <img src={assets.menu_4} alt="" />
                            <p>Sandwich</p>
                        </div>
                        <div className="cake menu-item">
                            <img src={assets.menu_5} alt="" />
                            <p>Cake</p>
                        </div>
                        <div className="pure-veg menu-item">
                            <img src={assets.menu_6} alt="" />
                            <p>Pure Veg</p>
                        </div>
                        <div className="pasta menu-item">
                            <img src={assets.menu_7} alt="" />
                            <p>Pasta</p>
                        </div>
                        <div className="noodles menu-item">
                            <img src={assets.menu_8} alt="" />
                            <p>Noodles</p>
                        </div>
                    </div>
                    <hr />
                </div>
                {/* <Dishes/> */}
                
            </div>
        </div>
    )
}