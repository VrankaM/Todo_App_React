import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    refresh: false
  },
  reducers: {
    update: (state, updated) => {
      state.todos = updated.payload
    },
    toggleRefresh: (state) => {
      state.refresh = !state.refresh
    }
  },
})

// Action creators are generated for each case reducer function
export const { update, toggleRefresh } = todosSlice.actions

export default todosSlice.reducer