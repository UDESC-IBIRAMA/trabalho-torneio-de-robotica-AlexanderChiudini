import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sala extends Component {
    render() {

        return (
            <div>
                <CadastroSalas />
            </div>
        )
    }
}

class CadastroSalas extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleConsulta = this.handleConsulta.bind(this);
        this.handleConsultaCompeticao = this.handleConsultaCompeticao.bind(this);
    }

    handleConsulta() {
        fetch('http://localhost:8080/categorias', {
            method: 'GET',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
        }).then((data => {
            let dados = data.json();
            let nome = null;
            let id = null;
            var select = document.getElementById("categoria");
            if(select.length < 2) {
                select.length = 0;
                var option = document.createElement("option");
                option.text = "Selecione";
                option.value = "0";
                select.add(option, 0);
                dados.then(function (result) {
                    for (var i = 0; i < result.length; i++) {
                        var option = document.createElement("option");
                        nome = result[i].nome;
                        id = result[i].id;
                        option.text = nome;
                        option.value = id;
                        select.add(option, 0);
                    }
                })
            }
        }));
    }
    handleConsultaCompeticao() {
        fetch('http://localhost:8080/competicoes', {
            method: 'GET',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
        }).then((data => {
            let dados = data.json();
            let nome = null;
            let id = null;
            var select = document.getElementById("competicao");
            if(select.length < 2) {
                select.length = 0;
                var option = document.createElement("option");
                option.text = "Selecione";
                option.value = "0";
                select.add(option, 0);
                dados.then(function (result) {
                    for (var i = 0; i < result.length; i++) {
                        var option = document.createElement("option");
                        nome = result[i].nome;
                        id = result[i].id;
                        option.text = nome;
                        option.value = id;
                        select.add(option, 0);
                    }
                })
            }
        }));
    }

    handleSalvar(){
        const nome = document.getElementById('nome');
        const comp = document.getElementById('competicao');
        const cat = document.getElementById('categoria');

        fetch('http://127.0.0.1:8080/salas', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome": nome.value,
                "id_categoria": cat.value,
                "id_competicao": comp.value
            })
        })
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row" id="nav-bar">
                    <div className="col-12">
                        <div className="row justify-content-between">
                            <div className="col-5 col-sm-3 col-lg-2 total-flex">
                                <h1>ROBÓTICA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Cadastro de Salas de Avaliação</h2>
                            <form>
                                <fieldset>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="nome">Nome</label>
                                            <input type="text" className="form-control" id="nome" name="nome" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="competicao">Competição</label>
                                            <select id="competicao" name="competicao" onClick={this.handleConsultaCompeticao} className="campo_select" required>
                                                <option value="0">Selecione</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="categoria">Categoria</label>
                                            <select id="categoria" name="categoria" onClick={this.handleConsulta} className="campo_select" required>
                                                <option value="0">Selecione</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                                <button onClick={this.handleSalvar}>
                                    Salvar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <CadastroSalas/>,
    document.getElementById('root')
);

export default Sala;