import todoReducer from './todoRedux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todoReducer
});

export default rootReducer;