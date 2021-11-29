// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext';


const Cart = () => {
    const test = useContext(CartContext);
    // console.log(test)
    return (
        <>
            {

                (test.cartList.length > 0)
                    ? <button onClick={test.removeList} style={{backgroundColor:'#88aaaa', color:'black', fontSize:'1.3em',position: 'relative'}}>Vaciar carrito</button>
                    : <h1 style={{position:'absolute',  right:'15em'}}>Mi carrito🛒</h1>
            }

            {test.cartList.length > 0 ?
                test.cartList.map(item =>

                    <div key={item.idItem} style={{
                        width: '18rem'
                    }}>
                        <div>
                            <img src={item.imgItem} class="img-thumbnail" alt="..." style={{ border: "none" }}></img>
                        </div>
                        <div className="card-body" >
                            <p className="card-text" style={{position: 'relative',  left:'100%', bottom:' 10em'}}>{item.titleItem} <br />
                            </p>

                            <button onClick={() => test.deleteItem(item.idItem)} style={{position: 'relative', left:'330%', bottom:' 5em', fontSize:'1.2em',backgroundColor:'#88aaaa'}}>Quitar productos</button>
                        
                        <div className='cartDetail'>
                            <h5 >{item.qtyItem} Producto(s) <br /> <br /> $ {item.precioItem} por unidad</h5>
                        </div>
                    </div>
                    </div>
                    // <div>

                    // </div>

                )
                : <h5 style={{position:'absolute', bottom:'20em', left:'-5em'}}> <br />Carrito vacio</h5>

            }

        </>
    );
}
export default Cart;