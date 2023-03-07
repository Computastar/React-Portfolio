import React from 'react';
import bio from '../../assets/Bio-Pic.png';
import './home.css'

const Home = () => {
  return (
    <>
   <div className='folio__home section__Padding' id='home'>
      <div className='folio__home-content'>
          <h1 className='gradient__text'>Portfolio</h1>
          <h2>Its All About Me</h2>
          <p>Hello, there fellow nerds, I'm Jason Hunter, an IT consultant from a time when RAM was measured in Kb not Gb. I live in God's own county of the Peoples Republic of Yorkshire, in His Majesty’s United Kingdom of Great Britain & Northern Ireland. I have spent over 30 years working in IT, mainly Windows based security and systems management consultancy. I've recently been transitioning to cloud-based technologies on the Azure stack, but this has highlighted the need for me to learn web development. So here I am, boot camping my way to web development.</p>
          <h2>A Particular Set of Skills</h2>
          <p>The skills Im looking to hone are HTML, CSS and JavaScript, in order that I can build dynamic frontends based on Blazor for Azure based apps</p>
      </div>

      <div className='folio__home-image'>
        <img src={bio} alt=""/>
      </div>
      home
    </div>
    </>
  )
}

export default Home
