import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{
                width: '18rem'
            }}>
                <img src={data.imagen} className='modular' alt='imagen' style={{
                    width: '100%'
                }} />
                <div className="card-body detalle ">
                    <Link className="buttonDetail" to={`/item/${data.id}`} style={{ textDecoration: "none", margin: "30%", cursor: "pointer" }}>Detalles</Link>
                </div>
            </div>

        </>

    )
}

export default Item;