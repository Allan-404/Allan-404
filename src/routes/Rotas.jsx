import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";

import DashboardAdmin from "../pages/Admin/DashboardAdmin";
import DashboardProfessor from "../pages/Professor/DashboardProfessor";
import DashboardAluno from "../pages/Aluno/DashboardAluno";
import CriarTurma from "../pages/Admin/CriarTurma";
import CadastrarAluno from "../pages/Admin/CadastrarAluno";
import CadastrarProfessor from "../pages/Admin/CadastrarProfessor";
import TurmasProfessor from "../pages/Professor/TurmasProfessor";
import LancarNotas from "../pages/Professor/LancarNotas";
import LancarFrequencia from "../pages/Professor/LancarFrequencia";
import Turmas from "../pages/Aluno/Turmas";
import Notas from "../pages/Aluno/Notas";
import Frequencia from "../pages/Aluno/Frequencia";

function Rotas(){

    return(

        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/admin" element={<DashboardAdmin />} />

            <Route path="/professor" element={<DashboardProfessor />} />

            <Route path="/aluno" element={<DashboardAluno />} />

            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/admin/turmas" element={<CriarTurma />} />

            <Route path="/admin/alunos" element={<CadastrarAluno />} />

            <Route path="/admin/professores" element={<CadastrarProfessor />} />

            <Route path="/professor/turmas" element={<TurmasProfessor />} />

            <Route path="/professor/notas" element={<LancarNotas />} />

            <Route path="/professor/frequencia" element={<LancarFrequencia />} />

            <Route path="/aluno/turmas" element={<Turmas />} />

            <Route path="/aluno/notas" element={<Notas />} />

            <Route path="/aluno/frequencia" element={<Frequencia />} />

        </Routes>

    )

}

export default Rotas;