import {useState} from 'react';

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
    console.log(`Agregaste ${cantidad} productos`)
}

    return(
        <div>
            <button  onClick = {decrement} style={{width:'5%'}}>-</button>
            {cantidad}
            <button onClick = {increment} style={{width:'5%'}}>+</button>
            
            <button onClick={Agregar}>Agregar</button>
    </div>
    )
}
export default ItemCount;