import React from 'react';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount'
import {CartContext} from '../CartContext/CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (qty) => {
        alert("Agregaste " + qty + " productos al 🛒");
        setItemCount(qty);
        test.addToCart(item, qty)
    }
    // console.log(item)

    return (
        <>
        
            {

                item && item.imagen
                    ?
                    <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{
                        width: '18rem'
                    }}>
                        <div>
                            <img src={item.imagen} className='modular' alt='imagen' style={{
                                width: '100%'
                            }} /></div>
                        <div className="card-body">
                            <p className="card-text">{item.title} <br />
                                Descripción: {item.description} <br /> precio: $ {item.precio} <br />
                                medidas: {item.medidas} </p>
                            {
                                itemCount === 0

                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart' style={{ textDecoration: "none" }}><button className='cart' >Ir a Carrito</button></Link>

                            }
                        </div>
                    </div>

                    : <p>Cargando...</p>

            }
        </>
    )

}
export default ItemDetail;
