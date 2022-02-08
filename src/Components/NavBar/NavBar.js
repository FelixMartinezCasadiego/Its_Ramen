// Import

import './NavBar.css';
import Logo from '../Img/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="NavHome">

            <img src={Logo} className="LogoNav" />

            <ul className="ulList">
                <Link to="/">Home</Link>
                <Link to="/Comics">Comics</Link>
                <Link to="/Search">Search</Link>
            </ul>

        </nav>
    )
}

export default NavBar;