import React from 'react'
import './contact.css'
import { SocialIcon } from 'react-social-icons';

import CVButton from '../../components/cvbutton/cvbutton'
import ContactForm from '../../components/contactForm/contactForm';

const Contact = () => {
  return (
        <div className='folio__contact section__padding' id='contact'>
      <div className='folio__contact-content'>

      <section className='folio__contact__form'>
        <ContactForm/>
      </section>

      <section className='folio__send-email-section'>
      <a className='folio__send-email' href="mailto:email@example.com?subject=Mail from our Website">Let's touch base send me an Email <span className="send-email-tooltip">This is just a demo email not operational</span>
      </a>
      </section>
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
      <div className="folio__contact-content-CV">
            <CVButton></CVButton>
            <br></br>
          </div>
      </div>
   </div>
  )
}

export default Contact
