import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Competicao extends Component {
    render() {

        return (
            <div>
                <CadastroCompeticao />
            </div>
        )
    }
}

class CadastroCompeticao extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleConsulta = this.handleConsulta.bind(this);
    }

    handleConsulta() {
        fetch('http://localhost:8080/temporadas', {
            method: 'GET',
            headers: {
                "Accept": "Application/json",
                "Content-type": "application/json;charset=utf-8"
            },
        }).then((data => {
            let dados = data.json();
            let cidade = null;
            let id = null;
            var select = document.getElementById("temporada");
            if(select.length < 2) {
                select.length = 0;
                var option = document.createElement("option");
                option.text = "Selecione";
                option.value = "0";
                select.add(option, 0);
                dados.then(function (result) {
                    for (var i = 0; i < result.length; i++) {
                        var option = document.createElement("option");
                        cidade = result[i].cidade;
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
        const cit = document.getElementById('cidade');
        const data = document.getElementById('data');
        const uf = document.getElementById('uf');
        const resp = document.getElementById('resp');
        const temp = document.getElementById('temporada');
        const tipo = document.getElementById('tipo');

        fetch('http://localhost:8080/competicoes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "cidade": cit.value,
                "estado": uf.value,
                "responsavel": resp.value,
                "tipo": tipo.value,
                "id_temporada": temp.value,
                "data_copeticao": data.value
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
                            <h2>Cadastro de Competição</h2>
                            <form>
                                <fieldset>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="cidade">Cidade</label>
                                            <input type="text" className="form-control" id="cidade" name="cidade"
                                                   required/>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="data">Data</label>
                                            <input type="date" className="form-control" id="data" name="data" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="uf">Estado</label>
                                            <select name="uf" id="uf" className="campo_select" required>
                                                <option value="AC">AC</option>
                                                <option value="AL">AL</option>
                                                <option value="AM">AM</option>
                                                <option value="AP">AP</option>
                                                <option value="BA">BA</option>
                                                <option value="CE">CE</option>
                                                <option value="DF">DF</option>
                                                <option value="ES">ES</option>
                                                <option value="GO">GO</option>
                                                <option value="MA">MA</option>
                                                <option value="MT">MT</option>
                                                <option value="MS">MS</option>
                                                <option value="MG">MG</option>
                                                <option value="PA">PA</option>
                                                <option value="PB">PB</option>
                                                <option value="PR">PR</option>
                                                <option value="PE">PE</option>
                                                <option value="PI">PI</option>
                                                <option value="RN">RN</option>
                                                <option value="RS">RS</option>
                                                <option value="RJ">RJ</option>
                                                <option value="RO">RO</option>
                                                <option value="RR">RR</option>
                                                <option value="SC">SC</option>
                                                <option value="SP">SP</option>
                                                <option value="SE">SE</option>
                                                <option value="TO">TO</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="resp">Responsável</label>
                                            <input type="text" className="form-control" id="resp" name="resp"
                                                   maxLength="50" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="temporada">Temporada</label>
                                            <select id="temporada" name="temporada" onClick={this.handleConsulta} className="campo_select" required>
                                                <option value="0">Selecione</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="tipo">Tipo</label>
                                            <select name="tipo" id="tipo" className="campo_select" required>
                                                <option value="1">Nacional</option>
                                                <option value="2">Regional</option>
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
    <CadastroCompeticao/>,
    document.getElementById('root')
);

export default Competicao;