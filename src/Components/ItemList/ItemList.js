import Item from "./Item";
import "./ItemList.css"

const ItemList = ({albumsData}) => {

    return(
        <div className="CardOrden1" >
            {albumsData.map((albumsData) => {
        return(
          <Item albumsData={albumsData} key={albumsData.id} />
        )
      })} 
        </div>
    )

}

export default ItemList;