import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import CrearRutaPage from './pages/CrearRutaPage'
import InformacionRutaPage from './pages/InformacionRutaPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CrearRutaPage />}/>
        <Route path='/info' element={<InformacionRutaPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
