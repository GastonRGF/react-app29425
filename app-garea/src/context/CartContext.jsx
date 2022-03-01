import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        
    }, [cart]);

    
    const addToCart = (item, cantidad) => {
        isInCart(item.id)
            ? sumarCantidad(item, cantidad)
            : setCart([...cart, { ...item, cantidad }]);
    };

    
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    const removeItem = (item) => {
        let newCart = cart.filter((p) => p.item.id !== item.item.id);
        setCart(newCart);
      };
    
      const clear = () => {
        setCart([]);
      };
    
    const sumarCantidad = (item, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

   
   

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
};

