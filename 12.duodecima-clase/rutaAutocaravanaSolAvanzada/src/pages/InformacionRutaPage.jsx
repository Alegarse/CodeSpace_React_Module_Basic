import React from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { useLocation, useNavigate } from 'react-router'

const InformacionRutaPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { 
    state
  } = location
  
  const {
    travel
  } = state

  const deleteTravel = () =>{
    navigate('/')
  }

  return (
    <div>
        <MenuComponent />
        <h1>Información de la rutita</h1>
        <div>
          <div>
            <span>Nombre: </span>
            <span>{travel.nombre}</span>
          </div>
          <div>
            <span>Fecha: </span>
            <span>{travel.fecha}</span>
          </div>
          <div>
            <span>Presupuesto: </span>
            <span>{travel.presupuesto}</span>
          </div>
          <div>
            <span>Viajeros: </span>
            <ul>
              {
                travel.viajeros.split(',').map((v,idx) => (
                  <li key={idx}>
                    {v.trim()}
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <button onClick={deleteTravel}>Borrar</button>
          </div>
        </div>
    </div>
  )
}

export default InformacionRutaPage