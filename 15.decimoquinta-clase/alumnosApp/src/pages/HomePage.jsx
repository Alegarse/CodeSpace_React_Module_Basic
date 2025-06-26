import React, { useEffect, useState } from 'react'
import { getAll } from '../services/apiFetch'
import { useNavigate } from 'react-router'

const HomePage = () => {

    const navigate = useNavigate()
    const [students, setStudents] = useState(undefined)

    const load = () => {
        const aux = getAll()
        setStudents(aux)
    }

    const goToCreateStudent = () => {
        navigate('/create')
    }

    const goToInfo = (id) => {
        navigate(`/info/${id}`)
    }

    useEffect(() => {
        load()
    }, [])

  return (
    <div>
        <h1>Lista de alumnos</h1>
        <hr />
        <div>
            <button onClick={goToCreateStudent}>Añadir nuevo alumno</button>
        </div>
        <hr />
        {
            !students ? (
                <div>Cargando...</div>
            ) : students.length === 0 ? (
                <div>
                    No hay alumnos registrados
                </div>
            ) : ( students.map( (s, idx) => (
                <div key={idx} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10}}>
                    <span>{s._id}</span>
                    <span>{s.name}</span>
                    <span>{s.lastName}</span>
                    <span>{s.boughtCourse}</span>
                    <span>{s.payed ? 'PAGADO' : 'NO PAGADO'}</span>
                    <div>
                        <button onClick={() => goToInfo(s._id)}>Ver info</button>
                    </div>
                </div>
            )))
        }
    </div>
  )
}

export default HomePage