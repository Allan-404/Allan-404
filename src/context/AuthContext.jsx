import { createContext, useContext, useState } from "react";
import { usuarios } from "../data/banco";

const AuthContext = createContext();

export function AuthProvider({children}){

    const [usuario,setUsuario] = useState(null);

    function login(matricula,senha){

        const encontrado = usuarios.find(

            usuario =>
                usuario.matricula === matricula &&
                usuario.senha === senha

        );

        if(encontrado){

            setUsuario(encontrado);

            return true;

        }

        return false;

    }

    function logout(){

        setUsuario(null);

    }

    return(

        <AuthContext.Provider
            value={{
                usuario,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    )

}

export function useAuth(){

    return useContext(AuthContext);

}