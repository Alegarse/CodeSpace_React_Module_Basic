import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App