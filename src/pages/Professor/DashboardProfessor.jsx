import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardProfessor.css"; // Vamos criar este arquivo CSS a seguir

export default function DashboardProfessor() {
    const navigate = useNavigate();

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

    function fazerLogout() {
        navigate("/");
    }

    return (

        <div className="containerProfessor">

            <button className="botao-tema" onClick={alternarTema} aria-label="Alternar tema">
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>

            <h1 className="tituloProfessor">Painel do Professor</h1>

            <div className="menuProfessor">
                
                <div className="cardProfessor">
                    <h2>Minhas Turmas</h2>
                    <Link to="/professor/turmas">
                        <button className="botaoProfessor">Ver Turmas</button>
                    </Link>
                </div>

                <div className="cardProfessor">
                    <h2>Boletim Escolar</h2>
                    <Link to="/professor/notas">
                        <button className="botaoProfessor">Lançar Notas</button>
                    </Link>
                </div>

                <div className="cardProfessor">
                    <h2>Diário de Classe</h2>
                    <Link to="/professor/frequencia">
                        <button className="botaoProfessor">Registrar Frequência</button>
                    </Link>
                </div>

                <button 
                    type="button" 
                    className="botaologout" 
                    onClick={fazerLogout}
                >
                    LOGOUT
                </button>

            </div>
        </div>
    );
}
