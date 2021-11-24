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

    }, [idItem]);

    return (
        <div className="p-3 mb-8 text-dark tarjeta">
            <ItemDetail item={data} />

<<<<<<< HEAD
 </div> 
=======
        </div>
>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243
    );

}

export default ItemDetailContainer;