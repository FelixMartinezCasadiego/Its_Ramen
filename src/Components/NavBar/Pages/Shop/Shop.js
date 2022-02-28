// useState y useContext
import React, {useState, useContext} from "react";

// Form Css
import './Shop.css';

// Firebase
import {collection, addDoc} from 'firebase/firestore';
import { db } from "../../../../firebase/firebaseConfig";

// Material UI
import { TextField } from "@mui/material";

// Message Purchase
import MessagePurchase from "../../../MessagePurchase/MessagePurchase";

// Context
import { ItemsContext } from "../../../../Context/ItemsContext";

const initialState = {
    name: '',
    lastName: '',
    city: '',
};

const Shop = () => {

    const [ItemsCart, setItemsCart] = useContext(ItemsContext);

    const totalPrice = ItemsCart.reduce((acc, curr) => acc + curr.price,0);

    const[ values, setValues] = useState(initialState);

    const [purchaseID, setPurchaseID] = useState(''); 

    const onChange=(e) => {
        const {value,name} = e.target;
        setValues({...values,[name]:value})
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        // console.log(values);
        const docRef = await addDoc(collection(db, "purchases"), {
            values
        });
        console.log("Document written with ID: ", docRef.id);
        setPurchaseID(docRef.id);
        setValues(initialState);
    }

    return(
        <div>

            <div>
                <span>item in cart: {ItemsCart.length} </span>
                <br/>
                <span>total price: {totalPrice} </span>
                <br/>
            </div>

            <form className="FormContainer" onSubmit={onSubmit}>
                <TextField
                    placeholder="Name" 
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
                <TextField
                    placeholder="Last name"
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange} 
                />
                <TextField
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={onChange} 
                />
                <button className="btnASendAction">Send</button>
                {purchaseID && <MessagePurchase purchaseID={purchaseID} /> }
            </form>

        </div> 
    )
}

export default Shop;