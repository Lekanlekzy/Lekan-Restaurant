// import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Navbar } from './container'
import {AboutUs, Intro, Laurels, SpecialMenu, Chef, Footer, Gallery, FindUs, Navbar, Header} from './container/index'
// import { Header } from './container/index'
function App() {


  return (
    <div>
      <h1>Check</h1>
      <Navbar ></Navbar>
       <Navbar /> 
       <Header />
     <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer /> 
    </div>
  )
}

export default App
