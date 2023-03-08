import React, { useState } from 'react'
import {auth} from '../../services/firebase'
import {useAuthValue} from '../../services/AuthContext'
import {createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

import './cvbutton.css'

function CVButton() {

    const {currentUser} = useAuthValue()

    const [email, setEmail] = useState('');

    const [paragraphText, setParagraphText] = useState('Enter a valid email address below, you will be sent a validation email.');

    const [buttonText, setButtonText] = useState('Request CV');

    

    function handleClick(newText, paragraphText) {
        setButtonText(newText);
        setParagraphText(paragraphText)
      }

    function downloadCV () {
        fetch('JSH_CV_02-02-2022.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'JSH_CV_02-02-2022.pdf';
                alink.click();
            })
        })
    }

    const requestCV = (e) => {
        e.preventDefault();
    
      currentUser?.reload()
      console.log(currentUser)
      if (auth.currentUser?.emailVerified || currentUser?.EMAIL_EXISTS)
      {
        handleClick("Download CV", "Your email has been verified, enjoy my CV");
        downloadCV();
        auth.signOut();
      }
      else {
      createUserWithEmailAndPassword(auth, email,randomPWD(6))
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        //auth.signOut();
        handleClick("Verify Email", "Check the email for details. Follow the instructions");
      }).catch((err) => alert(err.message))
    }
    }

    const randomPWD = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    
    return (
      <div className="folio__cvbutton">
  
        <p className="folio__cvbutton-details">
            {paragraphText}
         
        </p>

        <input
          className='form-control'
          type="email"
          placeholder="EMail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>

        <div>
        <button onClick={requestCV}>{buttonText}</button>
        </div>
      </div>
    );
  }
  
  export default CVButton;