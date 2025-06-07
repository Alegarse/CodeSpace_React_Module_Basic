import React, { useState } from "react";

const NewPilotoComponent = ({ createPiloto }) => {
  const [newPiloto, setNewPiloto] = useState({});

  const dataNewPilotHandler = (propName, propValue) => {
    const aux = {
      ...newPiloto,
      [propName]: propValue,
    };
    setNewPiloto(aux);
  };

  return (
    <>
    <h3>Crear nuevo piloto Fórmula 1</h3>
    <div className="card-piloto-new">
      <div className="info-piloto-new">
        <div className="field-data">
          <span className="title-prop">Nombre: </span>
          <input
            type="text"
            onChange={(e) => {
              dataNewPilotHandler("nombre", e.target.value);
            }}
          />
        </div>
        <div className="field-data">
          <span className="title-prop">Pais de origen: </span>
          <input
            type="text"
            onChange={(e) => {
              dataNewPilotHandler("paisDeOrigen", e.target.value);
            }}
          />
        </div>
        <div className="field-data">
          <span className="title-prop">Fecha de nacimiento: </span>
          <input
            type="text"
            onChange={(e) => {
              dataNewPilotHandler("fechaDeNacimiento", e.target.value);
            }}
          />
        </div>
        <div className="field-data">
          <span className="title-prop">Vehículo: </span>
          <input
            type="text"
            onChange={(e) => {
              dataNewPilotHandler("vehiculo", e.target.value);
            }}
          />
        </div>
      </div>
    </div>
    <button onClick={() => {createPiloto(newPiloto)}}>Agregar piloto</button>
    </>
  );
};

export default NewPilotoComponent;
