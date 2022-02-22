import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../ItemList/GetItem.css';
import ItemDetail from "./ItemDetail";
import { ItemContext } from "../Context/cartContext";


const ItemDetailContainerCopy = () => {

    const [ characters, setCharacters ] = useState([])

    let id = useParams();

    let userID = id.id;


    useEffect(()=>{
        axios.get(`https://breakingbadapi.com/api/characters/${userID}`).then((res) => 
          {setCharacters(res.data)
           console.log(res.data) 

          }
        ).catch(error=>console.log(error))
    },[userID])


      return(
        <div className="ItemDetailCard">

            {characters.map((char) => {

                return (
                    <div key={char.char_id} >
                        <ItemDetail data={char} />
                        {/* <Link to={`/detail/${char.char_id}`}>
                            <ItemDetail data={char} />
                        </Link>   */}
                    </div>
                )

            })}

            {characters.map((char2) => {

                return(
                    <div key={char2.char2_id} >
                        <cartContext char2={char2} />

                    </div>
                )
            })}
            
        </div>
);
      
};


export default ItemDetailContainerCopy;