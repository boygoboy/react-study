import * as actionTypes from './constants.js'

export const changeUserInfo=(userInfo)=>({
    type:actionTypes.CHANGE_USERINFO,
    userInfo
})