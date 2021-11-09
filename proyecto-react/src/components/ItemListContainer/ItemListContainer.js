import mueble from '../../Assets/img/mueblemodular.jpg'
import ItemCount from '../ItemCount'


function ItemListContainer() {
    return (
        <>
            <br />
            <h4 className='text-center'>Productos</h4>
            <br />

            <div className="card" style={{
                width: '18rem'
            }}>

                <img src={mueble} className='modular' alt= 'imagen' style={{
                    width: '100%'
                }}/>


                <div className="card-body">
                    <p className="card-text">Modular, Mesa Tv, Biblioteca Melamina <br/> precio:$28.999</p>
                </div>
            </div>
            <ItemCount stock={5} initial={1} />

        </>
    )
}
export default ItemListContainer;