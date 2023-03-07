
import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from '../src/components/navbar/Navbar'
import {  Contact, Home, Projects, Header} from './containers';
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
    <AuthProvider value={{currentUser}}>
    <NavBar />;
    <Header />
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
    </Routes>

    </AuthProvider>
    </div>
   </Router>
  )
}

export default App
