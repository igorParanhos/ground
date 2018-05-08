import {UPDATE_PLANIMETRY_FORM} from './actionTypes'

export const updatePlanimetryForm = (data) => {
    return {
        type: UPDATE_PLANIMETRY_FORM,
        field: data
    }
}

export default {
    updatePlanimetryForm: updatePlanimetryForm 
}