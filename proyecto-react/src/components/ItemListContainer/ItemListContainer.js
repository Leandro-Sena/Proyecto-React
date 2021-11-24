import products from '../Data/products'
import ItemList from '../ItemList/ItemList'
<<<<<<< HEAD
=======
// import ItemCount from '../ItemCount'
>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243
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
<<<<<<< HEAD
=======
            {/* <ItemCount stock={5} initial={1} /> */}
>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243


        </div>
    );

}

export default ItemDetailContainer;