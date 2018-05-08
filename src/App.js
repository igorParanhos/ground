import React, { Component } from 'react';
import {Provider} from 'react-redux'

import logo from './logo.svg';
import store from './store'
import './App.css';

import Planimetry from './components/planimetry/Planimetry'
import Table from './components/planimetry/Table'

class App extends Component {

    constructor(props){
        super(props);

        this.state = {selectedMenu: 'form'}
        // this.selectMenu = this.selectMenu.bind(this);
    }

    selectMenu(menu_name){
        this.setState({selectedMenu: menu_name});
    }

    render() {
        return (
            <Provider store={store}>
                <div className="main">

                    <div className="menu">
                        <button className={"form-btn " + (this.state.selectedMenu == 'form' && 'selected')} onClick={() => this.selectMenu('form')}>Formulário</button>
                        <button className={"table-btn " + (this.state.selectedMenu == 'table' && 'selected')} onClick={() => this.selectMenu('table')}>Tabela</button>
                    </div>

                    <header>
                        <h1 className="title">
                            GROUND!
                        </h1>
                    </header>
                    
                    {
                        this.state.selectedMenu == 'form' &&
                        <Planimetry/>
                    }
                    {
                        this.state.selectedMenu == 'table' &&
                        <Table/>
                    }

                </div>
            </Provider>
        );
    }
}

export default App;
