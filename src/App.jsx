import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='#about' element={<About/>} />
      </Routes> */}
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </BrowserRouter>
  )
}

export default App