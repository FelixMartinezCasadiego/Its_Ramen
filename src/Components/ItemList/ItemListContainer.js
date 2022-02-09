import React, { useState, useEffect } from "react";
import axios from 'axios';
import './GetItem.css';
import ItemList from "./ItemList";
import '../ItemList/GetItem.css'


// API information
// https://gateway.marvel.com:443/v1/public/characters?apikey=dffad683d6ae99c9bacd9bc034b349e5
// Public key: dffad683d6ae99c9bacd9bc034b349e5
//Private key: f6b4f29142c774d0996c2a704b0705a9cac8f5d8
// Ts: 1
// 1f6b4f29142c774d0996c2a704b0705a9cac8f5d8dffad683d6ae99c9bacd9bc034b349e5
// Hash : bd681d5b78f30e596868d9ce3b27129e

const ItemListContainer = () => {

    const [ characters, setCharacters ] = useState([])

    // useEffect(()=>{
    //   axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=dffad683d6ae99c9bacd9bc034b349e5&hash=bd681d5b78f30e596868d9ce3b27129e').then(res=>{
    //     setCharacters(res.data.data.results)
  
    //   }).catch(error=>console.log(error))
  
    // },[])

    useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setCharacters(res.data)
		);
	}, []);
  
    console.log(characters)

    return(
        <div>
            <ItemList data={characters} />
        </div>
    );
};


export default ItemListContainer;