import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { frequencias } from "../../data/banco";
import "./Frequencia.css";

export default function Frequencia(){
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });

    return(

        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div className="frequenciaAluno">

                <h1>Frequência</h1>

                <ul className="listaFrequencia">
                    <li className="cabecalhoListaFrequencia">
                        <span>Matéria</span>
                        <span>Frequência</span>
                    </li>

                    {frequencias.map((frequencia, index) => {
                        
                        const freqValor = parseFloat(frequencia.frequencia);

                        const freqBaixa = freqValor < 75;

                        return (
                            <li className="itemFrequencia" key={index}>
  
                                <span className="materiaNome">{frequencia.materia}</span>
                                
                                <span className={`porcentagemBadge ${freqBaixa ? "freq-baixa" : ""}`}>
                                    {frequencia.frequencia}
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
