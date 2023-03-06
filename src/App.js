import {React} from 'react';

import { Home, NavBar, Project} from './components';
import { About, Contact, Header, Footer, Projects} from './containers';
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
      <About />
      <Projects />
      <Contact />
      <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
