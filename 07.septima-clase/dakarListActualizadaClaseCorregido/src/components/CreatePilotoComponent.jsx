import React, { useState } from 'react'

/* 

    {
        "id": 9,
        "nombre": "Joao Ferreira",
        "paisDeOrigen": "Portugal",
        "fechaDeNacimiento": "1990-11-22",
        "vehiculo": "Mini JCW Rally (X-Raid Mini JCW Team)"
    },

*/

const CreatePilotoComponent = ({ createPiloto, cancel}) => {

    const [newPiloto, setNewPiloto] = useState({})

    const newPilotoHandler = (propName, propValue) => {
        const aux = {
            ...newPiloto,
            [propName]: propValue
        }
        setNewPiloto(aux)
    }

  return (
    <div>
        <h1>Crear nuevo piloto</h1>
        <div>
            <span>Nombre: </span>
            <input type="text" onChange={(e) => newPilotoHandler('nombre', e.target.value)}/>
        </div>
        <div>
            <span>Pais de origen: </span>
            <input type="text" onChange={(e) => newPilotoHandler('paisDeOrigen', e.target.value)}/>
        </div>
        <div>
            <span>Fecha de Nacimiento: </span>
            <input type="text" onChange={(e) => newPilotoHandler('fechaDeNacimiento', e.target.value)}/>
        </div>
        <div>
            <span>Vehículo: </span>
            <input type="text" onChange={(e) => newPilotoHandler('vehiculo', e.target.value)}/>
        </div>
        <div>
            <button onClick={() => createPiloto(newPiloto)}>Crear piloto</button>
            <button onClick={cancel} >Cancelar</button>
        </div>
    </div>
  )
}

export default CreatePilotoComponent