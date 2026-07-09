import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardAluno.css";

export default function DashboardAluno(){
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

    return(

         <div className="containerAluno">

            <button className="botao-tema" onClick={alternarTema} aria-label="Alternar tema">
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>

            <h1 className="tituloAluno">Painel do Aluno</h1>

            <div className="menuAluno">
                
                <div className="cardAluno">

                    <h2>Turmas</h2>

                    <Link to="/aluno/turmas">

                        <button className="botaoAluno">
                            Minhas Turmas
                        </button>
                        
                    </Link>
                </div>

                <div className="cardAluno">

                    <h2>Boletim</h2>

                    <Link to="/aluno/notas">

                        <button className="botaoAluno">
                            Ver Notas
                        </button>

                    </Link>
                </div>

                <div className="cardAluno">

                    <h2>Frequência</h2>

                    <Link to="/aluno/frequencia">

                        <button className="botaoAluno">
                            Ver Frequência
                        </button>

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

    )

}