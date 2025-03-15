import React from 'react'
import "./app.css";
import Navbar from "./component/Navbar"
import Home from './component/Home'
import Socialicon from './component/Socialicon'
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
    <Socialicon/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contacts/>
    
    </>
  )
}

export default App