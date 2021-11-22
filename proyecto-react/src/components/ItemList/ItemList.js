import React from 'react'
import Item from '../Item/Item'


const ItemList = ({ items }) => {
    console.log(items);
    return (
    <>
    {
        items.length > 0
       ? items.map(item => <Item key={item.id} data={item }/>)
       : <p>Cargando...</p>
    }
    
    </>
    );
}
export default ItemList;