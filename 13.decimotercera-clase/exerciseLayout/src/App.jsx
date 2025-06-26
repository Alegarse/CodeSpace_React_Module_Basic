import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
