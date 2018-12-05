import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Principal from './Main';

class App extends Component {
    state = {
        lista: null
    };

    render() {
        const { lista } = this.state
        return (
            <div>
                <Header />
                <Principal />
            </div>
        )
    }
}
export default App;