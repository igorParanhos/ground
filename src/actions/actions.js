import constants from './actionTypes'
import store from '../store'

export const updatePlanimetryForm = (data) => {
    return {
        type: constants.UPDATE_PLANIMETRY_FORM,
        field: data
    }
}

export const clearForm = () => {
    return {
        type: constants.CLEAR_FORM,
    }
}

export const addFormToTable = () => {
    return {
        type: constants.ADD_FORM_TO_TABLE,
    }
}

export const calculateCorrection = () => {
    let table = store.getState().planimetry.table;

    return {
        type: constants.CALCULATE_CORRETION
    }
}

export default {
    updatePlanimetryForm,
    clearForm,
    addFormToTable,
}