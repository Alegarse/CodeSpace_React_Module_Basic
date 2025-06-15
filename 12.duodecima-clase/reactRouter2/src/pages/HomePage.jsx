import React from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { useLocation, useNavigate } from 'react-router'

const HomePage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {
    state
  } = location
  
  const user = state?.user
  
  const goToLogin =() => {
    navigate('/login',{
      //Siempre voy a crear un objeto en state para pasarle la información que yo quiera desde la página origen a la destino
      state: {
        message: 'eeeeh, viniste de la Home, verdad?'
      },
    })
  }

  return (
    <div>
      <MenuComponent />
      <h1>Home</h1>

      <hr />
      {
        user ? (
          <div>
            <div>
              <span>Username: </span>
              <span>{user.username}</span>
            </div>
            <div>
              <span>Password: </span>
              <span>{user.password}</span>
            </div>
          </div>
        ) : (
          <div>
            <p>No iniciaste sesión</p>
            <button onClick={goToLogin}>Iniciar sesión</button>
          </div>
        )
      }
    </div>
  )
}

export default HomePage