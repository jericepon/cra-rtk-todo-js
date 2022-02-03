import React from 'react'
import { format } from 'date-fns'
import { Typography } from '@mui/material'

function App() {
	const today_date = format(new Date(), '\'Today is a\' eeee')

	return (
		<>
			<Typography variant="h2">{today_date}</Typography>
		</>
	)
}

export default App
