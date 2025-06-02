import React from "react";

const InfoLibroComponent = (props) => {
  const { infoLibro, notShowTitle } = props;

  return (
    <div>
      {!notShowTitle ? <h2>Información del libro</h2> : null}

      <div>
        <p>Title: {infoLibro.title}</p>
        <p>ISBN: {infoLibro.ISBN}</p>
        <p>Autor: {infoLibro.author}</p>
        <p>Descripción: {infoLibro.description}</p>
      </div>
    </div>
  );
};

export default InfoLibroComponent;
