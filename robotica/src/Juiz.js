import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Juiz extends Component {
    render() {

        return (
            <div>
                <CadastroJuizes />
            </div>
        )
    }
}

class CadastroJuizes extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleConsulta = this.handleConsulta.bind(this);
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

    handleSalvar(){
        const cpf = document.getElementById('cpf');
        const nasc = document.getElementById('data_nascimento');
        const nome = document.getElementById('nome');
        const rg = document.getElementById('rg');
        const cate = document.getElementById('categoria');

        fetch('http://127.0.0.1:8080/juizes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "cpf": cpf.value,
                "data_nascimento" : nasc.value,
                "nome": nome.value,
                "rg":rg.value,
                "id_categoria": cate.value
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
                            <h2>Cadastro de Juízes</h2>
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
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" className="form-control cpf" id="cpf" name="cpf"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="rg">RG</label>
                                            <input type="text" className="form-control rg" id="rg" name="rg" required/>
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
    <CadastroJuizes/>,
    document.getElementById('root')
);

export default Juiz;