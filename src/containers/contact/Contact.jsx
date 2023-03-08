import React from 'react'
import './contact.css'


import CVButton from '../../components/cvbutton/cvbutton'
import ContactForm from '../../components/contactForm/contactForm';
import SocialIcons from '../../components/socialIcons/socialIcons';

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

      <section className='folio__SocialIcons'>
        <SocialIcons />
      </section>

      <div className="folio__contact-content-CV">
            <CVButton></CVButton>
            <br></br>
          </div>
      </div>
   </div>
  )
}

export default Contact
