import React from "react";

const DondeComprarLibroComponent = (props) => {
  const { listaTiendas } = props;

  return (
    <div>
      <h2>Donde puedo comprar este libro?</h2>
      {listaTiendas.map((tienda, idx) => (
        <div key={idx}>
          <p>Nombre tienda: {tienda.name}</p>
          <p>Dirección tienda: {tienda.address}</p>
        </div>
      ))}
    </div>
  );
};

export default DondeComprarLibroComponent;
