import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect } from 'react';
import products from '../Data/products'

const ItemDetailContainer = ()=>{

        const[productos, setProductos] = useState({});

        useEffect(() =>{
            ItemDetail(2000,products[1])
            .then(result => setProductos(result))
            
        },[]);

        return(
        <ItemDetail item={productos} />
        
    )
        
    }

export default ItemDetailContainer;