import {useState} from 'react'


const ItemCount = (props) =>{
const [cantidad, setCantidad] = useState(1)


    const increment = () => {
        if(cantidad < props.stock) 
        setCantidad (cantidad+1);
        
    } 
    const decrement = () => {
        if(cantidad > 1 )
        setCantidad(cantidad-1);
    } 
const Agregar = () => {
    alert(`Agregaste ${cantidad} productos`)
}

    return(
        <div className='contador'>
            <button  onClick = {decrement} style={{width:'10%'}}>-</button>
            {cantidad}
            <button onClick = {increment} style={{width:'10%'}}>+</button>
            
            <button onClick={Agregar}>Agregar</button>
    </div>
    )
}
export default ItemCount;