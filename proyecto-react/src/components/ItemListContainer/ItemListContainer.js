// import data from '../Data/products'
import ItemList from '../ItemList/ItemList'
import React, { useState } from 'react'
const {products} = require('../Data/products')


const ItemListContainer = ({ name }) => {
    const [item, setItems] = useState([])
    const call = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
    call.then(result => {
        setItems(result)
    })
    return (

        <div className="p-3 mb-8 text-dark tarjeta">
            {name}
            <ItemList items={item} />

        </div>)
}

export default ItemListContainer;