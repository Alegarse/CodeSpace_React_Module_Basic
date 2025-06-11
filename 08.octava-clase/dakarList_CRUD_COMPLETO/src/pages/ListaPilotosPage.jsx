import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPilotoFetch, deletePilotoFetch, editPilotoFetch, getPilotoById, getPilotos } from '../../services/pilotosFetch'
import InfoPilotoComponent from '../components/InfoPilotoComponent'
import CreatePilotoComponent from '../components/CreatePilotoComponent'

const ListaPilotosPage = () => {

    const [listaPilotos, setListaPilotos] = useState()
    const [pilotoSelected, setPilotoSelected] = useState(undefined)
    const [mode, setMode] = useState('LISTADO') // Valores posibles de mode: 'LISTADO' | 'CREATE' | 'MODIFY'

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
        backToListadoMode()
        loadPilotos()
    }

    const editPiloto = (idPiloto, pilotoModified)=> {
        editPilotoFetch(idPiloto, pilotoModified)
        loadPilotos()
        loadInfoPiloto(idPiloto)
        backToListadoMode()
    }


    const backToListadoMode = () => {
        setMode('LISTADO')
    }

    const changeToEditMode = () => {
        setMode('MODIFY')
    }

    //Cuando tengo que hacer una carga de datos, de primeras voy a pensar en la utilización del  hook useEffect sin elementos en el array del parámetro 2

    useEffect(() =>{
        loadPilotos()
    }, [])

  return (
    <div>
        {
            mode === 'CREATE' || mode === 'MODIFY' ? (
                <CreatePilotoComponent createPiloto={createPiloto} cancel={backToListadoMode} pilotoSelected={pilotoSelected} editFn={editPiloto} />
            ):(
                <>
                    {
                    !pilotoSelected && (
                            <>
                                <h1>Lista de pilotos</h1>
                                <div>
                                    <button onClick={() => setMode('CREATE')}>Crear nuevo piloto</button>
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
                                        <InfoPilotoComponent piloto={pilotoSelected} backToList={unselectPiloto} showInfo changeToEditMode={changeToEditMode} />
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