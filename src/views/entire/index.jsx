import React, {memo,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {setHeaderConfig} from '@/store'
import {EntireWrapper} from './css'
import SearchTab from './components/SearchTab'
import EntireRoom from './components/EntireRoom'

const Entire=memo(()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(setHeaderConfig({
            isFixed:true,
            topAlpha:false
        }))
    },[dispatch])

    return (
        <EntireWrapper>
            <SearchTab></SearchTab>
            <EntireRoom></EntireRoom>
        </EntireWrapper>
    )
})

export default Entire;