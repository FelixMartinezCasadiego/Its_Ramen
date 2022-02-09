// Import

import './NavBar.css';
import Logo from '../Img/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="NavHome">

            <img src={Logo} className="LogoNav" />

            <ul className="ulList">
                <Link className='Raya' to="/">Home</Link>
                <Link className='Raya' to="/Episodes">Episodes</Link>
                <Link className='Raya' to="/Search">Search</Link>
            </ul>

        </nav>
    )
}

export default NavBar;