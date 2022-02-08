import React from "react";
// import GetItem from "../GetItem/GetItem";
import { useEffect, useState } from 'react';
//import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../ItemList/GetItem.css';
import ItemDetail from "./ItemDetail";




const ItemDetailContainerCopy = () => {

    const [ characters, setCharacters ] = useState([])

    let id = useParams();

    let userID = id.id;

    //console.log(userID);

    useEffect(()=>{
        axios.get(`https://breakingbadapi.com/api/characters/${userID}`).then((res) => 
          {setCharacters(res.data)
           console.log(res.data) 

          }
        ).catch(error=>console.log(error))
    },[userID])


      return(
        <div className="Get_Item_Grid">

            {characters.map((char) => {

                return (
                    <div key={char.char_id} >
                        <ItemDetail data={char} />
                        {/* <Link to={`/detail/${char.char_id}`}>
                            <ItemDetail data={char} />
                        </Link>   */}
                    </div>
                );

            })};
            
        </div>
);
      

    // return(

    //     <GetItem />
    // )
};


export default ItemDetailContainerCopy;