import React from 'react'

const MainLayout = (props) => {
    const {
        children
    } = props

  return (
    <div>
      <div>
        <h1>Aplicación que se encarga de cambiar de estación</h1>
      </div>

        {children}

      <div>
        <span>Este es el footer de mi pedazo de app</span>
      </div>
    </div>
  )
}

export default MainLayout