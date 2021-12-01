import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../Data/products'
import customFetch from '../../customFetch'


const ItemDetailContainer = () => {
    const [data, setProductos] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem )))
            .then(result => setProductos(result))
            .catch(err => console.log(err))

    }, [idItem]);

    return (
        <div className="p-3 mb-8 text-dark tarjeta">
            <ItemDetail item={data} />

 </div> 
    );

}

export default ItemDetailContainer;