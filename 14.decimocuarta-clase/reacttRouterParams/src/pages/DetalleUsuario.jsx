import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getUserById } from '../services/userFetch'

const DetalleUsuario = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState(undefined)

    const loadUserDetail = () => {
        const userDetailResponse = getUserById(params.idUser)
        setUserDetail(userDetailResponse)
    }
    
    const goToList = () => {
        navigate('/')
    }

    useEffect(() => {
        loadUserDetail()
    },[])

  return (
    <div>
        {
            !userDetail ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h2>Detalle de usuario = {params.idUser}</h2>
                    <hr />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>Id: {userDetail.id}</span>
                        <span>Username: {userDetail.username}</span>
                        <span>Name: {userDetail.name}</span>
                    </div>
                </>
            )
        }
        <button onClick={goToList}>Volver</button>
    </div>
  )
}

export default DetalleUsuario