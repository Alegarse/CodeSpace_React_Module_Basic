import React from 'react'

const InfoPilotoComponent = ({ piloto, deletePiloto, loadInfoPiloto, backToList, showInfo, changeToEditMode }) => {
    
  return (
    <div style={{display: 'flex', flexDirection: !showInfo ? 'row' : 'column', gap: 5, alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
            <span style={{fontWeight: 'bold'}}>Id: </span>
            <span>{piloto.id}</span>
        </div>
        <div>
            <span style={{fontWeight: 'bold'}}>Nombre: </span>
            <span>{piloto.nombre}</span>
        </div>
        <div>
            <span style={{fontWeight: 'bold'}}>Pais de origen: </span>
            <span>{piloto.paisDeOrigen}</span>
        </div>
        {
            showInfo && (
                <>
                    <div>
                        <span style={{fontWeight: 'bold'}}>Fecha de nacimiento: </span>
                        <span>{piloto.fechaDeNacimiento}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: 'bold'}}>Vehiculo: </span>
                        <span>{piloto.vehiculo}</span>
                    </div>
                </>
            )
        }
        {
            !showInfo ? (
                <div style={{display: 'flex', gap: 5}}>
                    <button onClick={() => deletePiloto(piloto.id)}>Delete</button>
                    <button onClick={() => loadInfoPiloto(piloto.id)}>Select</button>
                </div>
            ) : (
                <div style={{display: 'flex', gap: 5}}>
                    <button onClick={() => changeToEditMode()}>Editar</button>
                    <button onClick={() => backToList()}>Volver</button>
                </div>
            )
        }
    </div>
  )
}

export default InfoPilotoComponent