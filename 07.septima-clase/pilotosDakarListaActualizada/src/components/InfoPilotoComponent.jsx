const InfoPilotoComponent = ({
  piloto,
  deletePiloto,
  selectPiloto,
  backToList,
  showInfo,
}) => {
  return (
    <div className="card-piloto">
      <div className="info-piloto">
        {showInfo && (
        <p>
          <span className="title-prop">Id: </span>
          <span className="title-data">{piloto.id}</span>
        </p>
        )
      }
        <p>
          <span className="title-prop">Nombre: </span>
          <span className="title-data">{piloto.nombre}</span>
        </p>
        <p>
          <span className="title-prop">Pais de origen: </span>
          <span className="title-data">{piloto.paisDeOrigen}</span>
        </p>
        {showInfo ? (
        <p>
          <span className="title-prop">Fecha de nacimiento: </span>
          <span className="title-data">{piloto.fechaDeNacimiento}</span>
        </p>
        ):(null)}
        <p>
          <span className="title-prop">Vehículo: </span>
          <span className="title-data">{piloto.vehiculo}</span>
        </p>
      </div>
      <div className="utils-piloto">
        {!showInfo ? (
          <>
            <button
              className="btn-delete"
              onClick={() => deletePiloto(piloto.id)}
            >
              Eliminar
            </button>
            <button
              className="btn-select"
              onClick={() => selectPiloto(piloto.id)}
            >
              Seleccionar
            </button>
          </>
        ) : (
          <>
            <button className="btn-return" onClick={() => backToList()}>
              Volver al listado
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoPilotoComponent;
