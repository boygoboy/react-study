import React, {memo,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {setHeaderConfig} from '@/store'
import {EntireWrapper} from './css'
import SearchTab from './components/SearchTab'
import EntireRoom from './components/EntireRoom'
import {fetchRoomListAction} from '@/store/history-modules/entire'
import EntirePagination from './components/EntirePagination'

const Entire=memo(()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(setHeaderConfig({
            isFixed:true,
            topAlpha:false
        }))
        dispatch(fetchRoomListAction())
    },[dispatch])

    return (
        <EntireWrapper>
            <SearchTab></SearchTab>
            <EntireRoom></EntireRoom>
            <EntirePagination></EntirePagination>
        </EntireWrapper>
    )
})

export default Entire;