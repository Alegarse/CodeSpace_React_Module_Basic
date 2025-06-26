import React from 'react'

const VeranoComponent = (props) => {
    const { 
        changeToInvierno
    } = props
  return (
    <div>
        <p>
            VeranoComponent
        </p>
        <button onClick={changeToInvierno}>Invierno</button>
    </div>
  )
}

export default VeranoComponent