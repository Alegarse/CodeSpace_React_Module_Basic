
let listaInvitados = [
    {
        "id": 1,
        "nombreInvitado": "David Bisbal",
        "fechaHormiguero": "2006-09-24",
        "fechaRevuelta": "N/A"
    },
    {
        "id": 2,
        "nombreInvitado": "Santiago Segura",
        "fechaHormiguero": "2025-02-10",
        "fechaRevuelta": "2018-05-11"
    },
    {
        "id": 3,
        "nombreInvitado": "Eva González",
        "fechaHormiguero": "2025-02-11",
        "fechaRevuelta": "2018-05-11"
    },
    {
        "id": 4,
        "nombreInvitado": "Cristina Pedroche",
        "fechaHormiguero": "2025-02-12",
        "fechaRevuelta": "2018-05-18"
    },
    {
        "id": 5,
        "nombreInvitado": "Jesulín de Ubrique",
        "fechaHormiguero": "2025-02-13",
        "fechaRevuelta": "2018-05-25"
    },
    {
        "id": 6,
        "nombreInvitado": "Pepe Rodríguez",
        "fechaHormiguero": "2025-02-14",
        "fechaRevuelta": "2018-06-01"
    },
    {
        "id": 7,
        "nombreInvitado": "Mariló Montero",
        "fechaHormiguero": "2025-02-15",
        "fechaRevuelta": "2018-06-08"
    },
    {
        "id": 8,
        "nombreInvitado": "Lolita Flores",
        "fechaHormiguero": "2025-02-16",
        "fechaRevuelta": "2018-06-15"
    },
    {
        "id": 9,
        "nombreInvitado": "José Mota",
        "fechaHormiguero": "2025-02-17",
        "fechaRevuelta": "2018-06-22"
    },
    {
        "id": 10,
        "nombreInvitado": "Amaia y Alfred",
        "fechaHormiguero": "2025-02-18",
        "fechaRevuelta": "2018-06-29"
    }
]

export const getInvitados = () => {
    const aux = [...listaInvitados]
    return aux
}

export const deleteInvitadoFetch = (idInvitado) => {
    const aux = listaInvitados.filter(invitado => invitado.id !== idInvitado)
    listaInvitados = [...aux]
}