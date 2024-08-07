import { createSlice } from "@reduxjs/toolkit"

const systemSlice = createSlice({
  name: "system",
  initialState: {
    headerConfig:{
        isFixed:false,
        topAlpha:false,
    }
  },
  reducers: {
    setHeaderConfig(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { setHeaderConfig } = systemSlice.actions
export default systemSlice.reducer