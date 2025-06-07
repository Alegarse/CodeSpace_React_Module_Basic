import React, { useEffect, useState } from "react";
import {
  deletePilotoFetch,
  getPilotoById,
  getPilotos,
} from "../services/pilotosFetch";
import InfoPilotoComponent from "../components/InfoPilotoComponent";

const ListaPilotosPage = () => {
  const [listaPilotos, setListaPilotos] = useState(undefined);
  const [pilotoSelected, setPilotoSelected] = useState(undefined);

  const loadPilotos = () => {
    console.log("Aqui llego");
    const aux = getPilotos();
    setListaPilotos(aux);
  };

  const deletePiloto = (idPiloto) => {
    deletePilotoFetch(idPiloto);
    loadPilotos();
  };

  const loadInfoPiloto = (idPiloto) => {
    setPilotoSelected(getPilotoById(idPiloto));
  };

  const backToList = () => {
    setPilotoSelected(undefined);
  };

  useEffect(() => {
    loadPilotos();
  }, []);

  return (
    <div className="full-container">
      {!listaPilotos ? (
        <div>Cargando pilotos...</div>
      ) : (
        <>
          {pilotoSelected ? (
            <InfoPilotoComponent
              piloto={pilotoSelected}
              backToList={backToList}
              showInfo
            />
          ) : (
            <>
              <h1>Lista de pilotos</h1>
              {listaPilotos.map((p, idx) => (
                <>
                  <InfoPilotoComponent
                    key={idx}
                    piloto={p}
                    deletePiloto={deletePiloto}
                    selectPiloto={loadInfoPiloto}
                  />
                </>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ListaPilotosPage;
