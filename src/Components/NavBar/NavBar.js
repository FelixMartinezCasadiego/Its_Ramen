// Import
import './NavBar.css';
import Logo from '../Img/Logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="NavHome">

            <img src={Logo} className="LogoNav" alt='Logo'/>

            <ul className="ulList">

                <Link to='/'>Home</Link>
                <Link to='/Menu'>Menu</Link>
                <Link to='RamenHistory'>Ramen History</Link>
                <Link to='About'>About</Link>

            </ul>

        </nav>
    )
}

export default NavBar;