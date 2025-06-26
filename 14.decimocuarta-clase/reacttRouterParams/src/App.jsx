import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListaUsuarios from './pages/ListaUsuarios'
import MainLayout from './layouts/MainLayout'
import DetalleUsuario from './pages/DetalleUsuario'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<ListaUsuarios />}/>
          <Route path='/detalle/:idUser' element={<DetalleUsuario />}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
