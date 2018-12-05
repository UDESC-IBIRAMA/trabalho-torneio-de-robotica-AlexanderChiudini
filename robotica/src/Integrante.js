import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Integrante extends Component {
    render() {

        return (
            <div>
                <CadastroIntegrantes />
            </div>
        )
    }
}

class CadastroIntegrantes extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleConsulta = this.handleConsulta.bind(this);
    }

    handleConsulta() {
        fetch('http://localhost:8080/equipes', {
            method: 'GET',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
        }).then((data => {
            let dados = data.json();
            let cidade = null;
            let id = null;
            var select = document.getElementById("equipe");
            if(select.length < 2) {
                select.length = 0;
                var option = document.createElement("option");
                option.text = "Selecione";
                option.value = "0";
                select.add(option, 0);
                dados.then(function (result) {
                    for (var i = 0; i < result.length; i++) {
                        var option = document.createElement("option");
                        cidade = result[i].nome;
                        id = result[i].id;
                        option.text = cidade;
                        option.value = id;
                        select.add(option, 0);
                    }
                })
            }
        }));
    }

    handleSalvar(){
        const aut = document.getElementById('tipo');
        const cpf = document.getElementById('cpf');
        const nasc = document.getElementById('data_nascimento');
        const nome = document.getElementById('nome');
        const nome_mae = document.getElementById('nome_mae');
        const nome_pai = document.getElementById('nome_pai');
        const rg = document.getElementById('rg');
        const descricao = document.getElementById('descricao');
        const eqp = document.getElementById('equipe');

        fetch('http://127.0.0.1:8080/integrantes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "autorizacao":aut.value,
                "cpf":cpf.value,
                "data_nascimento":nasc.value,
                "nome": nome.value,
                "nome_mae": nome_mae.value,
                "nome_pai": nome_pai.value,
                "rg":rg.value,
                "descricao": descricao,
                "id_equipe": eqp.value
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
                            <h2>Cadastro de Integrantes</h2>
                            <form>
                                <fieldset>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="nome">Nome</label>
                                            <input type="text" className="form-control" id="nome" name="nome"
                                                   maxLength="50" required/>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="data_nascimento">Data de Nascimento</label>
                                            <input type="date" className="form-control" id="data_nascimento"
                                                   name="data_nascimento" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="rg">RG</label>
                                            <input type="text" className="form-control rg" id="rg" name="rg" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" className="form-control cpf" id="cpf" name="cpf"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="nome_mae">Nome da Mãe</label>
                                            <input type="text" className="form-control" id="nome_mae" name="nome_mae"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="nome_pai">Nome do Pai</label>
                                            <input type="text" className="form-control" id="nome_pai" name="nome_pai"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="tipo">Autorização</label>
                                            <select name="tipo" id="tipo" className="campo_select" required>
                                                <option value="1">Entregue</option>
                                                <option value="2">Não Entregue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="equipe">Equipe</label>
                                            <select id="equipe" name="equipe" onClick={this.handleConsulta} className="campo_select" required>
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
    <CadastroIntegrantes/>,
    document.getElementById('root')
);

export default Integrante;