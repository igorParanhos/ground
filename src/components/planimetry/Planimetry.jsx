import React, {Component} from 'react'

import {updatePlanimetryForm} from '../../actions/actions'

class Planimetry extends Component{

    constructor(props){
        super(props);

        this.point_types = [
            {name: 'Ré', value: 're'},
            {name: 'Vante', value: 'vante'},
            {name: 'Irradiado', value: 'irradiado'},
        ]

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const field = {
            name: e.target.name,
            value: e.target.value
        };
        updatePlanimetryForm();
    }

    render(){
        return (
            <div class="form">
                <header>
                    <h1 class="title">PLANIMETRIA</h1>
                </header>

                <hr/>

                <div class="field-wrapper">
                    <input type="text" class="input" placeholder="ESTAÇÃO"/><br/>
                </div>

                <div class="field-wrapper">
                    <select class="input" onChange={this.handleChange}>
                        {
                            this.point_types.map(
                                (point) => <option value={point.value}>{point.name}</option>
                            )
                        }
                    </select>
                </div>
                
                <div class="field-wrapper">
                    <input type="text" class="input" placeholder="X"/><br/>
                </div>
                <div class="field-wrapper">
                    <input type="text" class="input" placeholder="DISTÂNCIA VERTICAL"/><br/>
                </div>
                <div class="field-wrapper">
                    <input type="text" class="input" placeholder="ÂNGULO HORÁRIO"/><br/>
                </div>
                <div class="field-wrapper">
                    <input type="text" class="input" placeholder="ÂNGULO ZENITAL"/><br/>
                </div>
                <div class="field-wrapper">
                        <input type="text" class="input" placeholder="AZIMUTE"/><br/>
                </div>

                <hr/>

                <button class="btn btn-save center">SALVAR</button>
            </div>
        )
    }
}

export default Planimetry