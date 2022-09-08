import { createSlice } from '@reduxjs/toolkit'

export const limitSlice = createSlice({
  name: 'limit',
  initialState: {
    limit: 10,
    fetchFinished: false
  },
  reducers: {
    reset: (state) => {
      state.limit = 10
      state.fetchFinished = false
    },
    increment: (state) => {
      state.limit += 5
    },
    toggle: (state) => {
      state.fetchFinished = !state.fetchFinished
    }
  },
})

// Action creators are generated for each case reducer function
export const { reset, increment, toggle } = limitSlice.actions

export default limitSlice.reducer