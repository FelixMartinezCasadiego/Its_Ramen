import Item from './Item'
import { Link } from "react-router-dom";
import '../ItemList/GetItem.css'


const ItemList = ({data}) => {

    return(
        
        <div className="Get_Item_Grid">
            {data.map((char) => {

                return (
                    <div key={char.char_id} >

                        <Link to={`/detail/${char.char_id}`} className='Raya'>
                            <Item data={char} />
                        </Link>

                    </div>
                );

            })};
        </div>


    )

}

export default ItemList;