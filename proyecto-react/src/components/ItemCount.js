import { useState, useEffect } from 'react'


const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [cantidad, setCantidad] = useState(0)
console.log(onAdd)
    useEffect(() => {
        setCantidad(initial)
    }, [initial])


    const increment = () => {
        if (cantidad < stock)
            setCantidad(cantidad + 1);

    }
    const decrement = () => {
        if (cantidad > initial + 1)
            setCantidad(cantidad - 1);
    }
    return (
        <div>
            <button className='contador' onClick={decrement} style={{ width: '10%' }}>-</button>
            {cantidad}
            <button className='contador' onClick={increment} style={{ width: '10%' }}>+</button>


            {
                stock && cantidad
                    ? <button className='onAdd' onClick={() => onAdd(cantidad)}>Agregar</button>
                    : <button className='agregrar' variant="contained" disabled>Agregar</button>


            }
        </div>
    )
}
export default ItemCount;