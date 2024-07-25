import * as actionTypes from './constants.js'

const initialState = {
  userInfo: {}
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_USERINFO:
        return { ...state, userInfo: action.userInfo }
    default:
      return state
  }
}


export default reducer
