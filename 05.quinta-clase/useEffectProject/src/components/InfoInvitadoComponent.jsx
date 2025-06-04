import React from 'react'

const InfoInvitadoComponent = (props) => {

    const {
        invitado
    } = props
    
  return (
    <div>
        <div>
            <span>Nombre: </span>
            <span>{invitado.nombreInvitado}</span>
        </div>
    </div>
  )
}

export default InfoInvitadoComponent