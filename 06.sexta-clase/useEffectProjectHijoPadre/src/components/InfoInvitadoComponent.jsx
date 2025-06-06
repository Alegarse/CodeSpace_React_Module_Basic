import React from 'react'


/*
  Las propiedades que un componente puede recibir pueden ser de (casi)cualquier tipo. Por ejemplo podemos enviar del tipo:
    1) string
    2) number
    3) object
    4) array
    5) function
    6) componente de react
*/

const InfoInvitadoComponent = (props) => {

    const {
        invitado,
        deleteInvitado
    } = props

    
  return (
    <div>
        <div>
            <span>Nombre: </span>
            <span>{invitado.nombreInvitado}</span>
            <button onClick={() => deleteInvitado(invitado.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default InfoInvitadoComponent