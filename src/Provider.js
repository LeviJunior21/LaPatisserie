import { createContext } from "react";

export const Provider = createContext({
    token: "", 
    setToken: () => {}, 
    setUsuario: () => {},
    usuario: {
        name: "", 
        username: "", 
        id: "", 
        password: "", 
        cpf: "", 
        email: "", 
        phone: "", 
        address: "", 
        city: "", 
        state: "", 
        cep: "",
        cart: {
            id: "",
            items: [],
            totalCart: 0 
        }
    }})
