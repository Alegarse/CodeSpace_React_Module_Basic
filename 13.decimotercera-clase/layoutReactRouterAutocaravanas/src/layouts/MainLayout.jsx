import React from 'react'
import MenuComponent from '../components/common/MenuComponent'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <h1>Mi aplicación con Layout y React Router</h1>
        <MenuComponent />
        <hr />
        <Outlet />
    </div>
  )
}

export default MainLayout