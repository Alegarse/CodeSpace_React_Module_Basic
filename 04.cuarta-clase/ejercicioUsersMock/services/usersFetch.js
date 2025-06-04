import { users } from "../mock/usersMock"

export const getUsers = () => {
    const aux = [...users]
    return aux
}