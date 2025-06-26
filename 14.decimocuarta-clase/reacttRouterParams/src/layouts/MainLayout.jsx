import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {

  return (
    <div>
        <header>
            <h1>Nuestro dashboaard</h1>
        </header>
        <Outlet />
        <footer>
            Creado por nosotros
        </footer>
    </div>
  )
}

export default MainLayout