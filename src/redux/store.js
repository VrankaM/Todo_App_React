import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todos"
import searchReducer from "./search"
import limitReducer from "./limit"

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        search: searchReducer,
        limit: limitReducer
    },
  })