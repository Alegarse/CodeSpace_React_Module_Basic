import React, { useState } from 'react'

const CreateUserComponent = (props) => {

    const {
        createUser,
    } = props

    const [newUser, setNewUser] = useState({})

    const formFieldHandler = (propName, propValue) => {
        setNewUser({
            ...newUser,
            [propName]: propValue
        })
    }

  return (
    <div>
        <h3>Registro usuario</h3>
        <div>
            <span>Username</span>
            <input type="text" value={newUser.username} onChange={(e) => formFieldHandler('username', e.target.value)}/>
        </div>
        <div>
            <span>Password</span>
            <input type="text" value={newUser.password} onChange={(e) => formFieldHandler('password', e.target.value)}/>
        </div>
        <div>
            <span>Email</span>
            <input type="text" value={newUser.email} onChange={(e) => formFieldHandler('email', e.target.value)}/>
        </div>
        <div>
            <button onClick={() => {createUser(newUser)}}>Crear</button>
        </div>
    </div>
  )
}

export default CreateUserComponent