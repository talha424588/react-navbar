
import './Navbar.css';
import logo_light from '../assets/logo-white.png'
import logo_black from '../assets/logo-black.png'
import search_icon_light from '../assets/search-w.png' 
import search_icon_black from '../assets/search-b.png' 
import toggle_icon_light from '../assets/day.png' 
import toggle_icon_black from '../assets/night.png' 
import { useState } from 'react';
function Navbar({theme,setTheme})
{
    const toogle_mode = () =>
    {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
    <>
        <div className="navbar">
            <img src={theme === "light" ? logo_black : logo_light} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Feature</li>
                <li>About</li>
            </ul>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={theme === "light" ? search_icon_light : search_icon_black} alt="" placeholder="search" />
            </div>
            {
                theme === "light"?
                <img src={toggle_icon_black} alt="toggle-u"  className='toggle-icon' onClick={toogle_mode}/>
                :
                <img src={toggle_icon_light} alt="toggle-u"  className='toggle-icon' onClick={toogle_mode}/>
            }
        </div>
    </>
    )
}
export default Navbar;