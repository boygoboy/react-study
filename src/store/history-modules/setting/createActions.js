import * as actionTypes from './constants.js'

export const changeTitle=(title)=>({
    type:actionTypes.CHANGE_TITLE,
    title
})

export const changeBackgroundColor=(backgroundColor)=>({
    type:actionTypes.CHANGE_BACKGROUNDCOLOR,
    backgroundColor
})