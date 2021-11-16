import React from 'react';
import ItemCount from '../ItemCount'


const Item = ({ data }) => {
    return (

        <>

            <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{


                width: '18rem'

            }}>


                <img src={data.imagen} className='modular' alt='imagen' style={{
                    width: '100%'
                }} />


                <div className="card-body">
                    <p className="card-text">{data.title} <br /> Descripción: {data.description} <br /> precio: ${data.precio} <br /> medidas: {data.medidas} </p>
                    <data />
                    <ItemCount stock={5} initial={1} />

                </div>
            </div>


        </>

    )
}

export default Item;