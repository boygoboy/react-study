import { createSlice } from "@reduxjs/toolkit"

const systemSlice = createSlice({
  name: "system",
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

export const { addNumber, subNumber } = systemSlice.actions
export default systemSlice.reducer