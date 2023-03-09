import React from 'react';
import NavBar from '../../components/navbar/Navbar'
import './header.css'

const Header = () => {
  return (
    <>
  <NavBar />;
   <div className='folio__header section__Padding' id='header'>
      <div className='folio__header-content'>
        <h1 className='gradient__text'> {document.title}</h1>
      </div>
   </div>
    </>
  )
}

export default Header