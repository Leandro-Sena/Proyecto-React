import React from 'react';
import ItemCount from '../ItemCount'

const ItemDetail = ({ item}) => {


    console.log(item)

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
                            <ItemCount stock={5} initial={1} />
                        </div>
                    </div>

                    : <p>Cargando...</p>

            }
        </>
    )

}
export default ItemDetail;
