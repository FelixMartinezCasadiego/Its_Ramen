import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../ItemList/GetItem.css';
import ItemDetail from "./ItemDetail";


const ItemDetailContainerCopy = () => {

    const [ characters, setCharacters ] = useState([])

    let id = useParams();

    let userID = id.id;

    //console.log(userID);

    // useEffect(()=>{
    //     axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=dffad683d6ae99c9bacd9bc034b349e5&hash=bd681d5b78f30e596868d9ce3b27129e/${userID}`).then((res) => 
    //       setCharacters(res.data.data.results)
    
    //     ).catch(error=>console.log(error))
    
    //   },[userID])

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
            
        </div>
);
      

    // return(

    //     <GetItem />
    // )
};


export default ItemDetailContainerCopy;