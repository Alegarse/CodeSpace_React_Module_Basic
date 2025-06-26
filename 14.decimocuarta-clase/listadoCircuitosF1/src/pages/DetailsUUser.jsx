import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getUserById } from '../services/usersFetch'

const DetailsUUser = () => {
  
  const [userDetail, setUserDetail] = useState(undefined)
  const navigate = useNavigate()

  const { userId } = useParams()

  const loadUserDetail = () => {
    const userDetails = getUserById(userId)
    setUserDetail(userDetails)
  }

  const backToList = () => {
    navigate("/")
  }

  useEffect(() => {
    loadUserDetail()
  },[])

  return (
    <div>
      { !userDetail ? (
        <div>Cargando datos...</div>
      ) : (
        <>
        <h3 style={{fontStyle:"italic"}}>Detalle del circuito {userDetail.name}</h3>

        <div style={{display:"flex", flexDirection:"column", gap:5, border: "2px solid red", borderRadius: "10px", margin:"10px", padding:"10px"}}>
          <span><b>Id: </b>{userDetail.id}</span>
          <span><b>Name: </b>{userDetail.name}</span>
          <span><b>Kms: </b>{userDetail.km}</span>
          <span><b>Country: </b>{userDetail.pais}</span>
        </div>
        </>
      )
    }
    <button onClick={backToList} style={{backgroundColor: "blue"}}>Volver al listado</button>
    </div>

  )


}

export default DetailsUUser