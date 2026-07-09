import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notas } from "../../data/banco";
import "./Notas.css";

export default function Notas(){
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });

    return(

        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div className="notasAluno">

                <h1>Notas</h1>

                <ul className="listaNotas">
                    <li className="cabecalhoNotas">
                        <span>Matéria</span>
                        <span>Nota</span>
                    </li>

                    {notas.map((nota, index) => {
                        const notaValor = parseFloat(nota.nota);
                        const notaBaixa = notaValor < 7;

                        return (
                            <li className="itemNotas" key={index}>
                                <span className="materiaNome">{nota.materia}</span>
                                
                                <span className={`notaBadge ${notaBaixa ? "nota-baixa" : ""}`}>
                                    {nota.nota}
                                </span>
                            </li>
                        );
                    })}
                </ul>
                
                <button 
                    type="button" 
                    className="botao-voltar" 
                    onClick={() => navigate("/aluno")}
                >
                    Voltar
                </button>
            </div>
        </div>
    )
}
