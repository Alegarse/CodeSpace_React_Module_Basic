import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundoComponent from './components/HolaMundoComponent'

function App() {
  const titulo = "Alejandro lo intenta"
  const segunda = "Pepitpo"

  return (
    <>
  <p>{titulo}</p>
  <hr/>
  <p>{segunda}</p>
    </>
  )
}

export default App
