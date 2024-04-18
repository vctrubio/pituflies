import { useState } from 'react'
import './App.css'
import { Questionary } from './questionary'
import { NavbarMini } from './navbarmini'
import { NavbarMain } from './navbarmain'
function App() {
  return (
    <>
      <div id="app">
        <NavbarMini />
        <NavbarMain />
      </div>
    </>
  )
}

export default App
