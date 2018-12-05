import ReactDOM from "react-dom";
import React, {Component} from "react";

class Home extends Component {
    render() {

        return (
            <div>
                <Menu />
            </div>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
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
                <div className="row">
                    ALEXANDER FELIPE CHIUDINI RISTOW
                </div><div className="row">
                    APARÍCIO DA SILVA
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Menu/>,
    document.getElementById('root')
);

export default Home;