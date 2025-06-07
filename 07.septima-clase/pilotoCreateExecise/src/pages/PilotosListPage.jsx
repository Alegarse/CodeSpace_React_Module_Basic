import React, { useEffect, useState } from "react";
import InfoPilotoComponent from "../components/InfoPilotoComponent";
import NewPilotoComponent from "../components/NewPilotoComponent";
import { getPilotos, addNewPiloto } from "../services/pilotosFetch"

const PilotosListPage = () => {
  const [pilotosList, setPilotosList] = useState(undefined);
  const [createPilotoMode, setCreatePilotoMode] = useState(false);

  const loadPilotos = () => {
    setPilotosList(getPilotos());
  };

  const changeToRegister = () => {
    setCreatePilotoMode(true);
  };

  const createPiloto = (newPiloto) => {
    setPilotosList(addNewPiloto(newPiloto))
    setCreatePilotoMode(false);
  };

  useEffect(() => {
    loadPilotos();
  }, []);

  return (
    <div>
      {
        <>
          {createPilotoMode ? (
            <NewPilotoComponent createPiloto={createPiloto} />
          ) : (
            <>
              <div className="full-container">
                {
                  <>
                    {!pilotosList ? (
                      <span>Cargando lista de pilotos ....</span>
                    ) : (
                      <>
                        <h2>Listado de pilotos de formula 1</h2>
                        <button className="create-piloto" onClick={changeToRegister}>Crear Piloto F1</button>
                        <>
                          {pilotosList.map((p, idx) => (
                            <InfoPilotoComponent key={idx} piloto={p} />
                          ))}
                        </>
                      </>
                    )}
                  </>
                }
              </div>
            </>
          )}
        </>
      }
    </div>
  );
};

export default PilotosListPage;
