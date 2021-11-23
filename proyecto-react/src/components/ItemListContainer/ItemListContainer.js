import products from '../Data/products'
import ItemList from '../ItemList/ItemList'
// import ItemCount from '../ItemCount'
import customFetch from '../../customFetch'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    console.log(idCategory)
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined)
                return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setData(result))

    }, [idCategory]);

    return (
        <div className="p-3 mb-8 text-dark tarjeta">
            <ItemList items={data} />
            {/* <ItemCount stock={5} initial={1} /> */}


        </div>
    );

}

export default ItemDetailContainer;