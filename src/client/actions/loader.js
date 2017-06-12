import { LOADED } from './constants'

const actions = {
    setLoader() {
      const action = { type: LOADED }
      return dispatch => {

          return dispatch(Object.assign({}, action))
          //   .then(res => {
          //       console.log(res)
          //       dispatch(Object.assign({}, action, { payload: res }))
          //       return dispatch(actions.fetchCurrentUser())
          //   })
          //   .catch(err => {
          //       dispatch(Object.assign({}, action, {error: true, payload: err}))
          //       throw err
          //   })
          // }
      }
  }
}

export default actions
