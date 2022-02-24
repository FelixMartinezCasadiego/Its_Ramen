import Item from "./Item";
import "./ItemList.css";

// React - Router - Dom
import {Link} from 'react-router-dom';

const ItemList = ({albumsData}) => {

    return(
        <div className="CardOrden1" >
            {albumsData.map((albumsData) => {
        return(
          <Link to={`details/${albumsData.id}`}>
            <Item albumsData={albumsData} key={albumsData.id} />
          </Link>
        )
      })} 
        </div>
    )

}

export default ItemList;