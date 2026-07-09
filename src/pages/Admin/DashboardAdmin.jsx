import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardAdmin.css";

export default function DashboardAdmin() {
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
        <div className="containerAdmin">
            <button className="botao-tema" onClick={alternarTema} aria-label="Alternar tema">
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>

            <h1 className="tituloAdmin">Painel do Administrador</h1>

            <div className="menuAdmin">
                
                <div className="cardAdmin">
                    <h2>Turmas</h2>
                    <Link to="/admin/turmas">
                        <button className="botaoAdmin">Criar Turma</button>
                    </Link>
                </div>

                <div className="cardAdmin">
                    <h2>Alunos</h2>
                    <Link to="/admin/alunos">
                        <button className="botaoAdmin">Cadastrar Aluno</button>
                    </Link>
                </div>

                <div className="cardAdmin">
                    <h2>Professores</h2>
                    <Link to="/admin/professores">
                        <button className="botaoAdmin">Cadastrar Professor</button>
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
