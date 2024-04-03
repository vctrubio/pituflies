import { useState } from 'react'
import './App.css'
import { Questionary } from './questionary'

function App() {
  return (
    <>
      <div id="app">
        <div id="top-page" className='page'>
          <h1>Warme's</h1>
          <p>Description</p>
        </div>
        <div id="second-page" className='page'>
          <Questionary></Questionary>
        </div>
      </div>
    </>
  )
}

export default App
