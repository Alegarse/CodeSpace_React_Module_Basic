import React, { useState } from "react";
import { useNavigate } from "react-router";
import MenuComponent from "../components/MenuComponent";
import RutaComponent from "../components/RutaComponent";

const CrearRuta = () => {
  const navigate = useNavigate();

  const saveRoute = (ruta) => {
    navigate("/inforuta", {
      state: {
        ruta,
      },
    });
  };

  return (
    <div>
      <MenuComponent />
      <h1>Crear Ruta</h1>
      <RutaComponent saveRoute={saveRoute} createMode/>
    </div>
  );
};

export default CrearRuta;
