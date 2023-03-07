import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import logo from '../../assets/cstar_banner.png'
import './navbar.css'

const Menu = () => (
<>  
<Link to='/' className='folio__navbar-links_container'>
      <p>home</p>
</Link>
<Link to='/projects' className='folio__navbar-links_container'>
      <p>projects</p>
</Link>
<Link to='/contact' className='folio__navbar-links_container'>
      <p>Contact</p>
</Link>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='folio__navbar'>
      <div className='folio__navbar-links'>
        <div className='folio__navbar-links_logo'>
          <img src={logo} alt="Logo"/>
        </div>
        <div className='folio__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='folio__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="folio-menu_container scale-up-center">
            <div className="folio__navbar-menu_container-links">
              <Menu />
            </div>
        </div>
        )}
      </div>
      NavBar
    </div>
  )
}

export default NavBar
