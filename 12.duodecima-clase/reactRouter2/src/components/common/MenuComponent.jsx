import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'space-around'}}>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default MenuComponent