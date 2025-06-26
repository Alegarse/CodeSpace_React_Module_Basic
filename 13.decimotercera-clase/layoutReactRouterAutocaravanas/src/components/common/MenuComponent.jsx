import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 50}}>
        <Link to={'/'}>Crear ruta</Link>
        <Link to={'/info'}>Información de ruta</Link>
        <Link to={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent