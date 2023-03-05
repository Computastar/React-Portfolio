import React from 'react';
import bio from '../../assets/Bio-Pic.png';
import './header.css'

const Header = () => {
  return (
    <div className='folio__header section__Padding' id='home'>
      <div className='folio__header-content'>
        <h1 className='gradient__text'> Jason Hunter Portfolio</h1>
        <p>The dude is good</p>
      </div>

      <div className='folio__header-image'>
        <img src={bio} alt=""/>
      </div>
      Header
    </div>
  )
}

export default Header
