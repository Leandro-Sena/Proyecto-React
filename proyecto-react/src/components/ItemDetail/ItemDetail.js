import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount'

<<<<<<< HEAD
const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const onAdd = (qty) => {
        alert("Agregaste " + qty + " productos al 🛒");
        setItemCount(qty);
    }
=======
const ItemDetail = ({ item}) => {


>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243
    console.log(item)

    return (
        <>
<<<<<<< HEAD
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
=======
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
                            <ItemCount stock={5} initial={1} />
>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243
                        </div>
                    </div>

                    : <p>Cargando...</p>

            }
        </>
    )

}
export default ItemDetail;
