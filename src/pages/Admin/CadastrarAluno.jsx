import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./CadastrarAluno.css";

export default function CadastrarAluno() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });
    function cadastrar() {

        if (
            nome === "" ||
            matricula === "" ||
            senha === ""
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        alert("Aluno cadastrado com sucesso!");

        setNome("");
        setMatricula("");
        setSenha("");

    }

return (
        
    <div className="formAluno">

        <h1>Cadastrar Aluno</h1>

            <input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                placeholder="Matrícula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
            />

            <input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <button
                className="botao"
                onClick={cadastrar}
            >
            Cadastrar
            </button>

            <button 
                type="button" 
                className="botao-voltar" 
                onClick={() => navigate("/admin")}
            >
            Voltar
            </button>
            
            </div>
    );
}