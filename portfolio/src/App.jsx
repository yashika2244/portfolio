import React from 'react'
import Header from './Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Eduction from './Components/Education/Eduction'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
// import Layout from './Layout/Layout'
import './App.css'; 

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Eduction/>
    <Projects/>
    <Skills/>
    <Contact/>
      
    </>
  )
}

export default App
