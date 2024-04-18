import { useState } from 'react'
import './App.css'
import { Questionary } from './questionary'
import { NavbarMini } from './navbarmini'
import { NavbarMain } from './navbarmain'
import { Banner } from './banner'
function App() {
  return (
    <>
      <div id="app">
        <NavbarMini />
        <NavbarMain />
        <Banner />
      </div>
    </>
  )
}

export default App
