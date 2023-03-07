
import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    <Router>
    <div className='App'>
    <Route path="/" element={<Header />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

       <AuthProvider value={{currentUser}}>
        <div className='gradient__bg'>
            <NavBar />
            <Header />
        </div>
      <Projects />
      <Contact />
      </AuthProvider>
    </div>
  </Router>
  )
}

export default App
