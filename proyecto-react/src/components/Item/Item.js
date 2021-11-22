import React from 'react';
import ItemCount from '../ItemCount'


const Item = ({ item }) => {
    return (
        <>
            <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{
                width: '18rem'
            }}>
                <img src={item.imagen[0]} className='modular' alt='imagen' style={{
                    width: '100%'
                }} />
                <div className="card-body">
                    <p className="card-text">{item.title} <br /> Descripción: {item.description} <br /> precio: $ {item.precio} <br /> medidas: {item.medidas} </p>
                    <data />
                    <ItemCount stock={5} initial={1} />

                </div>
            </div>


        </>

    )
}

export default Item;