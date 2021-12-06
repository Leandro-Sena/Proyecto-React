import ItemList from '../ItemList/ItemList'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import firestoreFetch from '../Data/firestoreFetch'


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        firestoreFetch(idCategory)
        .then(result => setData(result))
        .catch(err => console.log(err));

    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setData([]);
        })
    }, []);
    return (
        <div className="p-3 mb-8 text-dark tarjeta">
            <ItemList items={data} />

        </div>
    );

}

export default ItemListContainer;