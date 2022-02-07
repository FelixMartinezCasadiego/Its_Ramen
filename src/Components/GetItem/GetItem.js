import React, { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

const GetItem = () => {
    const [games, setGames] = useState([]);

    useEffect(()=> {
        fetch('https://breakingbadapi.com/api/characters')
        .then((response) => response.json())
        .then((json) => setGames(json))
    }, []);

    return(
        <div>

            {games.map((user) => {

                return (
                    <div key={user.id} >
                        <ItemDetail data={user} />
                    </div>
                );

            })};
            
        </div>
    );
};


export default GetItem;