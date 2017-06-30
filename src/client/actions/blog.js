import axios from 'axios'
import { GET_POSTS } from './constants'

const actions = {
  getPosts() {
    const action = { type: GET_POSTS }
    return dispatch => {

            dispatch(Object.assign({}, action, { pending: true }))

            return axios.get('api/v1/posts')
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res.data }))
                    return res
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err
                })
        }
  }
}

export default actions
