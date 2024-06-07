
import './Navbar.css';
import logo_light from '../assets/logo-white.png'
import logo_black from '../assets/logo-black.png'
import search_icon_light from '../assets/search-w.png' 
import search_icon_black from '../assets/search-b.png' 
import toggle_icon_light from '../assets/day.png' 
import toggle_icon_black from '../assets/night.png' 
function Navbar()
{
    return (
    <>
        <div className="navbar">
            <img src={logo_black} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Feature</li>
                <li>About</li>
            </ul>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={search_icon_black} alt="" srcset="" />
            </div>
            <img src={toggle_icon_black} alt="toggle-button" />
        </div>
    </>
    )
}
export default Navbar;