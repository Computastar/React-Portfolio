import React from 'react';
import './contactForm.css'


const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send');
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');
        const { name, email, message } = e.target.elements;
        let contactForm = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        console.log(contactForm);
    };
    return (
        <div className='folio__container-contactForm border p-5 rounded'>
            <h1 className='gradient__text'>Drop me a line</h1>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label className='folio__contactForm-content' htmlFor='name'>
                        Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        id='name'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='folio__contactForm-content' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        id='email'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='folio__contactForm-content' htmlFor='message'>
                        Message
                    </label>
                    <textarea className='form-control' id='message' required />
                </div>
                <div className='folio__button px-5'>
                <button type='submit'> {formStatus + ' Message'} </button>
                </div>
            </form>
        </div>
    );
};
export default ContactForm;