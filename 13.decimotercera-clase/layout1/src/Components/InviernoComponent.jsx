import React from 'react'

const InviernoComponent = (props) => {
    const {
        changeToVerano 
    } = props
  return (
    <div>
        <p>
            InviernoComponent
        </p>
        <button onClick={changeToVerano}>Verano</button>
    </div>
  )
}

export default InviernoComponent