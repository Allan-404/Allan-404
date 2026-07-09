import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LancarNotas.css";

export default function LancarNotas() {
    const navigate = useNavigate();
    const [aluno, setAluno] = useState("");
    const [materia, setMateria] = useState("");
    const [nota, setNota] = useState("");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });

    function salvarNota(){

        if(aluno === "" || materia === "" || nota === ""){

            alert("Preencha todos os campos.");

            return;

        }

        alert("Nota lançada com sucesso!");

        setAluno("");
        setMateria("");
        setNota("");

    }

    return(

        <div className="formNotas">

                <h1>Lançar Nota</h1>

            <input
                placeholder="Aluno"
                value={aluno}
                onChange={(e)=>setAluno(e.target.value)}
            />

            <input
                placeholder="Matéria"
                value={materia}
                onChange={(e)=>setMateria(e.target.value)}
            />

            <input
                type="number"
                placeholder="Nota"
                value={nota}
                onChange={(e)=>setNota(e.target.value)}
            />

            <button
                className="botao"
                onClick={salvarNota}
            >
                Salvar
            </button>

            <button 
                type="button" 
                className="botao-voltar" 
                onClick={() => navigate("/professor")}
            >
                Voltar
            </button>

        </div>
    )
}