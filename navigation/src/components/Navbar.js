import React, { useState } from 'react'
import './navbar.css';
import logo_light from '../../src/components/assets/logo_light.png'
import logo_dark from '../../src/components/assets/logo_dark.png'
import search_icon_light from '../../src/components/assets/search-w.png'
import search_icon_dark from '../../src/components/assets/search-b.png'
import toggle_light from '../../src/components/assets/night.png'
import toggle_dark from '../../src/components/assets/day.png'
import hamburger_light from '../../src/components/assets/hamburger_light.png'
import hamburger_dark from '../../src/components/assets/hamburger_dark.png'
import {Link} from "react-router-dom"
const Navbar = ({theme,setTheme}) => {
  const toggle_mode=()=>{
    theme==='light'? setTheme('dark'):setTheme('light');
  }
  const[showMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <div className='navbar'>
      <img src={theme==='light'? logo_light:logo_dark} alt='' className='logo' />
      <div className='for_justify'>
      <div className={showMediaIcons ? "menu_link menu_link_mobile":"menu_link"}>
        <ul >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About Us</Link></li>
          <li><Link to='/SignIn'>Sign in</Link></li>
          <li><Link to='/LogIn'>Login</Link></li>
        </ul>
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <img src={theme==='light'? search_icon_light:search_icon_dark} alt=''></img>
      </div>
      <div>
        <img onClick={()=>{toggle_mode()}} src={theme==='light'?toggle_light:toggle_dark} alt='' className='toggle-icons'></img>
      </div>
      <div className='hamburger-menu'>
          <img onClick={()=> setShowMediaIcons(!showMediaIcons)} 
            src={theme==='light'? hamburger_dark:hamburger_light} alt='Hamburger'></img>
      </div>
      </div>
    </div>
  );
};

export default Navbar
