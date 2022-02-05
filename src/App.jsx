import React from 'react'
import { Grid } from '@mui/material'
import Todo from './Components/Todo'

function App() {

	return (
		<Grid container spacing={0} height='100vh'>
			<Todo />
		</Grid>
	)
}

export default App
