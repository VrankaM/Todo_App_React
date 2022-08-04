import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    update: (state, updated) => {
      state.todos = updated.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = todosSlice.actions

export default todosSlice.reducer