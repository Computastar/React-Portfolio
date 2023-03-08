import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './socialIcons.css'

const SocialIcons = () => {
    return (
      <div className='folio__social-container'>
              <div>
                <ul className='folio__social-icons'>
                    <li>
                      <SocialIcon url="https://github.com/Computastar" target="_blank" bgColor="#ff5a01"/>
                    </li>
                    <li>
                      <SocialIcon url="https://twitter.com/computastar" target="_blank" bgColor="red"/>            
                    </li>
                    <li>
                      <SocialIcon url="https://www.linkedin.com/in/jason-hunter-3999171/" target="_blank" bgColor='purple'/>
                    </li>
                </ul>
              </div>
      </div>   
    ) 
}

export default SocialIcons