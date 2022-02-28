import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) => {

    const[ItemsCart, setItemsCart] = useState([]);

    return (
        <ItemsContext.Provider value={[ItemsCart, setItemsCart]} > {children} </ItemsContext.Provider>
    )
}