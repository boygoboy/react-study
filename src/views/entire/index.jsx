import React, {memo,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {setHeaderConfig} from '@/store'
import {EntireWrapper} from './css'
import SearchTab from './components/SearchTab'

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
            <h1>Entire</h1>
        </EntireWrapper>
    )
})

export default Entire;