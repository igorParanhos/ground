import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updatePlanimetryForm, clearForm, addFormToTable} from '../../actions/actions'

class Table extends Component{

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

                <table className="table">
                    <thead>
                        <tr>
                            <td>Estação</td>
                            <td>Tipo</td>
                            <td>Ponto Visado</td>
                            <td>Distância Horizontal</td>
                            <td>Distância Vertical</td>
                            <td>Ângulo Horário</td>
                            <td>Ângulo Zenital</td>
                            <td>Azimute</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.planimetry_table.map(
                                (item, i) => (
                                    <tr key={i}>
                                        <td>{item.station}</td>
                                        <td>{item.point_type}</td>
                                        <td>{item.target_point}</td>
                                        <td>{item.h_distance}</td>
                                        <td>{item.v_distance}</td>
                                        <td>{item.hour_angle}</td>
                                        <td>{item.zenital_angle}</td>
                                        <td>{item.azimuth}</td>
                                    </tr>
                                )
                            )
                        }  
                    </tbody>
                    
                </table>  

                <hr/>

            </div>
        )
    }
}

export default connect(
    state => ({planimetry_table: state.planimetry['table']}),
    {   
        updatePlanimetryForm
    }
)(Table)