import React, { useState } from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { useLocation, useNavigate } from 'react-router'

const LoginPage = () => {

  const [user, setUser] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const {
    state
  } = location

  //Opción 1:
  // const message = state ? state.message : null

  const message = state?.message

  //TODO: Este código peta porque no contempla que state pueda ser nulo por lo que cuando lo es, hace que se rompa la página.
  // const {
  //   message
  // } = state

  const fomrHandler = (propName, propValue) =>{ 
    setUser({
      ...user,
      [propName]: propValue
    })
  }

  const doLogin = () => {
    navigate('/', {
      state:{
        user
      }
    })
  }

  return (
    <div>
      <MenuComponent />
      <h1>Login</h1>
      <p>{message}</p>
      <hr />
      <div>
        <div>
          <span>Username: </span>
          <input type="text" value={user.username} onChange={(e) => fomrHandler('username', e.target.value)}/>
        </div>
        <div>
          <span>Password: </span>
          <input type="text" value={user.password} onChange={(e) => fomrHandler('password', e.target.value)} />
        </div>
        <div>
          <button onClick={doLogin}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage