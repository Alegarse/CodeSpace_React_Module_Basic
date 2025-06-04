import React, { useEffect, useState } from 'react'
import './App.css'
import { getWallet } from './services/walletFetch'

function App() {

  const [wallet, setWallet] = useState()
  
  // useEffect(callbackFn, dependencies?)
  // useEffect(() => {}, [])

  useEffect(()=>{
    const aux = getWallet()
    setWallet(aux)
  }, [])


  return (
    <>
      {
        !wallet ? (
          <div>Cargando datos del mockup...</div>
        ) : (
          <>
            <h1>Wallet: {wallet.id} </h1>
            <div>
              <span>Bitcoin:</span>
              <span>{wallet.bitcoin}</span>
            </div>
            <div>
              <span>Ethereum:</span>
              <span>{wallet.ethereum}</span>
            </div>
          </>
        )
      }
    </>
  )
}

export default App
