import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/userFetch'
import { useNavigate } from 'react-router'

const ListaUsuarios = () => {

    const navigate = useNavigate()
    const [userList, setUserList] = useState([])

    const loadUsers = () => {
        const usersAux = getUsers()
        setUserList(usersAux)
    }

    const goToDetail = (idUser) => {
        navigate(`/detalle/${idUser}`)
    }

    useEffect(() => {
        loadUsers()
    }, [])

  return (
    <div>
        {
            !userList || userList.length <= 0 ? (
                <>
                    <h4>Loading...</h4>
                </>
            ) :(
                userList.map((u, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <p>{u.id}</p>
                        <p>{u.username}</p>
                        <button onClick={() => goToDetail(u.id)}>Ver detalle</button>
                    </div>
                ))
            )
        }
    </div>
  )
}

export default ListaUsuarios