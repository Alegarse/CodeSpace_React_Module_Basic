import { useState } from 'react'
import './App.css'
import InviernoComponent from './Components/InviernoComponent'
import VeranoComponent from './Components/VeranoComponent'
import MainLayout from './layouts/MainLayout'

function App() {

  const [currentEstacion, setCurrentEstacion] = useState() // 'VERANO' | 'INVIERNO'

  const changeToVerano = () => {
    setCurrentEstacion('VERANO')
  }
  const changeToInvierno = () => {
    setCurrentEstacion('INVIERNO')
  }

  return (
    <>
      <MainLayout>
        {
          currentEstacion === 'VERANO' ? (
            <VeranoComponent changeToInvierno={changeToInvierno} />
          ): (
            <InviernoComponent changeToVerano={changeToVerano} />
          )
        }
      </MainLayout>
    </>
  )
}

export default App
