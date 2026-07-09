import "./Login.css";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function Login(){

    const navigate = useNavigate();

    const { login } = useAuth();

    const [matricula,setMatricula] = useState("");

    const [senha,setSenha] = useState("");

    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('tema') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('tema', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('tema', 'light');
        }
    }, [darkMode]);

    const alternarTema = () => setDarkMode(!darkMode);

    function entrar(){

        const sucesso = login(matricula,senha);

        if(!sucesso){

            alert("Matrícula ou senha inválida.");

            return;

        }

        if(matricula==="1000"){

            navigate("/admin");

        }

        else if(matricula==="2000"){

            navigate("/professor");

        }

        else{

            navigate("/aluno");

        }

    }

    return(

  
    

        <div className="login">
            <button className="botao-tema" onClick={alternarTema} aria-label="Alternar tema">
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>

                <div className="caixaLogin">

                    <h1>Sistema Escolar</h1>

                
                    <input

                        placeholder="Matrícula"

                        value={matricula}

                        onChange={(e)=>setMatricula(e.target.value)}

                    />

                    <input

                        type="password"

                        placeholder="Senha"

                        value={senha}

                        onChange={(e)=>setSenha(e.target.value)}

                    />

                    <button onClick={entrar}>

                        Entrar

                    </button>

                </div>

        </div>

    )

}