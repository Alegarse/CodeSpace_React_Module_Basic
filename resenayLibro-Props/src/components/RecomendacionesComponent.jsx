import React from "react";
import InfoLibroComponent from "./InfoLibroComponent";

const RecomendacionesComponent = (props) => {
  const { librosRecomendados } = props;

  return (
    <div>
      <h2>Recomendaciones acordes a tus gustos</h2>
      {librosRecomendados.map((libroRecomendado, idx) => (
        <InfoLibroComponent
        key={idx}
        infoLibro={libroRecomendado}
        notShowTitle={true}/>
      ))}
    </div>
  );
};

export default RecomendacionesComponent;
