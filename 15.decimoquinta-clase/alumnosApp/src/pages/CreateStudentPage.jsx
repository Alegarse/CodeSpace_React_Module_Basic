import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { createStudent } from '../services/apiFetch'


const ERROR_MESSAGE = 'Este campo no puede estar vacío'

const CreateStudentPage = () => {

  const navigate = useNavigate()
  const [newStudent, setNewStudent] = useState({})
  const [errorMessageState, setErrorMessageState] = useState({})

  const studentHandler = (propName, propValue) => {
    setNewStudent({
      ...newStudent,
      [propName]: propValue
    })
  }

  const checkFields = () => {
    let isError = false
    let errorMessages = {}
    //TODO: Lo dejo comentado porque es interesante este tratamiento de objetos avanzado pero no hace falta usarlo en la práctica
    // let errorMessages = {
    //   ...((!newStudent.name || newStudent.name === '') && {name: 'El nombre no puede estar vacío'}),
    //   ...((!newStudent.name || newStudent.name === '') && {name: 'El nombre no puede estar vacío'}),
    //   ...((!newStudent.name || newStudent.name === '') && {name: 'El nombre no puede estar vacío'}),
    //   ...((!newStudent.name || newStudent.name === '') && {name: 'El nombre no puede estar vacío'}),
    //   ...((!newStudent.name || newStudent.name === '') && {name: 'El nombre no puede estar vacío'}),
    // }

    if(!newStudent.name || newStudent.name === ''){
      errorMessages = {
        ...errorMessages,
        name: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newStudent.lastName || newStudent.lastName === ''){
      errorMessages = {
        ...errorMessages,
        lastName: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newStudent.email || newStudent.email === ''){
      errorMessages = {
        ...errorMessages,
        email: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newStudent.boughtCourse || newStudent.boughtCourse === ''){
      errorMessages = {
        ...errorMessages,
        boughtCourse: ERROR_MESSAGE
      }
      isError = true
    }
    if(!newStudent.username || newStudent.username === ''){
      errorMessages = {
        ...errorMessages,
        username: ERROR_MESSAGE
      }
      isError = true
    }
    if(isError) {
      setErrorMessageState(errorMessages)
      return false
    }else {
      return true
    }
  }

  const cancel = () => {
    navigate('/')
  }

  const saveStudent = () => {
    const check = checkFields()
    if(check) {
      createStudent(newStudent)
      navigate('/')
    }
  }

  return (
    <div>
      <h1>Crear nuevo alumno</h1>
      <div>
        <span>Nombre: </span>
        <input type="text" value={newStudent.name} name={'name'} onChange={(e) => studentHandler('name', e.target.value)}/>
        {
          errorMessageState && errorMessageState.name && (<span style={{color: 'red'}}>{errorMessageState.name}</span>)
        }
      </div>
      <div>
        <span>Apellidos: </span>
        <input type="text" value={newStudent.lastName} name={'lastName'} onChange={(e) => studentHandler('lastName', e.target.value)} />
        {
          errorMessageState && errorMessageState.name && (<span style={{color: 'red'}}>{errorMessageState.name}</span>)
        }
      </div>
      <div>
        <span>Correo electrónico: </span>
        <input type="text" value={newStudent.email} name={'email'} onChange={(e) => studentHandler('email', e.target.value)} />
        {
          errorMessageState && errorMessageState.name && (<span style={{color: 'red'}}>{errorMessageState.name}</span>)
        }
      </div>
      <div>
        <span>Curso que compra: </span>
        <input type="text" value={newStudent.boughtCourse} name={'boughtCourse'} onChange={(e) => studentHandler('boughtCourse', e.target.value)}/>
        {
          errorMessageState && errorMessageState.name && (<span style={{color: 'red'}}>{errorMessageState.name}</span>)
        }
      </div>
      <div>
        <span>Nombre usuario: </span>
        <input type="text" value={newStudent.username} name={'username'} onChange={(e) => studentHandler('username', e.target.value)} />
        {
          errorMessageState && errorMessageState.name && (<span style={{color: 'red'}}>{errorMessageState.name}</span>)
        }
      </div>
      <div>
        <button onClick={saveStudent}>Guardar</button>
        <button onClick={cancel}>Cancelar</button>
      </div>
    </div>
  )
}

export default CreateStudentPage