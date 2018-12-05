import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Alternativa from "./Alternativa";
import Arena from "./Arena";
import Categoria from "./Categoria";
import Competicao from "./Competicao";
import Criterios from "./Criterios";
import Equipe from "./Equipe";
import Integrante from "./Integrante";
import Juiz from "./Juiz";
import Sala from "./Sala";
import Temporada from "./Temporada";
import Home from "./Home";

class Principal extends Component {
    render(){
        return (
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/alternativas' component={Alternativa} />
                <Route path='/arenas' component={Arena} />
                <Route path='/categorias' component={Categoria} />
                <Route path='/competicoes' component={Competicao} />
                <Route path='/criterios' component={Criterios} />
                <Route path='/equipes' component={Equipe} />
                <Route path='/integrantes' component={Integrante} />
                <Route path='/juizes' component={Juiz} />
                <Route path='/salas' component={Sala} />
                <Route path='/temporadas' component={Temporada} />
            </Switch>
        )
    }
}

export default Principal;