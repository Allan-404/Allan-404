import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { turmas } from "../../data/banco";
import "./Turmas.css";

export default function Turmas() {
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });

    return (

        <div className="turmasAluno">

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
                onClick={() => navigate("/aluno")}
            >
                Voltar
            </button>

        </div>
    );
}
