import React from 'react'

const DondeComprarLibroComponent = (props) => {

  const {
    tiendas
  } = props

  return (
    <div>
        <h2>Donde puedo comprar este libro?</h2>
        {
            tiendas.map((tienda, idx) => (
                <div key={idx}>
                    <p>Nombre tienda: {tienda.name}</p>
                    <p>Dirección tienda: {tienda.address}</p>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default DondeComprarLibroComponent