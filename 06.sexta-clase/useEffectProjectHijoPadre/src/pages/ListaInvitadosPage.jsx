import React, { useEffect, useState } from 'react'
import { getInvitados, deleteInvitadoFetch } from '../services/invitadosFetch'
import InfoInvitadoComponent from '../components/InfoInvitadoComponent'

const ListaInvitadosPage = () => {


  //Esta primera variable de estado es la quem e ayuda a mi a tener un estado inicial de los invitados, de la lista de invitados
  // para que pueda volver a ese estado inicial cuando el liveSearch haya acabado, es decir, cuando nosotros hemos encontrar
  // el invitado que buscamos y eliminas el texto del input de búsqueda
  const [listaInvitadosInit, setListaInvitadosInit] = useState()
  const [listaInvitados, setListaInvitados] = useState()
  const [searchLive, setSearchLive] = useState('')

  const loadInvitados = () => {
    const aux = getInvitados()
    setListaInvitadosInit(aux)
    setListaInvitados(aux)
  }

  const liveSearch = () => {
    if(searchLive === ''){
        setListaInvitados(listaInvitadosInit)
    }else{
      const aux = listaInvitadosInit.filter(i => i.nombreInvitado.toLowerCase().includes(searchLive.toLowerCase()))
      setListaInvitados(aux)
    }
  }

  const deleteInvitado = (idInvitado) => {
    deleteInvitadoFetch(idInvitado)
    loadInvitados()
  }

  useEffect(() => {
      liveSearch()
  }, [searchLive])

  //Cuando tenga que hacer una carga de datos, de primeras pensaré en un useEffect del tipo 1, es decir, aquel que tiene el segundo parámetro como un array vacío

  useEffect(() => {
    loadInvitados()
  },[])

  return (
    <div>
      {
        !listaInvitados ? (
          <div>
            Cargando invitados...
          </div>
        ) : (
          <>
            <h1>Lista invitados</h1>
            <div>
              <span>Buscar invitado: </span>
              <input type="text" onChange={(event) => setSearchLive(event.target.value)}/>
            </div>
            <div>
              {
                listaInvitados.map((invitado,idx) => (
                  <InfoInvitadoComponent key={idx} invitado={invitado} deleteInvitado={deleteInvitado} />
                ))
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default ListaInvitadosPage