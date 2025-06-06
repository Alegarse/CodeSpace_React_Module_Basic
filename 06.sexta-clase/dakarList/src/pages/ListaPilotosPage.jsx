import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { deletePilotoFetch, getPilotoById, getPilotos } from '../../services/pilotosFetch'
import InfoPilotoComponent from '../components/InfoPilotoComponent'

const ListaPilotosPage = () => {

    const [listaPilotos, setListaPilotos] = useState()
    const [pilotoSelected, setPilotoSelected] = useState(undefined)

    const loadPilotos = () =>{
        const aux = getPilotos()
        setListaPilotos(aux)
    }

    const loadInfoPiloto = (idPiloto) => {
        const pilotoAux = getPilotoById(idPiloto)
        setPilotoSelected(pilotoAux)
    }

    const deletePiloto = (idPiloto) => {
        deletePilotoFetch(idPiloto)
        loadPilotos()
    }

    //Cuando tengo que hacer una carga de datos, de primeras voy a pensar en la utilización del  hook useEffect sin elementos en el array del parámetro 2

    useEffect(() =>{
        loadPilotos()
    }, [])

  return (
    <div>
        {
            !listaPilotos ? (
                <div>Cargando...</div>
            ) : (
                <>
                    {
                        pilotoSelected ? (
                            <InfoPilotoComponent piloto={pilotoSelected} readOnly />
                        ): (
                            <>
                                <h1>Lista de pilotos</h1>
                                <hr />
                                {
                                    listaPilotos.map((p, idx) => (
                                        <>
                                            <InfoPilotoComponent key={idx} piloto={p} deletePiloto={deletePiloto} loadInfoPiloto={loadInfoPiloto} />
                                            <hr />
                                        </>
                                    ))
                                }
                            </>
                        )
                    }
                </>
            )
        }
    </div>
  )
}

export default ListaPilotosPage