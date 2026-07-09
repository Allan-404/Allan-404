import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LancarFrequencia.css";

export default function LancarFrequencia(){
    const navigate = useNavigate();

    const [aluno,setAluno] = useState("");

    const [materia,setMateria] = useState("");

    const [frequencia,setFrequencia] = useState("");

    function salvar(){

        if(
            aluno==="" ||
            materia==="" ||
            frequencia===""){

            alert("Preencha todos os campos.");

            return;

        }

        alert("Frequência registrada.");

        setAluno("");

        setMateria("");

        setFrequencia("");

    }

    return(

        <div className="formFrequencia">

            <h1>Lançar Frequência</h1>

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
                min = "0"
                max = "100"
                placeholder="Frequência (%)"
                value={frequencia}
                onChange={(e)=>setFrequencia(e.target.value)}
            />

            <button
                className="botao"
                onClick={salvar}
            >
                Registrar
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