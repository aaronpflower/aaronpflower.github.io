import { GET_POSTS } from '../actions/constants'
import createReducer from './createReducer'

const initialState = {
    posts: []
}

module.exports = createReducer(initialState, {
    [GET_POSTS]: (state, action) => {
        if (!action.pending && !action.error) {
            return Object.assign({}, ...state, {
                posts: action.payload
            })
        }
        return state
    }
})
