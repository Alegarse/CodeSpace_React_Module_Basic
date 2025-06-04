import { listaInvitados } from "../mock/invitadosMock"

export const getInvitados = () => {
    const aux = [...listaInvitados]
    return aux
}