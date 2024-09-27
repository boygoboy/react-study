import {getEntireRoomList} from '@/api/entire'

import * as actionTypes from './constants.js'

export const changeCurrentPageAction=(currentPage)=>({
    type:actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction=(roomList)=>({
    type:actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction=(totalCount)=>({
    type:actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction=(isLoading)=>{
    return{
        type:actionTypes.CHANGE_IS_LOADING,
        isLoading
    }
}


export const fetchRoomListAction=(currentPage=0)=>{
    return async (dispatch,getState)=>{
        dispatch(changeIsLoadingAction(true))
        const res=await getEntireRoomList(currentPage*20)
        dispatch(changeIsLoadingAction(false))
        const roomList=res.list
        const totalCount=res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}