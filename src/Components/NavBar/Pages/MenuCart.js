import React, {useState, useEffect} from "react";

// React Router Dom
import { useParams } from "react-router-dom";

// Firebase
import { db } from "../../../firebase/firebaseConfig";
import {
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';

// Components
import Item from "../../ItemList/Item";

const MenuCart = () => {

    const [albumCategoryData, setalbumCategoryData ] = useState([]);
    const {requested} = useParams();
    console.log(albumCategoryData);
    
    useEffect( () => {
        const getsCategoryAlbums = async () => {
            const q = query(collection(db, 'ramen'), where ("requested", "==", requested));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach( (doc) => {
            docs.push({...doc.data(), id: doc.id})
            });
            setalbumCategoryData(docs);
        };  
        getsCategoryAlbums();
    }, [requested]);

    return(
        <div>
            {albumCategoryData.map((albumsData) => {
                return (
                    <div>
                        <Item albumsData={albumsData} key={albumsData.id} />
                    </div>
                )
            })}    
        </div>
    )
}

export default MenuCart;