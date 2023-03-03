import React from 'react';

import { Home, NavBar, Project} from './components';
import { About, Contact, Header, Footer, Projects} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <NavBar />
            <Header />
        </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
