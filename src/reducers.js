import {combineReducers} from 'redux'
import actions from './actions/actions'
import constants from './actions/actionTypes'

export const planimetry = (state={}, action) => {
    switch(action.type){
        case constants.UPDATE_PLANIMETRY_FORM:
            console.log(state);
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.field.name]: action.field.value
                }
            }
        case constants.CLEAR_FORM:
            return {
                ...state,
                form: {
                    station: '',
                    target_point: '',
                    h_distance: '',
                    v_distance: '',
                    hour_angle: '',
                    zenital_angle: '',
                    azimuth: '',
                }
            }
        case constants.ADD_FORM_TO_TABLE:
            return {
                ...state,
                table: state.table.concat(state.form)
            }
        default:
            return state;
    }
}

export default combineReducers({
    planimetry
});