import { GET_POSTS, SET_CURRENT_POST } from '../actions/constants'
import createReducer from './createReducer'

const initialState = {
    posts: [],
    current: []
}

module.exports = createReducer(initialState, {
    [GET_POSTS]: (state, action) => {
        if (!action.pending && !action.error) {
            return Object.assign({}, ...state, {
                posts: action.payload
            })
        }
        return state
    },

    [SET_CURRENT_POST]: (state, action) => {
        if (!action.pending && !action.error) {
            return Object.assign({}, state, {
                current: action.current
            })
        }
        return state
    }
})
