import { LOADED } from '../actions/constants'
import createReducer from './createReducer'

const initialState = {
    loaded: false
}

module.exports = createReducer(initialState, {
    [LOADED]: (state, action) => {
        if (!action.pending && !action.error) {
            return Object.assign({}, state, {
                loaded: true
            })
        }
        return state
    }
})
