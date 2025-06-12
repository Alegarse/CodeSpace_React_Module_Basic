import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/secondpage" element={<SecondPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
