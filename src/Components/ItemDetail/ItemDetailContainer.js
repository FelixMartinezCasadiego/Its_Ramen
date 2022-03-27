// useState
import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemDetail from './ItemDetail';
import '../ItemList/ItemList.css'

const ItemDetailContainer = () => { 
    const[albumData, setAlbumData] = useState ([]);
    const {id} = useParams();
  
    useEffect( () => {
        const getsAlbum = async () => {
        const q = query(collection(db, 'ramen'), where (documentId(), '==', id));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( (doc) => {
        docs.push({...doc.data(), id: doc.id})
        });
        setAlbumData(docs);
        };  
        getsAlbum();
    }, []);

  return(
    <div className="CardOrden1">
        {albumData.map((albumsData) =>
        {return <ItemDetail albumsData={albumsData} /> }
        )}
  </div>
  )
}

export default ItemDetailContainer;



// import React, { useState, useEffect } from "react";
// import { collection, getDocs, query, where } from 'firebase/firestore';

// // Firebase
// import {db} from '../../firebase/firebaseConfig'
// import ItemDetail from "./ItemDetail";

// // React - Router - Dom
// import {Link} from 'react-router-dom';


// const ItemDetailContainer = () => {

//     const [albumsData, setAlbumsData] = useState([]);

//     useEffect( () => {
//         const getsAlbums = async () => {
//             const q = query(collection(db, 'ramen'), where ("requested", "==", "Ramen"));
//             const docs = [];
//             const querySnapshot = await getDocs(q);
//             querySnapshot.forEach( (doc) => {
//             docs.push({...doc.data(), id: doc.id})
//             });
//             setAlbumsData(docs);
//         };  
//         getsAlbums();
//     }, []);

//     return (

//         <div>
//             {albumsData.map((albumsData) => {

//                 return(
//                     <Link to='/RamenHistoty'>
//                         <ItemDetail albumsData={albumsData} key={albumsData.id} />
//                     </Link>
//                 )
//             })} 
//         </div>
//     )

// };

// export default ItemDetailContainer;