import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastrarProfessor.css";

export default function CadastrarProfessor() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");

    function cadastrar() {

        if (
            nome === "" ||
            matricula === "" ||
            senha === ""
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        alert("Professor cadastrado com sucesso!");

        setNome("");
        setMatricula("");
        setSenha("");

    }

    return (
        <div className="formProfessor">

            <h1>Cadastrar Professor</h1>

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

            <button onClick={cadastrar}>
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