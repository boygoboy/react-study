import React,{memo,useEffect} from 'react';
import {  useDispatch,useSelector,shallowEqual } from 'react-redux'
import {setHeaderConfig,featchHomeDataAction} from '@/store'
import {HomeWrapper} from './css'
import HomeBanner from './components/HomeBanner'
import HomeArea1 from './components/HomeArea1'
import HomeArea2 from './components/HomeArea2';
import HomeArea3 from './components/HomeArea3';
import HomeArea4 from './components/HomeArea4';
import {isEmptyO} from '@/utils'

const Home = memo(() => {
    const {discountData,recommendInfo,longforInfo,goodPriceInfo,highScoreInfo,plusInfo}=useSelector(state=>({
        discountData:state.home.discountData,
        recommendInfo:state.home.recommendInfo,
        longforInfo:state.home.longforInfo,
        goodPriceInfo:state.home.goodPriceInfo,
        highScoreInfo:state.home.highScoreInfo,
        plusInfo:state.home.plusInfo
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
            {isEmptyO(recommendInfo) && <HomeArea1 dataInfo={recommendInfo} />}
            {isEmptyO(longforInfo) && <HomeArea2 dataInfo={longforInfo} />}
            {isEmptyO(goodPriceInfo) && <HomeArea3 dataInfo={goodPriceInfo} />}
            {isEmptyO(highScoreInfo) && <HomeArea3 dataInfo={highScoreInfo} />}
            {isEmptyO(plusInfo) && <HomeArea4 dataInfo={plusInfo} />}
           </div>
       </HomeWrapper>
    )
})

export default Home;    