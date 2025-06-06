import React from 'react'

const InfoPilotoComponent = ({ piloto, deletePiloto, loadInfoPiloto, readOnly }) => {
    
  return (
    <div>
        <div>
            <span>Id: </span>
            <span>{piloto.id}</span>
        </div>
        <div>
            <span>Nombre: </span>
            <span>{piloto.nombre}</span>
        </div>
        <div>
            <span>Pais de origen: </span>
            <span>{piloto.paisDeOrigen}</span>
        </div>
        <div>
            <span>Fecha de nacimiento: </span>
            <span>{piloto.fechaDeNacimiento}</span>
        </div>
        <div>
            <span>Vehiculo: </span>
            <span>{piloto.vehiculo}</span>
        </div>
        {
            !readOnly ? (
                <div>
                    <button onClick={() => deletePiloto(piloto.id)}>Delete</button>
                    <button onClick={() => loadInfoPiloto(piloto.id)}>Select</button>
                </div>
            ) : (null)
        }
    </div>
  )
}

export default InfoPilotoComponent