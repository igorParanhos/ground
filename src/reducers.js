import actions from './actions/actions'
import constants from './actions/actionTypes'

export const planimetryReducer = (state, action) => {
    switch(action.type){
        case actions.UPDATE_PLANIMETRY_FORM:
            return {
                ...state,
                [action.field.name]: action.field.value
            }
    }
}

export default planimetryReducer;