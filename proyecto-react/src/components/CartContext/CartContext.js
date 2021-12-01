import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    // console.log(children)
    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.imagen,
                    titleItem: item.title,
                    precioItem: item.precio,
                    qtyItem: qty

                }
            ])
        } else {
            found.qtyItem += qty;
            setCartList([...cartList])
        }
    }
    const removeList = () => {
        setCartList([])
    }
    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result)
    }
    const calcTotalItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].precioItem * cartList[index].qtyItem;
    }
    const calcSubTotal = () => {
        let totalItem = cartList.map(item => calcTotalItem(item.idItem));
        return totalItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qty = cartList.map(item => item.qtyItem)
        return qty.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeList,
            deleteItem,
            calcTotalItem,
            calcSubTotal,
            calcTotal,
            calcItemsQty
        }}>
            {children}
        </ CartContext.Provider>
    )
}

export default CartContextProvider;
