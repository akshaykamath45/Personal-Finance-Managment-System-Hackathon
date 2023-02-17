import React, { useState } from 'react'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi';
import {FiX } from 'react-icons/fi';
//const navbarLinks={{url:"/home", title:"Home"}, {url:"/about", title:"About"}, {url:"/contact", title:"Contact"}}

export const Navbar = ({navbarLinks}) => {

    const [menuClicked,setMenuClicked]=useState(false);

    const toggleMenuClick=()=>{
        setMenuClicked(!menuClicked);
    }
  return (
    <nav className='navbar'>
        <span className="navbar_logo">Dyme</span> 

        {menuClicked ? (<FiX size={25} className="navbar_menu" onClick={toggleMenuClick} />) : 
        (<FiMenu size={25} className="navbar_menu" onClick={toggleMenuClick} />)}

       <ul className={menuClicked ? "navbar_list" : "navbar_list nabvbar_list--active"}>
        {navbarLinks.map((item) => {
            return (
                <li className='navbar_item' key={item.title}>
                    <a className='navbar_link' href={item.url}>
                        {item.title}
                    </a>
                </li>
            );}
        )}
              
        </ul>
    </nav>
      
  )
            
}

