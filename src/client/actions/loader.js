import { LOADED } from './constants'

const actions = {
  setLoader() {
    const action = { type: LOADED }
    return dispatch => {
      return dispatch(Object.assign({}, action))
    }
  }
}

export default actions
