import { useState } from 'react'
import './App.css'
import { Questionary } from './questionary'
import { NavbarMini } from './navbarmini'
import { NavbarMain } from './navbarmain'
import { Banner } from './banner'
import { IconDescription } from './icondescription'
import { SliderPage } from './sliderman'
import { Footer } from './footer'
function App() {
  return (
    <>
      <div id="app">
        <NavbarMini />
        <NavbarMain />
        <Banner />
        <IconDescription />
        <SliderPage/>
        <Footer/>
      </div>
    </>
  )
}

export default App
