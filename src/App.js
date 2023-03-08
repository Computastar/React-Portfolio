
import {React} from 'react';
import { BrowserRouter as  Router,Route, Routes} from 'react-router-dom';
import {  Contact, Home, Projects, Header, Footer} from './containers';
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

    <Header />
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </AuthProvider>
    </div>

  )
}

export default App
