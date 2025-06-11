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

const CreatePilotoComponent = ({ createPiloto, cancel, pilotoSelected, editFn}) => {

    const [newPiloto, setNewPiloto] = useState({...pilotoSelected})

    const newPilotoHandler = (propName, propValue) => {
        const aux = {
            ...newPiloto,
            [propName]: propValue
        }
        setNewPiloto(aux)
    }

  return (
    <div>
        {
            pilotoSelected ? (
                <h1>Editar piloto</h1>
            ): (
                <h1>Crear nuevo piloto</h1>
            )
        }
        <div>
            <span>Nombre: </span>
            <input type="text" value={newPiloto.nombre} onChange={(e) => newPilotoHandler('nombre', e.target.value)}/>
        </div>
        <div>
            <span>Pais de origen: </span>
            <input type="text" value={newPiloto.paisDeOrigen} onChange={(e) => newPilotoHandler('paisDeOrigen', e.target.value)}/>
        </div>
        <div>
            <span>Fecha de Nacimiento: </span>
            <input type="text" value={newPiloto.fechaDeNacimiento} onChange={(e) => newPilotoHandler('fechaDeNacimiento', e.target.value)}/>
        </div>
        <div>
            <span>Vehículo: </span>
            <input type="text" value={newPiloto.vehiculo} onChange={(e) => newPilotoHandler('vehiculo', e.target.value)}/>
        </div>
        <div>
            {
                pilotoSelected ? (
                    <button onClick={() => editFn(newPiloto.id, newPiloto)}>Editar piloto</button>
                ): (
                    <button onClick={() => createPiloto(newPiloto)}>Crear piloto</button>
                )
            }
            
            <button onClick={cancel} >Cancelar</button>
        </div>
    </div>
  )
}

export default CreatePilotoComponent