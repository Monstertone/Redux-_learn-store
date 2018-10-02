import { combineReducers } from 'redux'
import CameraReducer from './CameraReducer'


const rootReducer = combineReducers({
    cameras: CameraReducer
});

export default rootReducer