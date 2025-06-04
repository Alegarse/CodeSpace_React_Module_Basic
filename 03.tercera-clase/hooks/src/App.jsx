import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')

  let nombreSinUseState = ''

  const cambioNombre = (newName) => {
    nombreSinUseState = newName
  }

  return (
    <>
      <div>
        <div>
          Nombre sin useState: {nombreSinUseState}
        </div>
        <div>
          <span>Nombre:</span>
          <input type="text" onChange={(event) => cambioNombre(event.target.value)} />
        </div>
      </div>
      <div>
        <div>
          Nombre con useState: {nombre}
        </div>
        <div>
          <span>Nombre:</span>
          <input type="text" onChange={(event) => setNombre(event.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default App
