import React ,{memo,useEffect} from 'react';
import {DetailWrapper} from './css'
import { useDispatch } from 'react-redux'
import {setHeaderConfig} from '@/store'
import DetailPictures from './components/DetailPictures'
import DetailInfos from './components/DetailInfos'


const Detail =memo(()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setHeaderConfig({
            isFixed:false,
            topAlpha:false
        }))
    },[dispatch])
    return (
        <DetailWrapper>
       <DetailPictures/>
         <DetailInfos/>
        </DetailWrapper>
    )
})

export default Detail;