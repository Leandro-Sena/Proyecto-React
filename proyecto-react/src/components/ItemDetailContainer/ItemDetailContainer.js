import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useEffect, useState } from 'react';
import products from '../Data/products'
import customFetch from '../../customFetch'


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({});

    useEffect(() => {
        customFetch(2000, products[2])
            .then(result => setProductos(result))

    }, []);

    return (
        <div className="p-3 mb-8 text-dark tarjeta">
            <ItemDetail item={productos} />

        </div>
    );

}

export default ItemDetailContainer;