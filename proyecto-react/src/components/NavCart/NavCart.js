import React from "react";
import'../NavCart/NavCart.css'
import {BsCart4} from "react-icons/bs";


const NavCart = () => { 
    return(
        <div className="NavCart">
            <BsCart4 />
            <span>0</span>

        </div>
    )
}
export default NavCart