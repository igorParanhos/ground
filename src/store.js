import createStore from 'react-redux'
import planimetryReducer from './reducers'

const initialState = {}

createStore(initialState, planimetryReducer);