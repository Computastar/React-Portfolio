import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


import logo from '../../assets/cstar_banner.png'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>
)

const Navbar = () => {
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
            <div className="folio__navbar-menu_container-links-CV">
            <button type="button">Download CV</button>
          </div>
        </div>
        )}
      </div>
      NavBar
    </div>
  )
}

export default Navbar
