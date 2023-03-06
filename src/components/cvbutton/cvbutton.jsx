import React, { useState } from 'react'
import {auth} from '../../services/firebase'
import {useAuthValue} from '../../services/AuthContext'
import {createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

import './cvbutton.css'



function CVButton() {

    const {currentUser} = useAuthValue()

    const [email, setEmail] = useState('');

    const [buttonText, setButtonText] = useState('Request CV');

    function handleClick(newText) {
        setButtonText(newText);
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
        alert("already verified")
        //auth.signOut();
        handleClick("Download CV");
        downloadCV();
      }
      else {
      createUserWithEmailAndPassword(auth, email,randomPWD(6))
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        //auth.signOut();
        alert("Email Sent")
        handleClick("Verify Email");
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
      <div className='cvbutton'>
        <br/><br/>
        <input type="email" placeholder='EMail'
        onChange={(e) => {setEmail(e.target.value)}}>
        </input>
        <br/><br/>
        {/* <input type="password" placeholder="password" 
        onChange={(e)=>{setpassword(e.target.value)}}>
        </input> */}
        <br></br>
        {/* {(!currentUser.emailVerified)
           ? <button onClick={downloadCV}>Get CV</button>
           : <button onClick={downloadCV}>Download CV</button>
    } */}
        <button onClick={requestCV}>{buttonText}</button>
      </div>
      
    );
  }
  
  export default CVButton;