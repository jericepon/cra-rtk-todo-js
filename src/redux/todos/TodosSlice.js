import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ApiService } from '../../Utilities/ApiService'

export const getAllTodos = createAsyncThunk('users/getAllTodos', async () => {
	const response = await ApiService.get('/')
	return response.data
})

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [
		],
		status: {
			loading: false,
			success: false,
			failed: false,
		},
	},
	extraReducers: {
		[getAllTodos.pending]: (state) => {
			state.status.loading = true
		},
		[getAllTodos.fulfilled]: (state, action) => {
			state.status.loading = false
			state.status.success = true
			state.todos = action.payload
		},
		[getAllTodos.rejected]: (state) => {
			state.status.loading = false
			state.status.success = false
			state.status.failed = true
		},
	},
})

export default todosSlice.reducer
