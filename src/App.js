import {React} from 'react';

import { NavBar} from './components';
import {  Contact, Header, Projects} from './containers';
import './App.css';
import { useState, useEffect } from 'react';
import {AuthProvider} from '../src/services/AuthContext'
import {auth} from '../src/services/firebase'
import {onAuthStateChanged} from 'firebase/auth'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className='App'>
       <AuthProvider value={{currentUser}}>
        <div className='gradient__bg'>
            <NavBar />
            <Header />
        </div>
      <Projects />
      <Contact />
      </AuthProvider>
    </div>
  )
}

export default App
