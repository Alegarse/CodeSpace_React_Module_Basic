import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import DetailStudentPage from './pages/DetailStudentPage'
import CreateStudentPage from './pages/CreateStudentPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/info/:id' element={<DetailStudentPage />} />
        <Route path='/create' element={<CreateStudentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
