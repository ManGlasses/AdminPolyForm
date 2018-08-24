import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import todoReducer from './todoReducer'
import adminPolyFormReducer from './adminPolyFormReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    adminPolyForm: adminPolyFormReducer
})

export default rootReducer
