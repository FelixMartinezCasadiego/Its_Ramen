import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';

// Firebase
import {db} from '../../firebase/firebaseConfig'
import ItemDetail from "./ItemDetail";

// React - Router - Dom
import {Link} from 'react-router-dom';


const ItemDetailContainer = () => {

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
            {albumsData.map((albumsData) => {

                return(
                    <Link to='/RamenHistoty'>
                        <ItemDetail albumsData={albumsData} key={albumsData.id} />
                    </Link>
                )
            })} 
        </div>
    )

};

export default ItemDetailContainer;