import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div>
        <Link to={'/'}>HomePage</Link>
        <Link to={'/contact'}>Contacto</Link>
    </div>
  )
}

export default MenuComponent