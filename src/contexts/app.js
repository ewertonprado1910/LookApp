import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
    const dicount_porcentage = 0.1;
    const delivery = 10;
    const order_number = new Date().getTime();
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existentIndex = cart?.findIndex(prod => prod.id === product.id);
        let oldCart = cart;

        if (existentIndex !== -1) {
            oldCart[existentIndex] = product;
        } else {
            oldCart.push(product);
        }
        console.log(oldCart);
        setCart(oldCart);
    };

    const removeFromCart = (productId) => {
        const filteredProductsId = cart?.filter(prod => prod.id !== productId);
        setCart(filteredProductsId);
    };

    return (
        <AppContext.Provider value={{ user, setUser, cart, addToCart, removeFromCart, dicount_porcentage, delivery, order_number }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
