import React,{memo,useEffect} from 'react';
import {  useDispatch,useSelector,shallowEqual } from 'react-redux'
import {setHeaderConfig,featchHomeDataAction} from '@/store'
import {HomeWrapper} from './css'
import HomeBanner from './components/HomeBanner'
import HomeArea1 from './components/HomeArea1'
import {isEmptyO} from '@/utils'

const Home = memo(() => {
    const {discountData}=useSelector(state=>({
        discountData:state.home.discountData
    }),shallowEqual)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(featchHomeDataAction('fetchHomeData'))
      dispatch(setHeaderConfig({
          isFixed:true,
          topAlpha:true
      }))
    },[dispatch])
    return (
       <HomeWrapper>
           <HomeBanner/>
           <div className="content">
            {isEmptyO(discountData) && <HomeArea1 dataInfo={discountData} />}
           </div>
       </HomeWrapper>
    )
})

export default Home;    