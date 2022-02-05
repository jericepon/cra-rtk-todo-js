import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'

const Todo = () => {
	return (
		<Grid item xs={10} mt="9%" mx="auto">
			<Box
				component={Paper}
				borderRadius={4}
				px="30px"
				py="40px"
				elevation={10}
				display="flex"
				flexDirection="column"
				alignItems="start"
			>
				<TodoHeader />
				<TodoList />
			</Box>
		</Grid>
	)
}

export default Todo
