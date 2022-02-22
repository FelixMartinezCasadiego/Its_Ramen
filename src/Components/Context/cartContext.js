import React, {createContext, useState} from "react";

export const ItemContext = createContext();

export const ItemProvider = ({char2, children}) => {
    const [items, setItems] = useState(char2);

    const [cart ,setCart] = useState([]);

    const addCart = (obj) => {
        setCart(obj);
    }

    return (
        <ItemContext.Provider value={[items, setItems, addCart]}>
            {children}
        </ItemContext.Provider>
    )
}

