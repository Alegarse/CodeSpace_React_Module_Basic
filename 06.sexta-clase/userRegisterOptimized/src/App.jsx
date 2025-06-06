import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [secondPassword, setSecondPassword] = useState('')
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    secondPassword: ''
  })

  const [alertaMessage, setAlertMessage] = useState('')

  const checkFields = () => {
    if(username.length < 3 || password.length < 8 || password !== secondPassword){
      setAlertMessage('Algún campo no cumple las condiciones')
    }else {
      setAlertMessage(undefined)
    }
  }

  const newUserHandler = (nombreProp, nuevoValorProp) => {
    setNewUser({
      //Copia de un objeto cuando vamos a modificr solo una prop nos lo tenemos que grabar a fuego
      ...newUser,
      //Para añadir o modificar propiedades en un objeto dinámicamente, en JS, usamos [...] y dentro de los corchetes la variable que traerá el valor 
      [nombreProp]: nuevoValorProp
    })
  }

  useEffect(() => {
    if(username || password || secondPassword){
      checkFields()
    }
  }, [username, password, secondPassword])

  return (
    <>
      <h1>
        Registro usuarios
      </h1>
      <p>
        {alertaMessage}
      </p>
      <div>
        <div>
          <span>Username: </span>
          <input type="text" value={username} onChange={(e) => newUserHandler('username', e.target.value)}/>
        </div>
        <div>
          <span>Password: </span>
          <input type="text" value={password} onChange={(e) =>  newUserHandler('password', e.target.value)}/>
        </div>
        <div>
          <span>Password: </span>
          <input type="text" value={secondPassword} onChange={(e) =>  newUserHandler('secondPassword', e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default App
