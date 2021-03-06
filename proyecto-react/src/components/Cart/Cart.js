import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../Data/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.titleItem,
          price: item.precioItem
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Leandro Sena",
            email: "leo_sena@react.com",
            phone: "223245657"
          },
          total: test.calcTotal(),
          items: itemsForDB,
          date: serverTimestamp()
        };
      
        console.log(order);
        
        const createOrderInFirestore = async () => {
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        createOrderInFirestore()
          .then(result => alert('Su pedido se creo exitosamente, en instante le llegaron un mail.\n\n\nOrden ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
      
        test.removeList();
      
      }
      
    return (
        <div >
            <h1 className="text-center" >Mi carrito🛒</h1>
            <Link to='/'> <button className="float-end" style={{ backgroundColor: '#f6d7a7', color: 'black', fontSize: '1.3em', bottom: '-20em' }} >Volver al catálogo </button></Link>


            {
                test.cartList.length > 0 &&
                <div >

                    <div className="card-body total" style={{ position: 'relative', width: '30%', bottom: '-10em', left: '65%' }}>
                        <h4 className="mb-5 text-center">Orden de compra</h4>

                        <h5 className="card-header">Subtotal:<span className="float-end" style={{ bottom: ' -0.1em' }}> $ {test.calcSubTotal()}</span></h5><br />
                        <p className="fw-bold fs-4">TOTAL: <span className="float-end" style={{ bottom: ' -0.1em' }}>$ {test.calcTotal()}</span></p>
                        <button className="btn btn-dark"  onClick={createOrder}>Finalizar compra</button>
                    </div>
                </div>

            }

            {


                (test.cartList.length > 0)
                    ? <button onClick={test.removeList} style={{ backgroundColor: '#88aaaa', color: 'black', fontSize: '1.3em', position: 'relative', bottom: '12.5em' }}>Vaciar carrito</button>
                    : <h5 style={{ position: 'absolute', bottom: '20em', left: '-5em' }}> <br />Carrito vacio</h5>
            }


            {test.cartList.length > 0 &&
                test.cartList.map(item =>

                    <div key={item.idItem} style={{
                        width: '18rem', marginTop: '-10%', border: '100%'
                    }}>
                        <div>
                            <img style={{ border: "none", bottom: ' 10em' }} src={item.imgItem} className="img-thumbnail" alt="..."></img>
                        </div>
                        <div className="card-body" >
                            <p className="card-text" style={{ position: 'relative', left: '100%', bottom: ' 10em' }}>{item.titleItem} <br />
                            </p>
                            <div className='cartDetail'>
                                <button onClick={() => test.deleteItem(item.idItem)} style={{ position: 'relative', left: '0%', bottom: ' -9em', fontSize: '1.2em', backgroundColor: '#88aaaa' }}>Quitar productos</button>


                                <h5 >{item.qtyItem} Producto(s) <br /> <br /> $ {item.precioItem} por unidad</h5>
                            </div>
                        </div>
                    </div>

                )

            }



        </div>
    );
}
export default Cart;