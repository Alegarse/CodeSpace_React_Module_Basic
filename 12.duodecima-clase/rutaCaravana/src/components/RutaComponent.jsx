import React, { useState } from "react";

const RutaComponent = (props) => {
  const { saveRoute, delRoute, createMode, route } = props;

  const [ruta, setRuta] = useState({});

  const rutaHandler = (propName, propValue) => {
    setRuta({
      ...ruta,
      [propName]: propValue,
    });
  };

  const showError = (message) => {
    const error = document.querySelector(".error_message");
    error.style.visibility = "visible";
    error.textContent = message;
    setTimeout(() => {
      error.style.visibility = "hidden";
    }, 2000);
  };

  const validateFields = (ruta) => {
    let isError = false;
    let errorMessage = "";
    if (!ruta.name_route || ruta.name_route === "") {
      errorMessage = "El nombre no puede estar vacio";
      isError = true;
    } else if (!ruta.date_route || ruta.date_route === "") {
      errorMessage = "La fecha no puede estar vacía";
      isError = true;
    } else if (!ruta.price_route || ruta.price_route === "") {
      errorMessage = "El presupuesto no puede estar vacio";
      isError = true;
    } else if (!ruta.travellers_route || ruta.travellers_route === "") {
      errorMessage = "Los viajeros no pueden estar vacios";
      isError = true;
    }
    if (isError) {
      showError(errorMessage);
    } else {
      saveRoute(ruta);
    }
  };

  return (
    <div className="ruta-container">
      {route === undefined && !createMode ? (
        <div>No hay creada ninguna ruta</div>
      ) : (
        <>
          <div className="input-row">
            <span>Nombre Ruta</span>
            {createMode ? (
              <input
                type="text"
                onChange={(e) => rutaHandler("name_route", e.target.value)}
              />
            ) : (
              <span>{route?.name_route}</span>
            )}
          </div>
          <div className="input-row">
            <span>Fecha</span>
            {createMode ? (
              <input
                type="text"
                onChange={(e) => rutaHandler("date_route", e.target.value)}
              />
            ) : (
              <span>{route?.date_route}</span>
            )}
          </div>
          <div className="input-row">
            <span>Presupuesto</span>
            {createMode ? (
              <input
                type="text"
                onChange={(e) => rutaHandler("price_route", e.target.value)}
              />
            ) : (
              <span>{route?.price_route}</span>
            )}
          </div>
          <div className="input-row">
            <span>Viajeros</span>
            {createMode ? (
              <input
                type="text"
                onChange={(e) =>
                  rutaHandler("travellers_route", e.target.value)
                }
              />
            ) : (
              <ul>
                {route?.travellers_route.split(",").map((t, idx) => (
                  <li key={idx}>{t.trim()}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            {createMode ? (
              <button
                className="btn-create"
                onClick={() => {
                  validateFields(ruta);
                }}
              >
                Crear ruta
              </button>
            ) : (
              <button className="btn-delete" onClick={delRoute}>
                Borrar ruta
              </button>
            )}
          </div>

          <div className="error_message">\u200B</div>
        </>
      )}
    </div>
  );
};

export default RutaComponent;
