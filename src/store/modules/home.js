import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/api/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const featchHomeDataAction =createAsyncThunk('fetchHomeData',(payload,{dispatch})=>{
    console.log(payload)
    getHomeDiscountData().then(res=>{
        dispatch(setDiscountData(res))
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
      discountData:{},
    },
    reducers: {
      setDiscountData(state, { payload }) {
        state.discountData = payload
      }
    }
  })
  
  export const { setDiscountData } = homeSlice.actions
  export default homeSlice.reducer