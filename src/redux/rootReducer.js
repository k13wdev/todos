import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  todoReducer,
  appReducer 
})

export default rootReducer