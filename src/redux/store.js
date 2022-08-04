import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todos"
import searchReducer from "./search"

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        search: searchReducer
    },
  })