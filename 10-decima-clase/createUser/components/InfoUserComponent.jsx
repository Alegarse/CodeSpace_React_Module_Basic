import React, { useEffect, useState } from 'react'

const InfoUserComponent = (props) => {
    const {
        user,
        modifyUser
    } = props

    const [readOnly, setReadOnly] = useState(true) // 'EDICION' | 'READONLY'
    const [userAux, setUserAux] = useState({...user})
    
    const changeToModifyMode = () => {
        setReadOnly(false)
    }
    const changeToReadOnlyMode = () => { 
        setReadOnly(true)
    }

    const reset = () => {
        setUserAux({...user})
        changeToReadOnlyMode()
    }

    const cancel = () => {
        reset()
    }

    const save = () => {
        modifyUser(userAux)
        reset()
    }

    const formFieldHandler = (propName, propValue) => {
        setUserAux({
            ...userAux,
            [propName]: propValue
        })
    }
//Este useEffect me ayuda a forzar la escucha de la variable de estado user y la actualización de userAux
    useEffect(() => {
        setUserAux({...user})
    }, [user]) 

  return (
    <div>
        <h3>Información del usuario</h3>
        <div>
            <span style={{fontWeight: 'bold'}}>Username:</span>
            {
                readOnly ? (
                    <span>{userAux.username}</span>
                ) : (
                    <input type="text" value={userAux.username} onChange={(e) => formFieldHandler('username', e.target.value)}/>
                )
            }
        </div>
        <div>
            <span style={{fontWeight: 'bold'}}>Password:</span>
            {
                readOnly ? (
                    <span>{userAux.password}</span>
                ) : (
                    <input type="text" value={userAux.password} onChange={(e) => formFieldHandler('password', e.target.value)} />
                )
            }
        </div>
        <div>
            <span style={{fontWeight: 'bold'}}>Email:</span>
            {
                readOnly ? (
                    <span>{userAux.email}</span>
                ) : (
                    <input type="text" value={userAux.email} onChange={(e) => formFieldHandler('email', e.target.value)}/>
                )
            }
        </div>
        <div>
            {
                readOnly ? (
                        <button onClick={changeToModifyMode}>Editar</button>
                ) : (
                    <>
                        <button onClick={save}>Guardar</button>
                        <button onClick={cancel}>Cancelar</button>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default InfoUserComponent