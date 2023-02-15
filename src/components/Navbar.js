import React from 'react'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {FiX } from 'react-icons/fi'

//const navbarLinks={{url:"/home", title:"Home"}, {url:"/about", title:"About"}, {url:"/contact", title:"Contact"}}

export const Navbar = ({navbarLinks}) => {
  return (
    <nav className='navbar'>
        <span className="navbar_logo">Travell</span>
       <ul className='navbar_list'>
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

