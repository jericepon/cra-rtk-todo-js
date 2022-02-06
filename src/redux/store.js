import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todos/TodosSlice'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
})
