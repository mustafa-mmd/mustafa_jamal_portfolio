import React from 'react'
import "./App.css";
import Navbar from "./component/Navbar"
import Home from './component/Home'

import About from './component/About'
import Skills from './component/Skills'
import Services from './component/Services'
import Projects from './component/Projects'
import Contacts from './component/Contacts'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contacts/>
    
    </>
  )
}

export default App