import React from "react";
import '../NavCart/NavCart.css'
import { BsCart4 } from "react-icons/bs";
import { useContext } from 'react'
import { CartContext } from "../CartContext/CartContext";


const NavCart = () => {
    const test = useContext(CartContext)
    // console.log(test)
    return (
        <div className="NavCart" >
            <span style={{ color: "white", backgroundColor: "black", borderRadius: "100%" }}>
                {test.calcItemsQty()}

            </span>
            <BsCart4 />
        </div>
    )
}
export default NavCart