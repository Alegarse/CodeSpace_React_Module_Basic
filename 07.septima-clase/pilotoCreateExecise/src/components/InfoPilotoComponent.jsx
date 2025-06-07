const InfoPilotoComponent = ({
  piloto,
}) => {
  return (
    <div className="card-piloto">
      <div className="info-piloto">
        <div>
          <span className="title-prop">Id: </span>
          <span className="title-data">{piloto.id}</span>
        </div>
        <div>
          <span className="title-prop">Nombre: </span>
          <span className="title-data">{piloto.nombre}</span>
        </div>
        <div>
          <span className="title-prop">Pais de origen: </span>
          <span className="title-data">{piloto.paisDeOrigen}</span>
        </div>
        <div>
          <span className="title-prop">Fecha de nacimiento: </span>
          <span className="title-data">{piloto.fechaDeNacimiento}</span>
        </div>
        <div>
          <span className="title-prop">Vehículo: </span>
          <span className="title-data">{piloto.vehiculo}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoPilotoComponent;
