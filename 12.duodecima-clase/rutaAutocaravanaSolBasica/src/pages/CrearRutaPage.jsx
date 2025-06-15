import React, { useState } from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { useNavigate } from 'react-router'

const CrearRutaPage = () => {

    const [travel, setTravel] = useState({})
    const navigate = useNavigate()

    const travelHandler = (propName, propValue) => {
        setTravel({
            ...travel,
            [propName]: propValue
        })
    }

    const createTravel = () => {
        navigate('/info', {
            state: {
                travel
            }
        })
    }

  return (
    <div>
        <MenuComponent />
        <h1>Crear ruta</h1>
        <hr />
        <div>
            <h3>Información de la ruta:</h3>
            <div>
                <span>Nombre ruta: </span>
                <input type="text" onChange={(e) => travelHandler('nombre', e.target.value)} />
            </div>
            <div>
                <span>Fecha: </span>
                <input type="text" onChange={(e) => travelHandler('fecha', e.target.value)} />
            </div>
            <div>
                <span>Presupuesto: </span>
                <input type="text"  onChange={(e) => travelHandler('presupuesto', e.target.value)} />
            </div>
            <div>
                <span>Viajeros: </span>
                <input type="text" onChange={(e) => travelHandler('viajeros', e.target.value)} />
            </div>
            <div>
                <button onClick={createTravel}>Crear ruta</button>
            </div>
        </div>
    </div>
  )
}

export default CrearRutaPage