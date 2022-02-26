// Import
import './NavBar.css';
import Logo from '../Img/Logo.png';
import {Link} from 'react-router-dom';
import MenuCategory from '../MenuCategory/MenuCategory';


const NavBar = () => {
    return(
        <nav className="NavHome">

            <img src={Logo} className="LogoNav" alt='Logo'/>

            <ul className="ulList">

                <Link to='/'>Home</Link>
                <MenuCategory />
                <Link to='RamenHistory'>Ramen History</Link>
                <Link to='About'>About</Link>

            </ul>

        </nav>
    )
}

export default NavBar;