import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import ListUsers from './pages/ListUsers'
import DetailsUUser from './pages/DetailsUUser'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<ListUsers/>}/>
        <Route path="/details/:userId" element={<DetailsUUser/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
