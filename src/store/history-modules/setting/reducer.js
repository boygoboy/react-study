import * as actionTypes from './constants.js'
const initialState = {
    title: '默认标题',
    backgroundColor: 'red'
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TITLE:
        return { ...state, title: action.title }
    case actionTypes.CHANGE_BACKGROUNDCOLOR:
        return { ...state, backgroundColor: action.backgroundColor }
    default:
      return state
  }
}


export default reducer
