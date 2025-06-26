const users = [
    {
        id: 1,
        username: 'Veronika',
        name: 'Veronika 1234'
    },
    {
        id: 2,
        username: 'Marina',
        name: 'Marina 1234'
    },
    {
        id: 3,
        username: 'Alejandro',
        name: 'Alejandro 1234'
    },
    {
        id: 4,
        username: 'Cristian',
        name: 'Cristian 1234'
    },
]


export const getUsers = () => {
    return [...users]
}

export const getUserById = (idUser) => {
    const user = users.find(u => u.id == idUser)
    return user
}