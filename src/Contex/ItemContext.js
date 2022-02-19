import React, {createContext, useState} from 'react';

// 1 - Crear contexto
export const ItemContext = createContext();

// State información 

const initialState = [
    {id: 123, name: 'Arroz' , price: 10},
    {id: 456, name: 'verduras', price: 5},
    {id: 789, name: 'bebida', price: 8},
    {id: 321, name: 'Arroz N° 2', price: 12},
    {id: 654, name: 'Arroz N° 3', price: 15},
]; 

// 2 - Crear componente Provider

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState(initialState);
}

const foo = () => {
    alert(`Cantidad de items en nuestro carrito: ${items.length}`)
};

// 3 - Retornamos nuestro context con un .Provider

return(
    <ItemContext.Provider value={[items, setItems, foo]}>
        {/* 4 - Props, children */}
        {children}
    </ItemContext.Provider>
);