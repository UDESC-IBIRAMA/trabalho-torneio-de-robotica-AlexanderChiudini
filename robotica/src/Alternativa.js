import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Alternativa extends Component {
    render() {
        return (
            <div>
                <CadastroAlternativa />
            </div>
        )
    }
}

class CadastroAlternativa extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleConsulta = this.handleConsulta.bind(this);
    }

    handleConsulta() {
        fetch('http://localhost:8080/criterios', {
            method: 'GET',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
        }).then((data => {
            let dados = data.json();
            let nome = null;
            let id = null;
            var select = document.getElementById("criterio");
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
        const val = document.getElementById('valor');
        const crit = document.getElementById('criterio');

        fetch('http://localhost:8080/alternativas', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "valor": val.value,
                "id_criterio": crit.value
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
                            <h2>Cadastro de Alternativa</h2>
                            <form>
                                <fieldset>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="valor">Valor</label>
                                            <input type="text" className="form-control number" id="valor" name="valor"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="criterio">Critério</label>
                                            <select id="criterio" name="criterio" onClick={this.handleConsulta} className="campo_select" required>
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
    <CadastroAlternativa/>,
    document.getElementById('root')
);

export default Alternativa;