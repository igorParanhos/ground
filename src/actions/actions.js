import constants from './actionTypes'

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

export default {
    updatePlanimetryForm,
    clearForm,
    addFormToTable,
}