import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'

const initialState = {
    planimetry: {
        form: {
            station: '',
            point_type: 're',
            target_point: '',
            h_distance: '',
            v_distance: '',
            hour_angle: '',
            zenital_angle: '',
            azimuth: '',
        },
        table: []
    }
}


const store = createStore(
    reducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;