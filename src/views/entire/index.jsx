import React, {memo,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {setHeaderConfig} from '@/store'

const Entire=memo(()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(setHeaderConfig({
            isFixed:true,
            topAlpha:false
        }))
    },[dispatch])

    return (
        <div>
            <h1>Entire</h1>
        </div>
    )
})

export default Entire;