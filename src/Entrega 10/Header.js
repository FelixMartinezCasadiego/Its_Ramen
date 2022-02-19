import '../Components/NavBar/NavBar.css';
import React, {useContext} from 'react';
import { ItemContext } from '../Contex/CartContext';

const Header = () => {

    const [items, setItems, foo] = useContext(ItemContext); 
    return (
        <nav className="NavHome">
            <p>Carrito: {items.length} </p>
            <button onClick={()=> setItems([]) }>Delete</button>
            <button onClick={ ()=> foo()}>Status</button>
        </nav>
    )
}

export default Header;