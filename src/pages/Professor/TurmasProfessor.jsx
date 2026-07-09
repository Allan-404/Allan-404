import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { turmas } from "../../data/banco";
import "./TurmasProfessor.css";


export default function TurmasProfessor() {
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });

    return (

        <div className="listaTurmas">
            
            <h1 style={{ textTransform: 'none', marginBottom: '20px' }}>Minhas Turmas</h1>

            {turmas.map((turma) => (
                <div className="turma" key={turma.id}>
                    <h2>{turma.nome}</h2>
                    <p style={{ marginTop: '8px' }}><strong>Matéria:</strong> {turma.materia}</p>
                    <p style={{ marginTop: '4px' }}><strong>Professor:</strong> {turma.professor}</p>
                </div>
            ))}

            <button 
                type="button" 
                className="botao-voltar" 
                onClick={() => navigate("/professor")}
            >
                Voltar
            </button>
        </div>
    );

}