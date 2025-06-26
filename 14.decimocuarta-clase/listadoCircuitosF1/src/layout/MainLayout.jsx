import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <header style={{color: "orange", marginBottom: "50px"}}>
            <h2>Ejercicio de listado y detalle por params</h2>
        </header>
        <Outlet/>
        <footer style={{fontStyle: "italic", marginTop: "20px"}}>
            Designed by Alegarse
        </footer>
    </div>
  )
}

export default MainLayout