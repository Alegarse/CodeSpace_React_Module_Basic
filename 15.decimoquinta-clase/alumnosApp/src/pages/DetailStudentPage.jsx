import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { deleteStudent, getStudent, modifyStudent, payCourse } from '../services/apiFetch'

const DetailStudentPage = () => {
  
  const {
    id
  } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState(undefined)
  const [studentInit, setStudentInit] = useState(undefined)
  const [errorLoad, setErrorLoad] = useState(undefined)
  const [isEdit, setIsEdit] = useState(undefined)

  const load = () => {
    const aux = getStudent(id)
    setStudent(aux)
    setStudentInit(aux)
    if(!aux) {
      setErrorLoad('No hay ningún usuario con ese id')
    }
  }

  const studentHandler = (propName, propValue) => {
    setStudent({
      ...student,
      [propName]: propValue
    })
  }

  const save = () => {
    modifyStudent(student)
    setIsEdit(false)
    load()
  }

  const cancel = () => {
    setStudent(studentInit)
    setIsEdit(false)
  }

  const pay = () => {
    payCourse(id)
    setStudent({
      ...student,
      payed: true
    })
    setStudentInit({
      ...studentInit,
      payed: true
    })
  }

  const deleteStudentEvent = () => {
    deleteStudent(id)
    goToList()
  }

  const goToList = () => {
    navigate('/')
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h1>Información del alumno - {id}</h1>
      <hr />
      <div>
        <button onClick={goToList}>Volver</button>
        <button onClick={pay} disabled={student?.payed}>Marcar como pagado</button>
        <button onClick={() => setIsEdit(true)} disabled={isEdit}>Modificar</button>
        <button onClick={deleteStudentEvent}>Eliminar</button>
      </div>
      <hr />
      {
        errorLoad ? (
          <div>{errorLoad}</div>
        ): !student ? (
          <div>Cargando...</div>
        ) : (
          <div>
            <div>
              <span>Nombre: </span>
              {
                isEdit ? ( 
                  <input type="text" placeholder={student.name} onChange={(e) => studentHandler('name', e.target.value)}/>
                ) : (
                  <span>{student.name}</span>
                )
              }
            </div>
            <div>
              <span>Apellidos: </span>
              {
                isEdit ? (
                  <input type="text" placeholder={student.lastName} onChange={(e) => studentHandler('lastName', e.target.value)}/>
                ) : ( 
                  <span>{student.lastName}</span>
                )
              }
            </div>
            <div>
              <span>Correo Electrónico: </span>
              {
                isEdit ? (
                  <input type="text" placeholder={student.email} onChange={(e) => studentHandler('email', e.target.value)} />
                ): ( 
                  <span>{student.email}</span>
                )
              }
            </div>
            <div>
              <span>Nombre usuario: </span>
              {
                isEdit ? (
                  <input type="text" placeholder={student.username} onChange={(e) => studentHandler('username', e.target.value)}/>
                ) :( 
                  <span>{student.username}</span>
                )
              }
            </div>
            <div>
              <span>Curso registrado: </span>
              {
                isEdit ? ( 
                  <input type="text" disabled value={student.boughtCourse} onChange={(e) => studentHandler('boughtCourse', e.target.value)}/>
                ) : (
                  <span>{student.boughtCourse}</span>
                )
              }
            </div>
            {
              isEdit && (
                <div>
                  <button onClick={save}>Guardar</button>
                  <button onClick={cancel}>Cancelar</button>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default DetailStudentPage