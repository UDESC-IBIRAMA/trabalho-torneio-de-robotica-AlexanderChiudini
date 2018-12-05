import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/alternativas'>Cadastro de Alternativas</Link></li>
                        <li><Link to='/arenas'>Cadastro de Arenas</Link></li>
                        <li><Link to='/categorias'>Cadastro de Categorias</Link></li>
                        <li><Link to='/competicoes'>Cadastro de Competicões</Link></li>
                        <li><Link to='/criterios'>Cadastro de Critérios</Link></li>
                        <li><Link to='/equipes'>Cadastro de Equipe</Link></li>
                        <li><Link to='/integrantes'>Cadastro de Integrante</Link></li>
                        <li><Link to='/juizes'>Cadastro de Juizes</Link></li>
                        <li><Link to='/salas'>Cadastro de Salas</Link></li>
                        <li><Link to='/temporadas'>Cadastro de Temporadas</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;