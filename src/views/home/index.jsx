import React,{memo,useEffect} from 'react';
import {  useDispatch } from 'react-redux'
import {setHeaderConfig} from '@/store'
import {HomeWrapper} from './css'
import HomeBanner from './components/HomeBanner'

const Home = memo(() => {
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(setHeaderConfig({
          isFixed:true,
          topAlpha:true
      }))
    },[dispatch])
    return (
       <HomeWrapper>
           <HomeBanner/>
       </HomeWrapper>
    )
})

export default Home;    