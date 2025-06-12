import React, { useState } from 'react'
import CreateUserComponent from '../components/CreateUserComponent'
import InfoUserComponent from '../components/InfoUserComponent'

const HomePage = () => {

    const [userCreated, setUserCreated] = useState()

    const createUser = (user) => {
        //Creo esta función porque a lo mejor, me apetece(necesito básicamente), poder checkear los campos
        
        setUserCreated(user)
    }

    const modifyUser = (user) => {
        setUserCreated(user)
    }

  return (
    <div>
        {
            !userCreated && (<CreateUserComponent createUser={createUser}/>)
        }

        <hr />
        {
            !userCreated ? (
                <div>
                    <h3>No hay usuario registrado</h3>
                </div>
            ) : (
                <InfoUserComponent user={userCreated} modifyUser={modifyUser}/>
            )
        }
    </div>
  )
}

export default HomePage