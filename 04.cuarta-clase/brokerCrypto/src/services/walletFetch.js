//Este archivo va a ser el que contenga todas las funciones que harán llamadas al back.

import { wallet } from "../mocks/mockup"

//getWallet debería hacer una petición al back para traerme la wallet completa. Es decir, el objeto JSON que estará en la base de datos y nosotros acceden mediante una llamada a la API
export const getWallet = () => {
    // const res = await fetch('http://localhost:3000/wallet/:idWallet')
    // const response = await res.json()
    // return response
    const aux = { ...wallet }
    return aux
}