import React from 'react'
import MenuComponent from '../components/MenuComponent'
import RutaComponent from '../components/RutaComponent'
import { Navigate, useLocation, useNavigate } from 'react-router'

const InfoRuta = () => {

const location = useLocation()
const navigate = useNavigate()

const delRoute = () => {
    navigate("/", {
      state: {
      },
    });
  };

const {
    state
  } = location
  
  const ruta = state?.ruta

  return (
    <div>
      <MenuComponent />
      <h1>Info de la ruta</h1>
      <RutaComponent route={ruta} delRoute={delRoute}/>
    </div>
  )
}

export default InfoRuta