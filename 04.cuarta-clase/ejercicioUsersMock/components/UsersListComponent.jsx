import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/usersFetch'
import UserDetailsComponent from './UserDetailsComponent'

const UsersListComponent = () => {

    const [listUsers, setListUsers] = useState()

    //Este useEffect solo se ejecute en la carga del componente y no se vuelva a ejecutar. Por lo que me sirve perfecto para cargar datos del back
    useEffect(() => {
        const aux = getUsers()
        setListUsers(aux)
    }, [])

  return (
    <div>
        {
            !listUsers ? (
                <div>
                    Cargando...
                </div>
            ) : (
                listUsers.map((user, idx) => (
                    <UserDetailsComponent key={idx} user={user} />
                ))
            )
        }
    </div>
  )
}

export default UsersListComponent