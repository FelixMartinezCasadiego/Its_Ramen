import '../App.css'
import '../Components/NavBar/NavBar.css'

const ItemsCard = ({data}) => {
    return (
        <div className="cardContext">
            <ul className='ulList'>
                <li>
                    {data.name}
                </li>
                <li>
                    $ {data.price}
                </li>
                <li>
                    ID: {data.id}
                </li>
            </ul>
        </div>
    )
};

export default ItemsCard;