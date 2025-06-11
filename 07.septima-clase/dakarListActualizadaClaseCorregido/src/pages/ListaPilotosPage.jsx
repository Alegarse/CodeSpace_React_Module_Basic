import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPilotoFetch, deletePilotoFetch, getPilotoById, getPilotos } from '../../services/pilotosFetch'
import InfoPilotoComponent from '../components/InfoPilotoComponent'
import CreatePilotoComponent from '../components/CreatePilotoComponent'

const ListaPilotosPage = () => {

    const [listaPilotos, setListaPilotos] = useState()
    const [pilotoSelected, setPilotoSelected] = useState(undefined)
    const [registrarUsuarioMode, setRegistrarUsuarioMode] = useState(false)

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

    const unselectPiloto = () => {
        setPilotoSelected(undefined)
    }

    const createPiloto = (newPiloto) => {
        createPilotoFetch(newPiloto)
        disableRegistrarUsuarioMode()
        loadPilotos()
    }

    const disableRegistrarUsuarioMode = () => {
        setRegistrarUsuarioMode(false)
    }

    //Cuando tengo que hacer una carga de datos, de primeras voy a pensar en la utilización del  hook useEffect sin elementos en el array del parámetro 2

    useEffect(() =>{
        loadPilotos()
    }, [])

  return (
    <div>
        {
            registrarUsuarioMode ? (
                <CreatePilotoComponent createPiloto={createPiloto} cancel={disableRegistrarUsuarioMode} />
            ):(
                <>
                    {
                    !pilotoSelected && (
                            <>
                                <h1>Lista de pilotos</h1>
                                <div>
                                    <button onClick={() => setRegistrarUsuarioMode(true)}>Crear nuevo piloto</button>
                                </div>
                                <hr />
                            </>
                        )
                    }
                    {
                        !listaPilotos ? (
                            <div>Cargando...</div>
                        ) : (
                            <>
                                {
                                    pilotoSelected ? (
                                        <InfoPilotoComponent piloto={pilotoSelected} backToList={unselectPiloto} showInfo />
                                    ) : (
                                        <>
                                            {
                                                listaPilotos.map((p, idx) => (
                                                    <>
                                                        <InfoPilotoComponent 
                                                            key={idx} 
                                                            piloto={p} 
                                                            deletePiloto={deletePiloto} 
                                                            loadInfoPiloto={loadInfoPiloto} 
                                                        />
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
                </>
            )
        }
        
    </div>
  )
}

export default ListaPilotosPage