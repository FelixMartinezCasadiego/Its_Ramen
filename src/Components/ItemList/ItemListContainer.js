import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';

// Firebase
import {db} from '../../firebase/firebaseConfig'
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [albumsData, setAlbumsData] = useState([]);

    useEffect( () => {
        const getsAlbums = async () => {
            const q = query(collection(db, 'ramen'), where ("requested", "==", "Ramen"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach( (doc) => {
            docs.push({...doc.data(), id: doc.id})
            });
            setAlbumsData(docs);
        };  
        getsAlbums();
    }, []);

    return (
        <div>
            <ItemList albumsData={albumsData} />
        </div>
            
    )

};

export default ItemListContainer;