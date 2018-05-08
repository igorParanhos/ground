import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updatePlanimetryForm, clearForm, addFormToTable} from '../../actions/actions'

class Planimetry extends Component{

    constructor(props){
        super(props);

        this.point_types = [
            {name: 'Ré', value: 're'},
            {name: 'Vante', value: 'vante'},
            {name: 'Irradiado', value: 'irradiado'},
        ]

        this.handleChange = this.handleChange.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    handleChange(e){
        const field = {
            name: e.target.name,
            value: e.target.value
        };
        this.props.updatePlanimetryForm(field);
    }

    saveForm(){
        this.props.addFormToTable();
        this.props.clearForm();
    }

    render(){
        return (
            <div className="form">
                <header>
                    <h1 className="title">PLANIMETRIA</h1>
                </header>

                <hr/>

                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="station" placeholder="ESTAÇÃO" value={this.props.planimetry_form.station}/><br/>
                </div>

                <div className="field-wrapper">
                    <select className="input" name="point_type" onChange={this.handleChange} value={this.props.planimetry_form.point_type}>
                        {
                            this.point_types.map(
                                (point, i) => <option value={point.value} key={i}>{point.name}</option>
                            )
                        }
                    </select>
                </div>
                
                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="target_point" value={this.props.planimetry_form.target_point} placeholder="PONTO VISADO"/><br/>
                </div>
                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="h_distance" value={this.props.planimetry_form.h_distance} placeholder="DISTÂNCIA HORIZONTAL"/><br/>
                </div>
                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="v_distance" value={this.props.planimetry_form.v_distance} placeholder="DISTÂNCIA VERTICAL"/><br/>
                </div>
                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="hour_angle" value={this.props.planimetry_form.hour_angle} placeholder="ÂNGULO HORÁRIO"/><br/>
                </div>
                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="zenital_angle" value={this.props.planimetry_form.zenital_angle} placeholder="ÂNGULO ZENITAL"/><br/>
                </div>
                <div className="field-wrapper">
                    <input type="text" className="input" onChange={this.handleChange} name="azimuth" value={this.props.planimetry_form.azimuth} placeholder="AZIMUTE"/><br/>
                </div>

                <hr/>

                <div className="field-wrapper">
                    <button className="btn btn-save center" onClick={this.saveForm}>SALVAR</button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({planimetry_form: state.planimetry['form']}),
    {   
        updatePlanimetryForm, 
        clearForm, 
        addFormToTable
    }
)(Planimetry)