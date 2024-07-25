import { createSlice } from "@reduxjs/toolkit"

const commonSlice = createSlice({
  name: "common",
  initialState: {
    counter: 888
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter = state.counter + payload
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload
    }
  }
})

export const { addNumber, subNumber } = commonSlice.actions
export default commonSlice.reducer