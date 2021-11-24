import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'

const Item = ({ data }) => {
    console.log(data)
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
=======
import {Link} from 'react-router-dom'

const Item = ({ data}) => {
    console.log(data)
    return (
        <>
                    <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{
                        width: '18rem'
                    }}>
                        <img src={data.imagen} className='modular' alt='imagen' style={{
                            width: '100%'
                        }} />
                        <div className="card-body">
                            {/* <strong className="card-text">{data.title} <br /> Descripción: {data.description} <br /> precio: $ {data.precio} <br /> medidas: {data.medidas} </strong> */}
                            <Link to={`./item/${data.id}`} style={{textDecoration: "none", margin:"30%", cursor: "pointer"}}>Detalles</Link>
                        </div>
                    </div>

                                      </>
>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243

    )
}

export default Item;