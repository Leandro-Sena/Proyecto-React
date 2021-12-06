import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetchOne} from '../Data/firestoreFetch';


const ItemDetailContainer = () => {
    const [data, setProductos] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem )
            .then(result => setProductos(result))
            .catch(err => console.log(err))

    }, [idItem]);

    return (
        <div className="p-3 mb-8 text-dark tarjeta">
            <ItemDetail item={data} />

 </div> 
    );

}

export default ItemDetailContainer;