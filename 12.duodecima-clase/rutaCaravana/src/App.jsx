import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import CrearRuta from "./pages/CrearRuta";
import InfoRuta from "./pages/InfoRuta";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CrearRuta />} />
        <Route path="/inforuta" element={<InfoRuta />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
