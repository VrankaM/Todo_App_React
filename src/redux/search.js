import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: ""
  },
  reducers: {
    update: (state, updated) => {
      state.searchValue = updated.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = searchSlice.actions

export default searchSlice.reducer