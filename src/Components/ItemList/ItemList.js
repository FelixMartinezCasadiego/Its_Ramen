import Item from "./Item";

const ItemList = ({albumsData}) => {

    return(
        <div>
            {albumsData.map((albumsData) => {
        return(
          <Item albumsData={albumsData} key={albumsData.id} />
        )
      })} 
        </div>
    )

}

export default ItemList;