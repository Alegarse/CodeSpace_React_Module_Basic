import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router"

const users = [
  {
    id: '9f73c172-5e62-4dc0-9ea1-5b58bdf48e37',
    name: 'Circuit de Monaco',
    km: '3.337 km',
    pais: 'Mónaco'
  },
  {
    id: 'c5f42e30-1b74-4a6f-b9a1-9cb5f6ab648a',
    name: 'Silverstone Circuit',
    km: '5.891 km',
    pais: 'Reino Unido'
  },
  {
    id: 'b7e8b130-3c32-4d10-a9d9-86cc87dcf0fa',
    name: 'Suzuka International Racing Course',
    km: '5.807 km',
    pais: 'Japón'
  },
  {
    id: 'f1c9e0ef-8cd4-49d6-b205-9a54b4263792',
    name: 'Circuit de Spa-Francorchamps',
    km: '7.004 km',
    pais: 'Bélgica'
  },
  {
    id: '0af8393c-2e95-4be4-b3cd-79c3a765d9a8',
    name: 'Monza (Autodromo Nazionale)',
    km: '5.793 km',
    pais: 'Italia'
  },
  {
    id: 'fd294c2a-588e-4e60-9812-c93ef4e1abcf',
    name: 'Marina Bay Street Circuit',
    km: '5.063 km',
    pais: 'Singapur'
  },
  {
    id: 'ae9f1c79-4ab4-4f08-bbb9-327014e7b233',
    name: 'Circuit of the Americas',
    km: '5.513 km',
    pais: 'Estados Unidos'
  },
  {
    id: 'd79c8d85-7e58-41b3-84c1-81315d313d89',
    name: 'Interlagos (Autódromo José Carlos Pace)',
    km: '4.309 km',
    pais: 'Brasil'
  },
  {
    id: '6843b08a-57f0-4d85-952f-b31ac434ac9a',
    name: 'Yas Marina Circuit',
    km: '5.281 km',
    pais: 'Emiratos Árabes Unidos'
  },
  {
    id: '3a92dcba-438b-496e-911e-79c0c18e2b67',
    name: 'Red Bull Ring',
    km: '4.318 km',
    pais: 'Austria'
  }
]

export const getUsers = () => {
    return [...users]
}

export const getUserById = (idUser) => {
    const user = users.find(u => u.id === idUser)
    return user
}