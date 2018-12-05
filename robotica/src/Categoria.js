import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Categoria extends Component {
    render() {

        return (
            <div>
                <CadastroCategoria />
            </div>
        )
    }
}

class CadastroCategoria extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById('nome');
        const descricao = document.getElementById('descricao');

        fetch('http://127.0.0.1:8080/categorias', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "descricao": descricao.value,
                "nome": nome.value
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
                            <h2>Cadastro de Categoria</h2>
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
                                        <div className="form-group col-md-8">
                                            <label htmlFor="descricao">Descrição</label>
                                            <input type="text" className="form-control" id="descricao" name="descricao"
                                                   required/>
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
    <CadastroCategoria/>,
    document.getElementById('root')
);

export default Categoria;