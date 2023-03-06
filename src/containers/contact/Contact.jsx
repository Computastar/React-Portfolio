import React from 'react'
import './contact.css'
import CVButton from '../../components/cvbutton/cvbutton'

const Contact = () => {
  return (
    <div className='folio__contact section__padding' id='contact'>
      <div className='folio__contact-content'>
        <h4>Contact details</h4>
        <h1 className='gradient__text'>Drop me a line</h1>
        <p> Show me some love</p>
      

      <section className='folio__send-email-section'>
      <a className='folio__send-email' href="mailto:email@example.com?subject=Mail from our Website">Let's touch base send me an Email <span className="send-email-tooltip">This is just a demo email not operational</span>
      </a>
      </section>
      <div className='folio__social-container'>
              <div>
                <ul className='folio__social-icons'>
                    <li><a href="https://github.com/Computastar" alt="GitHib icon" target="_blank" rel="noreferrer noopener"><i
                                className='folio__fa folio__fa-github'></i></a></li>
                    <li><a href="https://twitter.com/computastar" alt="Twitter icon" target="_blank" rel="noreferrer noopener"><i
                                className='folio__fa folio__fa-twitter'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/jason-hunter-3999171/" alt="Linkedin icon" target="_blank"
                            rel="noreferrer noopener"><i className='folio__fa folio__fa-linkedin'></i></a></li>
                </ul>
              </div>
      </div>
      <div className="folio__contact-content-CV">
            <CVButton></CVButton>
          </div>
      </div>
   </div>
  )
}

export default Contact
