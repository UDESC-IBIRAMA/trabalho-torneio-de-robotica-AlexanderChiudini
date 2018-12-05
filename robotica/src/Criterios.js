import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Criterios extends Component {
    render() {

        return (
            <div>
                <CadastroCriterios />
            </div>
        )
    }
}

class CadastroCriterios extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleConsulta = this.handleConsulta;
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
            var option = document.createElement("option");
            if(select.length < 2) {
                select.length = 0;
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
        const descricao = document.getElementById('descri');
        const cate = document.getElementById('categoria');

        fetch('http://localhost:8080/criterios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "descricao": descricao.value,
                "nome": nome.value,
                "id_categoria":cate.value
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
                            <h2>Cadastro de Critérios/Missões</h2>
                            <form>
                                <fieldset>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="nome">Nome</label>
                                            <input type="text" className="form-control" id="nome" name="nome"
                                                   maxLength="50" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="descri">Descrição</label>
                                            <input type="text" className="form-control" id="descri" name="descri"
                                                   required/>
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
    <CadastroCriterios/>,
    document.getElementById('root')
);

export default Criterios;