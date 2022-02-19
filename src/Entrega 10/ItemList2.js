import ItemsCard from "./ItemCard"; 
// 6 - Importar IntemsContex 
import React, {useContext} from "react";
import { ItemContext } from "../Contex/CartContext";

const ItemsList = () => {

    const [items,setItems] = useContext(ItemContext);

    return (
        <div>
            {items.map((item) => {
                return <ItemsCard data={item} key={item.id} />
            } )}
        </div>
    )
};

export default ItemsList;