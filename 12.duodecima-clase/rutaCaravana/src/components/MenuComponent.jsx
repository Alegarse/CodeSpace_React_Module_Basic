import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div className='menu'>
      <Link to={'/'}>Crear Ruta</Link>
      <Link to={'/inforuta'}>Información de la ruta</Link>
      <Link to={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent