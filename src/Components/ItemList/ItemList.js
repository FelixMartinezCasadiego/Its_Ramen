import Item from './Item'
import { Link } from "react-router-dom";
import '../ItemList/GetItem.css'


const ItemList = ({data}) => {

    return(
        
        <div className="Get_Item_Grid">
            {data.map((char) => {

                return (
                    <div key={char.id} >

                        <Link to={`/detail/${char.id}`}>
                            <Item data={char} />
                        </Link>

                    </div>
                );

            })};
        </div>


    )

}

export default ItemList;