import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from '../services/usersFetch';

const UsersListComponent = () => {
  const [usuarios, setUsuarios] = useState();

    useEffect(() => {
      const auxUsers = getUsers();
      setUsuarios(auxUsers);
    }, []);
  
    return (
      <div>
        {!usuarios ? (
          <div>Cargando...</div>
        ) : (
          <div>
            <h2>Listado de usuarios</h2>
            {usuarios.map((usuario, idx) => (
              <div key={idx}>
                <p>Id: {usuario.id}</p>
                <p>Nombre: {usuario.name}</p>
                <p>Apellido: {usuario.username}</p>
                <p>Email: {usuario.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default UsersListComponent