import { combineReducers } from 'redux'
import loader from './loader'
import blog from './blog'

const rootReducer = combineReducers({
    loader,
    blog
})

export default rootReducer
