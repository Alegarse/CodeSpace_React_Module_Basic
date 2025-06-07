import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PilotosListPage from './pages/PilotosListPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PilotosListPage/>
    </>
  )
}

export default App
