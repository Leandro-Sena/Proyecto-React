// import data from '../Data/products'
import ItemList from '../ItemList/ItemList'
import React, { useState } from 'react'
const {products} = require('../Data/products')


const ItemListContainer = () => {
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
        <ItemList items={item} />

    )
}

export default ItemListContainer;