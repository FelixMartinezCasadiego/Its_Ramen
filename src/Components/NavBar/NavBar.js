// Import
import './NavBar.css';
import Logo from '../Img/Logo.png';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return(
        <nav className="NavHome ">

            <Link to='/'><img src={Logo} className="LogoNav" alt='Logo'/></Link>

            <ul>
                <Link to='/' className='ListNone'>Home</Link>
                <Link to='/About' className='ListNone'>About</Link>
            </ul>

        </nav>
    )
}

export default NavBar;