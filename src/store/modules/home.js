import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/api/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const featchHomeDataAction =createAsyncThunk('fetchHomeData',(payload,{dispatch})=>{
    console.log(payload)
    getHomeDiscountData().then(res=>{
        dispatch(setDiscountData(res))
    })
    getHomeHotRecommendData().then(res=>{
        dispatch(setRecommendInfo(res))
    })

    getHomeLongforData().then(res=>{
        dispatch(setLongForInfo(res))
    })

    getHomeGoodPriceData().then(res=>{
        dispatch(setGoodPriceInfo(res))
    })

    getHomeHighScoreData().then(res=>{
        dispatch(setHighScoreInfo(res))
    })
    
    getHomePlusData().then(res=>{
        dispatch(setPlusInfo(res))
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
      discountData:{},
      recommendInfo:{},
      longforInfo:{},
      goodPriceInfo:{},
      highScoreInfo:{},
      plusInfo:{},
    },
    reducers: {
      setDiscountData(state, { payload }) {
        state.discountData = payload
      },
      setRecommendInfo(state, { payload }) {
        state.recommendInfo = payload
      },
      setLongForInfo(state, { payload }) {
        state.longforInfo = payload
      },
      setGoodPriceInfo(state, { payload }) {
        state.goodPriceInfo = payload
      },
      setHighScoreInfo(state,{payload}){
        state.highScoreInfo=payload
      },
      setPlusInfo(state,{payload}){
        state.plusInfo=payload
      }
    }
  })
  
  export const { setDiscountData,setRecommendInfo, setLongForInfo,setGoodPriceInfo,setHighScoreInfo,setPlusInfo} = homeSlice.actions
  export default homeSlice.reducer