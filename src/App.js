import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Planimetry from './components/planimetry/Planimetry'

class App extends Component {
  render() {
    return (
        <div class="main">

            <header>
                <h1 class="title">
                    GROUND!
                </h1>
            </header>
            <Planimetry/>
        </div>
    );
  }
}

export default App;
