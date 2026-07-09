import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CriarTurma.css";

export default function CriarTurma() {
    const navigate = useNavigate();
    const [materia, setMateria] = useState("");
    const [professor, setProfessor] = useState("");
    const [limite, setLimite] = useState("");
    const [cargaHoraria, setCargaHoraria] = useState("");
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

    function criarTurma() {
        if (
            materia === "" ||
            professor === "" ||
            limite === "" ||
            cargaHoraria === ""
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        alert("Turma cadastrada com sucesso!");

        setMateria("");
        setProfessor("");
        setLimite("");
        setCargaHoraria("");
    }

    return (
        
           
        <div className="formTurma">
            
            <h1>Criar Turma</h1>

            <input
                placeholder="Matéria"
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
            />

            <input
                placeholder="Professor"
                value={professor}
                onChange={(e) => setProfessor(e.target.value)}
            />

            <input
                type="number"
                placeholder="Limite de alunos"
                value={limite}
                onChange={(e) => setLimite(e.target.value)}
            />

            <input
                placeholder="Carga Horária (ex: 40h)"
                value={cargaHoraria}
                onChange={(e) => setCargaHoraria(e.target.value)}
            />

            <button
                className="botao"
                onClick={criarTurma}
            >
                Criar Turma
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
