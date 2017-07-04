import axios from 'axios'
import { GET_POSTS, SET_CURRENT_POST } from './constants'

const actions = {
  getPosts() {
    const action = { type: GET_POSTS }
    return dispatch => {

            dispatch(Object.assign({}, action, { pending: true }))

            return axios.get('/api/v1/posts')
                .then(res => {
                    dispatch(Object.assign({}, action, { payload: res.data }))
                    return res
                })
                .catch(err => {
                    dispatch(Object.assign({}, action, {error: true, payload: err}))
                    throw err
                })
        }
  },

  setCurrentPost(current) {
    const action = { type: SET_CURRENT_POST }
    return dispatch => {
      return dispatch(Object.assign({}, action, { current: current }))
    }
  }
}

export default actions
