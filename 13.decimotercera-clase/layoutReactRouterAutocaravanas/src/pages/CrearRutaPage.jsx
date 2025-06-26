import React, { useState } from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { useNavigate } from 'react-router'

const CrearRutaPage = () => {

    const [travel, setTravel] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const navigate = useNavigate()

    const travelHandler = (propName, propValue) => {
        setTravel({
            ...travel,
            [propName]: propValue
        })
    }

    const check = () => {
        let isError = false
        let errors = {}
        if(!travel.nombre || travel.nombre === ''){
            //Mensaje de error para el nombre
            errors = {
                ...errors,
                nombre: 'El nombre no puede estar vacío quillo'
            }
            isError = true
        }
        if(!travel.fecha || travel.fecha === ''){
            errors ={
                ...errors,
                fecha: 'La fecha no puede estar vacío quillo'
            }
            isError = true
        }
        if(!travel.presupuesto || travel.presupuesto === ''){
            errors = {
                ...errors,
                presupuesto: 'El presupuesto no puede estar vacío quillo'
            }
            isError = true
        }
        if(!travel.viajeros || travel.viajeros === ''){
            errors = {
                ...errors,
                viajeros: 'Los viajeros no pueden estar vacío quillo'
            }
            isError = true
        }
        if(!isError){
            return true
        }else{
            setFormErrors(errors)
        }
    }

    const createTravel = () => {
        const checkFields = check()
        if(checkFields){
            navigate('/info', {
                state: {
                    travel
                }
            })
        }
    }

  return (
    <div>
        <h1>Crear ruta</h1>
        <hr />
        <div>
            <h3>Información de la ruta:</h3>
            <div>
                <span>Nombre ruta: </span>
                <input type="text" onChange={(e) => travelHandler('nombre', e.target.value)} />
                {
                    formErrors?.nombre && (<span style={{color: 'red'}}>{formErrors.nombre}</span>)
                }
            </div>
            <div>
                <span>Fecha: </span>
                <input type="text" onChange={(e) => travelHandler('fecha', e.target.value)} />
                {
                    formErrors?.fecha && (<span style={{color: 'red'}}>{formErrors.fecha}</span>)
                }
            </div>
            <div>
                <span>Presupuesto: </span>
                <input type="text"  onChange={(e) => travelHandler('presupuesto', e.target.value)} />
                {
                    formErrors?.presupuesto && (<span style={{color: 'red'}}>{formErrors.presupuesto}</span>)
                }
            </div>
            <div>
                <span>Viajeros: </span>
                <input type="text" onChange={(e) => travelHandler('viajeros', e.target.value)} />
                {
                    formErrors?.viajeros && (<span style={{color: 'red'}}>{formErrors.viajeros}</span>)
                }
            </div>
            <div>
                <button onClick={createTravel}>Crear ruta</button>
            </div>
        </div>
    </div>
  )
}

export default CrearRutaPage