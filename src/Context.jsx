import React, { createContext, useState } from "react";

const AddToCartContext = createContext(null);

function GlobalState({ children }) {
    const [cart, setCart] = useState([]);
    const [value , setValue] = useState(40);
    const [priceRange, setPriceRange] = useState([]);
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    const [allProducts , setAllProducts] = useState([])


    const addToCart = (item) => {
        console.log("Adding to cart from context", item);
        
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    return (
        <AddToCartContext.Provider value={{ cart, addToCart, removeFromCart , value , setValue ,priceRange , setPriceRange , productsToDisplay , setProductsToDisplay ,allProducts , setAllProducts}}>
            {children}
        </AddToCartContext.Provider>
    );
}

export { GlobalState, AddToCartContext };
