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

      <div className='folio__container-contact border p-5 rounded'>

      <section className='folio__SocialIcons'>
        <SocialIcons />
      </section>

      <section className="folio__contact-content-CV">
            <CVButton></CVButton>
            <br></br>
      </section>
      </div>
      </div>
   </div>
  )
}

export default Contact
